const express = require('express');
const app = express();

const http = require('http').Server(app);

let io = require('socket.io')(http);


app.use(express.static('public'));



http.listen(3000, function() {
    console.log('listening on *:3000');
});

io.on('connection', function(socket) {
    console.log('New user connected');

    socket.on('message', function(data) {
        io.emit('new message', data);

    });

});