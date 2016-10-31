const app = require('./lib/app');
const http = require('http');
const port = process.env.PORT || 3000;

// configure the store to use a pirates directory
const store = require('bad-store');
const path = require('path');
const storeDir = path.join(__dirname, 'pirates');
store.config(storeDir);

const server = http.createServer(app);

server.listen(port, () => {
    console.log('app running on port', server.address().port);
})

