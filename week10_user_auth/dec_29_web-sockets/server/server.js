require('dotenv').load();
const app = require('./lib/app');
const chat = require('./lib/chat');
const http = require('http');
const port = process.env.PORT || 3000;
require('./lib/setup-mongoose');

const server = http.createServer(app);

// attached socket.io here
chat(server);

server.listen(port, () => {
    console.log('server running at', server.address());
});