var express = require("express");
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

// app.get('/result', function (req, res, data) {
//     console.log(data)
//     res.render('result', {info: data})
// })

app.post('/process', function(req, res) {
    // console.log(req.body)
    // res
    res.render('result', {info: req.body})
})

app.listen(8000, function() {
    console.log('listening on port 8000')
})