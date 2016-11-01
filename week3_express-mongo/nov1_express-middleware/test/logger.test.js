const createLogger = require( '../lib/logger' );
const assert = require( 'chai' ).assert;

describe( 'logger middleware', () => {

    let message;
    const log = m => { message = m; }
    let logger = createLogger(log);
    
    const req = { method: 'GET', url: '/pirates' };

    let nextCalled = false;
    const next = () => { nextCalled = true };

    logger(req, null, next);

	it( 'logs method and path', () => {
        assert.equal(message, `${req.method} ${req.url}`);
    });

	it( 'calls next', () => {
        assert.isOk(nextCalled, 'next was not called');
    });

});