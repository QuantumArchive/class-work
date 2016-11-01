const bodyParser = require( '../lib/body-parser' )();
const assert = require( 'chai' ).assert;
const EventEmitter = require('events');

describe( 'body parser middleware', () => {

	it( 'parses body', done => {

        const req = new EventEmitter();
        
        const next = () => {
            // test that body was added to req

            // even though technically sync,
            // call done so we know that next was called
            done();
        };

        bodyParser(req, null, next);

        req.emit('data', '{ "name": "here is some data" }');
        req.emit('end');

    });
});