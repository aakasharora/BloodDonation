module.exports = function (server) {
    var io = require('socket.io')();

    io.on('connection', function (socket) {
        socket.on('donor', function () {
            io.sockets.emit('donor');
        });
    });
    io.listen(server);
    return io;
};