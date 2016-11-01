
module.exports = function createLogger(log) {

    return function logger(req, res, next) {
        log(`${req.method} ${req.url}`);
        next();
    }

};