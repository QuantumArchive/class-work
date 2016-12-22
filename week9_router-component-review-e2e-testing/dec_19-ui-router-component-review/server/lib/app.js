const express = require('express');
const app = express();

/* middleware */
const morgan = require('morgan');
const redirectHttp = require('./redirect-http')();
const cors = require('cors')();
const checkDb = require('./check-connection')();
const errorHandler = require('./error-handler');

app.use(morgan('dev'));
// Redirect http to https in production
if(process.env.NODE_ENV === 'production') {
    app.use(redirectHttp);
}
app.use(cors);
app.use(express.static('./public'));
app.use(errorHandler);


/* routes */
const pirates = require('./routes/pirates');
const crews = require('./routes/crews');
app.use(checkDb);
app.use('/api/crews', crews);
app.use('/api/pirates', pirates);


module.exports = app;