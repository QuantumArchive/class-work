
module.exports = function createBodyParser() {

    return function bodyParser(req, res, next) {
        
        let body = '';
        req.on('data', chunk => {});

        req.on('end', () => {
            // parse the data
            // add to req
            // call next
        });
    }

};