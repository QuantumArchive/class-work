const express = require('express');
const app = express();
const errorHandler = require('./error-handler')
const morgan = require('morgan');

const auth = require('./routes/auth');
const pirates = require('./routes/pirates');
const crews = require('./routes/crews');

// create the middleware for ensureAuth, doesn't currently take params
const ensureAuth = require('./auth/ensure-auth')();
// the ensureRole middleware factory function takes one or more
// roles required to pass that middleware
const ensureRole = require('./auth/ensure-role');
// // we could pre-make middle if shared roles:
// const ensureAdmin = ensureRole('admin');

app.use(morgan('dev'));

app.use('/api/auth', auth);
app.use('/api/pirates', ensureAuth, pirates);
app.use('/api/crews', ensureAuth, ensureRole('admin', 'super-user'), crews);

app.use(errorHandler);


module.exports = app;