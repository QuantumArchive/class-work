const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
chai.use(chaiHttp);

const app = require('../lib/app');
const db = require('./db');

describe('albums', () => {

    const request = chai.request(app);

    before(db.drop());

    let authHeader = null;
    
    before(() => db.createUser(request)
        .then(token => {
            assert.isOk(token);
            authHeader = { Authorization: `Bearer ${token}` };
        })
    );

    let album = { name: 'cute bunnies' };

    it('/GET all', () => request
        .get('/api/albums')
        .set(authHeader)
        .then(res => assert.deepEqual(res.body, []))
    );

    it('/POST', () => request
        .post('/api/albums')
        .set(authHeader)
        .send(album)
        .then(({ body }) => {
            assert.ok(body._id);
            assert.equal(album.name, body.name);
            album = body;
        })
    );

    let image = { 
        title: 'the image',
        url: 'http:/images.com/123.png'
    };
    
    it('/POST image with album id', () => {
        image.album = album._id;
        return request
            .post('/api/images')
            .set(authHeader)
            .send(image)
            .then(({ body }) => image = body);
    });

    it('/GET by id', () => request
        .get(`/api/albums/${album._id}`)
        .set(authHeader)
        .then(({ body }) =>  {
            assert.equal(body._id, album._id);
            assert.equal(body.name, album.name);
            assert.isOk(body.images);
            assert.deepEqual(body.images, [image]);
        })
    );

    it('/GET all after post contains one item', done => {
        request
            .get('/api/albums')
            .set(authHeader)
            .then(({ body }) => {
                assert.deepEqual(body, [album]);
                done();
            })
            .catch(done);
    });

    const name = 'cute kittens';

    it('/PUT new album name', () => request
        .put(`/api/albums/${album._id}`)
        .set(authHeader)
        .send({ name })
        .then(({ body }) => assert.equal(body.name, name))
    );

    it('/DELETE album', () => request
        .delete(`/api/albums/${album._id}`)
        .set(authHeader)
    );

    it('/GET by id gives 404', () => request
        .get(`/api/albums/${album._id}`)
        .set(authHeader)
        .then(
            () => { throw new Error('unexpected success response'); },
            res => assert.equal(res.status, 404)
        )
    );

    it('removes associated images', () => request
        .get('/api/images')
        .set(authHeader)
        .then(res => res.body)
        .then(images => assert.equal(images.length, 0))
    );

});