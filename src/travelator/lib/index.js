var app = require('http').createServer(handler);
var io = require('socket.io').listen(app);
var fs = require('fs');

app.listen(8080);

function handler(req, res) {
    var fileName = 'index.html';

    if (req.url != '/') {
        fileName = req.url.substr(1);
    }

    fs.readFile(__dirname + '/../assets/' + fileName,
        function(err, data) {
            if (err) {
                console.log(err);

                res.writeHead(500);
                return res.end('Error loading file');
            }

            res.writeHead(200);
            res.end(data);
        });
}

io.sockets.on('connection', function(socket) {
    socket.on('score', function(playerData) {
        console.log(playerData);
    });

    socket.emit('acknowledgement', {
        hello: 'Score Recieved'
    });
    
});
