const chai = require( 'chai' );
const chaiHttp = require( 'chai-http' );
const assert = chai.assert;
chai.use(chaiHttp);

const path = require('path');
const rimraf = require('rimraf');
const store = require('bad-store');

const app = require( '../lib/app' );

describe( 'pirates api', () => {

    const testDir = path.join(__dirname, 'test-dir');

    const removeDir = done => rimraf(testDir, done);
    before(removeDir);
    after(removeDir);
	
    before( () => {
		store.config(testDir);
	});

	const request = chai.request( app );

	const luffy = {
		name: 'Monkey D Luffy',
		rank: 'captain'
	};

	it( '/GET all empty on init', done => {
		request
			.get( '/pirates' )
			.then( res => {
				assert.deepEqual( res.body, [] );
				done();
			})
			.catch( done );
	});

	it( '/POST', done => {
		request
			.post( '/pirates' )
			.send( luffy )
			.then( res => {
				const id = res.body.id;
				assert.equal( id, luffy.name );
				done();
			})
			.catch( done );

	});

	it( '/GET by id', done => {
		request
			.get( `/pirates/${luffy.name}` )
			.then( res => {
				const pirate = res.body;
				assert.deepEqual( pirate, luffy );
				done()
			})
			.catch( done );
	});

	it( '/GET all after post', done => {
		request
			.get( '/pirates' )
			.then( res => {
				assert.deepEqual( res.body, [ luffy ] );
				done();
			})
			.catch( done );
	});

	it( 'add another pirate', done => {
		request
			.post( '/pirates' )
			.send({ name: 'zoro', rank: 'swordsman' })
			.then( res => {
				assert.ok( res.body.id );
				done();
			})
			.catch( done );
	});
});
