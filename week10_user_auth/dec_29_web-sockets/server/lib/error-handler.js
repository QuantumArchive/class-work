module.exports = function() {

    return function errorHandler(err, req, res, next) { //eslint-disable-line no-unused-vars

        let code = 500, message = 'Internal Server Error';

        // Mongoose Validation Error?
        if(err.name === 'ValidationError' || err.name === 'CastError') {
            code = 400;
            message = err.message;
            console.log('VALIDATION ERROR', code, message);
        }
        // Is this one of our errors?
        else if(err.code) {
            // by convention, we're passing in an object: 
            // {
            //   code: <http status code>,
            //   message: <user-facing message>
            // }
            code = err.code;
            message = err.message;
            console.log('ERROR', code, message);
        }
        // or something unexpected?
        else {
            console.log('ERROR*', err);
        }

        res.status(code).send({ message });
    };
};