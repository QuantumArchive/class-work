const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
chai.use(chaiHttp);

const connection = require('../lib/setup-mongoose');
const app = require('../lib/app');

describe('pirate', () => {

	before(done => {
		const drop = () => connection.db.dropDatabase(done);
		if (connection.readyState === 1) drop();
		else {
			connection.on('open', drop);
		}
	});

	const request = chai.request(app);

	const luffy = {
		name: 'Monkey D Luffy',
		rank: 'captain'
	};

	it('/GET all', done => {
		request
			.get('/api/pirates')
			.then(res => {
				assert.deepEqual(res.body, []);
				done();
			})
			.catch(done);
	});

	it('/POST', done => {
		request
			.post('/api/pirates')
			.send(luffy)
			.then(res => {
				const pirate = res.body;
				assert.ok(pirate._id);
				luffy._id = pirate._id;
				done();
			})
			.catch(done);

	});

	it('/GET by id', done => {
		request
			.get(`/api/pirates/${luffy._id}`)
			.then(res => {
				const pirate = res.body;
				assert.deepEqual(pirate, luffy);
				done()
			})
			.catch(done);
	});

	it('/GET all after post', done => {
		request
			.get('/api/pirates')
			.then(res => {
				assert.deepEqual(res.body, [ luffy ]);
				done();
			})
			.catch(done);
	});

	it('add a non-captain pirate', done => {
		request
			.post('/api/pirates')
			.send({ name: 'zoro', rank: 'swordsman' })
			.then(res => {
				assert.ok(res.body._id);
				done();
			})
			.catch(done);
	})

	it('/GET where rank is captain', done => {
		request
			.get('/api/pirates')
			.query({ rank: 'captain' })
			.then(res => {
				assert.deepEqual(res.body, [ luffy ]);
				done();
			})
			.catch(done);
	});
	
});