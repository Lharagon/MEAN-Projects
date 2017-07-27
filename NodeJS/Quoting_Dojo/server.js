var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,'./views')));
app.set('view engine', 'ejs');
mongoose.connect('mongodb://localhost/quoting_dojo');
var UserSchema = new mongoose.Schema({
  name: String,
  quote: String
}, {timestamps: true})
mongoose.model('User', UserSchema);
var User = mongoose.model('User');

app.get('/', function (req, res) {
  res.render('index')
})

app.post('/quotes', function(req, res) {
  var user = new User({name: req.body.name, quote: req.body.quote});
  user.save(function(err) {
    if (err) {
      console.log('something went wrong');
    } else {
      console.log('success');
      res.redirect('/quotes');
    }
  })
})

app.get('/quotes', function(req, res) {
  User.find({}, function (err, users) {
    if (err) {
      console.log("can't do anything right!!!!");
      res.render('quotes')
    } else {
      console.log(users);
      var users_array = users;
      res.render('quotes', {users: users_array})
    }
  })
})

app.listen(8000, function() {
  console.log("listening on port 8000");
})
