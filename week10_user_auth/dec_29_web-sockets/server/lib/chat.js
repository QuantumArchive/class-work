const socketIO = require('socket.io');

module.exports = function(server) {
    // create the socket io instance based on
    // supplied http server
    const io = socketIO(server);
    // "io" === socket.io server

    // this event happens whenever a client web socket
    // connect to the server
    io.on('connection', client => {
        // "client" is the individual connected client socket
        console.log('a user connected');

        io.emit('message', { text: 'user joined' });
  
        // listen for this client to emit a
        // "message" event
        client.on('message', message => {
            // then server will broadcast (everyone but originating client)
            // same message
            client.broadcast.emit('message', message);
        });
  
        client.on('disconnect', function(){
            // just for fun, log when client leaves
            console.log('user disconnected');
        });
  
    });
};