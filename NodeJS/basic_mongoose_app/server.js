var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
var path = require('path');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/basic_mongoose');
var UserSchema = new mongoose.Schema({
  name: String,
  age: Number
})

mongoose.model('User', UserSchema);
var User = mongoose.model('User')

app.use(express.static(path.join(__dirname, './views')));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  User.find({}, function (err, users) {
    if (err) {
      console.log("could not do anything right!!!!!!")
    } else {
      console.log(users);
      var users_array = users;
      res.render('index', {users: users_array});
    }

  })
});

app.post('/users', function(req, res) {
  console.log("POST DATA", req.body);

  var user = new User({name: req.body.name, age: req.body.age});
  user.save(function(err) {
    if(err) {
      console.log('something went wrong');
    } else {
      console.log('successfully added a user!');
      res.redirect('/');
    }
  })
})

app.listen(8000, function() {
  console.log("listening on port 8000");
})
