var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path')
var session = require('express-session');

var sessionConfig = {
  secret: 'CookieMonster',
  resave: false,
  saveUninitialized: true,
  name: 'myCookie',
  cookie: {
    secure: false,
    httpOnly: false,
    maxAge: 3600000
  }
}
mongoose.connect('mongodb://localhost/meanStackWall');
var Schema = mongoose.Schema;

//User Model
var UserSchema = new mongoose.Schema({
  username: {type: String, required: true, maxlength: 20},
  }, { timestamps: true })
mongoose.model('User', UserSchema);
var User = mongoose.model('User')

//Message Model
var MessageSchema = new mongoose.Schema({
  author: { type: String, required: true},
  content: {type: String, required: true},
  comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
}, { timestamps: true })
mongoose.model('Message', MessageSchema);
var Message = mongoose.model('Message')

//Comment Model
var CommentSchema = new mongoose.Schema({
  author: { type: String, required: true},
  _message: {type: Schema.Types.ObjectId, ref: 'Message'},
  content: {type: String, required: true}
}, { timestamps: true })
mongoose.model('Comment', CommentSchema);
var Comment = mongoose.model('Comment')

app.use(session(sessionConfig));
app.use(express.static(path.join(__dirname, 'wallApp', 'dist')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

//  Routes

app.post('/api/addUser', function(req, res) {

  User.findOne(req.body, function(err, userFound) {

    if (userFound == null) {
      var newUser = new User(req.body);
      newUser.save(function(err, newUser2) {
        if (err) {
          console.log(err);
        } else {
          req.session.currentUserId = newUser2._id;
          req.session.currentUser = newUser2;
          console.log('new user was created!')
          res.json(newUser2);
        }
      })
    } else {
      req.session.currentUserId = userFound._id;
      req.session.currentUser = userFound;
      console.log('existing user was loaded! ', userFound)
      res.json(userFound);
    }
  })
})

app.get('/api/getCurrentUser', function(req, res) {
  User.findOne({_id: req.session.currentUserId}, function(err, currentUser) {
    if (err) {
      console.log('Could not get current User!!!!!')
    } else {
      console.log('CurrentUser Was grabbed')
      res.json(currentUser)
    }
  })
})

app.get('/api/getCurrentMessageList', function(req, res) {
  Message.find({}).populate('comments').exec(function(err, messages) {
    if (err) {
      console.log('this did not work, ', err);
    } else {
      res.json(messages)
    }
  })
})

app.post('/api/addMessage', function(req, res) {
    var newMessage = new Message(req.body);
    newMessage.save(function(err, newMessage) {
        if (err) {
          console.log("Added a new Message NOT successfully");
        } else {
          Message.find({}, function(err, messageList) {
            if(err) {
              console.log('Could not grab Message List')
            } else {
              Message.find({}).populate('comments').exec(function(err, messages) {
                if (err) {
                  console.log('this did not work, ', err);
                } else {
                  res.json(messages)
                }
              })
            }
          })
        }
      })
})
app.post('/api/addComment/:id', function(req, res) {
  console.log("Came into addCommentRoute with ", req.body)
  Message.findOne({ _id: req.params.id }, function (err, message) {
    if (err) {
      console.log('this did not work, finding message by id')
    } else {
      var comment = new Comment(req.body);
      comment._message = message._id;
      comment.save(function(err) {
        message.comments.push(comment._id);
        message.save(function(err) {
          if(err) {
            console.log('Error in comment adding.')
          } else {
            Message.find({}).populate('comments').exec(function(err, messages) {
              if (err) {
                console.log('this did not work, ', err);
              } else {
                res.json(messages)
              }
            })
          }
        })
      })
    }
  })
})

app.get('api/getOut', function (req, res) {
    delete req.session.currentUserId;
    delete req.session.currentUser
    res.sendStatus(200)
})

app.all('*', (req, res, next) => {
  res.sendfile(path.resolve('./wallApp/dist/index.html'))
})

app.listen(8000, function() {
  console.log("Running on localhost: 8000")
})
