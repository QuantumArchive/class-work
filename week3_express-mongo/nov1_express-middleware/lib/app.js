const express = require('express');
const app = express();
const pirates = require('./routes/pirates');
const errorHandler = require('./error-handler')
const morgan = require('morgan');
const log = morgan('dev');

app.use(log);

app.use('/api/pirates', pirates);

app.use(errorHandler);

module.exports = app;


// app.use((req, res, next) => {
//     console.log(req.method, req.path);
//     req.hasLogged = true;
//     next();
// });

// app.get('/', (req, res, next) => {
//     res.send('normal route handler, hasLogged: ' + req.hasLogged);
// });

// app.use('/foo', (req, res, next) => {
//     res.send('/foo use handler');
// });

// app.use((req, res, next) => {
//     res.send('catch-all use handler');
// });
