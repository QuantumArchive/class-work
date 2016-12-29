const io = require('socket.io-client');

chatService.$inject = ['$rootScope'];

export default function chatService($rootScope) {
    // externalize the host into an env variable via angular.constant
    const socket = io('http://localhost:3000');

    // this is the service singleton instance
    return {
        onMessage(callback) {
            socket.on('message', response => {
                $rootScope.$apply(() => callback(response));
            });
        },
        send(message) {
            socket.emit('message', message);
        }
    };
}