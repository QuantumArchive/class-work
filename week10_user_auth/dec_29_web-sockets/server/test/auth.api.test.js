const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
chai.use(chaiHttp);

const db = require('./db');

const connection = require('../lib/setup-mongoose');

const app = require('../lib/app');

describe('auth', () => {

    const request = chai.request(app);
    
    before(db.drop(connection));

    describe('unauthorized', () => {

        it('400 with no token', () => request
            .get('/api/albums')
            .then(
                () => { throw new Error('status should not be 200'); },
                res => {
                    assert.equal(res.status, 400);
                    assert.equal(
                        res.response.body.error, 
                        'no token provided'
                    );
                }
            )
        );

        it('401 with invalid token', () => request
            .get('/api/albums')
            .set('Authorization', 'Bearer badtoken')
            .then(
                () => { throw new Error('status should not be 200'); },
                res => {
                    assert.equal(res.status, 401);
                    assert.equal(
                        res.response.body.error, 
                        'invalid token'
                    );
                }
            )
        );

    });

    describe('user management', () => {

        const badRequest = (url, send, error) => request
            .post(url)
            .send(send)
            .then(
                () => { throw new Error('status should not be 200'); },
                ({ status, response: { body } }) => {
                    assert.equal(status, 400);
                    assert.equal(body.message, error);
                }
            );

        it('signup requires username', () => badRequest(
            '/api/auth/signup', 
            { password: 'abc' }, 
            'username and password are required'
        ));	
        
        it('signup requires password', () => badRequest(
            '/api/auth/signup', 
            { username: 'abc' }, 
            'username and password are required'
        ));

        const user = {
            username: 'Monkey D Luffy',
            password: 'GumGum'
        };

        let token = '';

        it('signup', () => request
            .post('/api/auth/signup')
            .send(user)
            .then(res => assert.isOk(token = res.body.token))
        );

        it('can\'t use same username', () => badRequest(
            '/api/auth/signup', 
            user, 
            'username "Monkey D Luffy" already exists'
        ));

        it('token is valid', done => {
            request
                .get('/api/albums')
                .set('Authorization', `Bearer ${token}`)
                .then(res => assert.ok(res.body))
                .then(done, done);
        });

        it('signin', done => {
            request
                .post('/api/auth/signin')
                .send(user)
                .then(res => assert.equal(res.body.token, token))
                .then(done, done);
        });

    });

    
});