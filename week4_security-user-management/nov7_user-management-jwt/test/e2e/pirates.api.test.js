const request = require('../request');
const assert = require('chai').assert;

describe('pirate', () => {

    let token = '';

    before(() =>
        request
            .post('/api/auth/signup')
            .send({ username: 'testuser', password: 'abc' })
            .then(({ body }) => assert.ok(token = body.token))
    );

    let luffy = {
        name: 'Monkey D Luffy',
        rank: 'captain'
    };

    it('/GET all', () =>
        request
            .get('/api/pirates')
            .set('Authorization', `Bearer ${token}`)
            .then(({ body }) => assert.deepEqual(body, []))
    );

    it('/POST', () =>
        request
            .post('/api/pirates')
            .set('Authorization', `Bearer ${token}`)
            .send(luffy)
            .then(({ body }) => {
                assert.ok(body._id);
                luffy = body;
            })
    );

    it('/GET by id', () =>
        request
            .get(`/api/pirates/${luffy._id}`)
            .set('Authorization', `Bearer ${token}`)
            .then(({ body }) => assert.deepEqual(body, luffy))
    );

    it('/GET all after post', () =>
        request
            .get('/api/pirates')
            .set('Authorization', `Bearer ${token}`)
            .then(res => {
                assert.equal(res.body.length, 1);
                assert.equal(res.body[0]._id, luffy._id);
            })
    );

    it('add a non-captain pirate', () =>
        request
            .post('/api/pirates')
            .set('Authorization', `Bearer ${token}`)
            .send({ name: 'zoro', rank: 'swordsman' })
            .then(res => assert.ok(res.body._id))
    );

    it('/GET where rank is captain', () =>
        request
            .get('/api/pirates')
            .set('Authorization', `Bearer ${token}`)
            .query({ rank: 'captain' })
            .then(res => {
                assert.equal(res.body.length, 1);
                assert.equal(res.body[0]._id, luffy._id);
            })
    );
});