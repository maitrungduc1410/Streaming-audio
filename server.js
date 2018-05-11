var express = require('express');
// var BinaryServer = require('binaryjs').BinaryServer;
var fs = require('fs');
var wav = require('wav');
// var io = require('socket.io').listen(80);
var ss = require('socket.io-stream');
var path = require('path');

var app = require('express')();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
io.on('connection', function() { console.log('hehehhee') });


app.set('views', __dirname + '/tpl');
app.set('view engine', 'ejs');
app.engine('ejs', require('ejs').__express);
app.use(express.static(__dirname + '/public'))

app.get('/', function(req, res) {
    res.render('index');
});

server.listen(3700);

console.log('server open on port ' + 3700);

io.on('connection', function(socket) {
	var filename = 'test.wav';

    var fileWriter = new wav.FileWriter(filename, {
        channels: 1,
        sampleRate: 48000,
        bitDepth: 16
    });
    ss(socket).on('file', function(stream, data) {
    	console.log(data)
        // stream.pipe(fileWriter);
        // stream.on('end', function() {
        //     fileWriter.end();
        //     console.log('wrote to file ' + filename);
        // });
    });
});

// binaryServer = BinaryServer({ port: 9001 });

// binaryServer.on('connection', function(client) {
//     console.log('new connection');
//     var file_name = Date.now() + outFile
//     var fileWriter = new wav.FileWriter(file_name, {
//         channels: 1,
//         sampleRate: 48000,
//         bitDepth: 16
//     });

//     client.on('stream', function(stream, meta) {
//         console.log('new stream');
//         stream.pipe(fileWriter);

//         stream.on('end', function() {
//             fileWriter.end();
//             console.log('wrote to file ' + file_name);
//         });
//     });
// });