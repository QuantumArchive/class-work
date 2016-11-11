const request = require('../request');
const assert = require('chai').assert;

describe('auth', () => {

    describe('unauthorized', () => {

        it('400 with no token', () => 
            request
                .get('/api/pirates')
                .then(res => done('status should not be 200'))
                .catch(res => {
                    assert.equal(res.status, 400);
                    assert.equal(res.response.body.error, 'unauthorized, no token provided');
                })
        );

        it('403 with invalid token', () => 
            request
                .get('/api/pirates')
                .set('Authorization', 'Bearer badtoken')
                .then(res => done('status should not be 200'))
                .catch(res => {
                    assert.equal(res.status, 403);
                    assert.equal(res.response.body.error, 'unauthorized, invalid token');  
                })
        );

    });

    const user = {
        username: 'Monkey D Luffy',
        password: 'GumGum'
    };

    describe('user management', () => {

        const badRequest = (url, send, error) => 
            request
                .post(url)
                .send(send)
                .then(
                    () => { throw new Error('status should not be okay'); },
                    res => {
                        assert.equal(res.status, 400);
                        assert.equal(res.response.body.error, error);
                    }
                );
        
        it('signup requires username', () => 
            badRequest('/api/auth/signup', { password: 'abc' }, 'username and password must be supplied')
        );		
        
        it('signup requires password', () =>
            badRequest('/api/auth/signup', { username: 'abc' }, 'username and password must be supplied')
        );

        let token = '';

        it('signup', () => 
            request
                .post('/api/auth/signup')
                .send(user)
                .then(res => assert.ok(token = res.body.token))
        );

        it('can\'t use same username', () => 
            badRequest('/api/auth/signup', user, 'username Monkey D Luffy already exists')
        );

        it('token is valid', () =>
            request
                .get('/api/pirates')
                .set('Authorization', `Bearer ${token}`)
                .then(res => assert.ok(res.body))
        );

        it('signin', () => 
            request
                .post('/api/auth/signin')
                .send(user)
                .then(res => assert.ok(res.body.token))
        );

    });

    
});