var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/static'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('index')
})

app.post('/process', function (req, res) {
    
    return false;
})

var server = app.listen(8000, function () {
    console.log('listening on port 8000');
})

var io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket) {
    
    socket.on('posting_form', function(formdata) {
        

        socket.emit('update_message', {message: mess}

        var ramNum = Math.floor(Math.random() * 1001);
        socket.emit('random_number', {num: ramNum});
    
    })

})