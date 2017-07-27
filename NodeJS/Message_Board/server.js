var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './views')));
app.set('view engine', 'ejs');
mongoose.connect('mongodb://localhost/messageBoard');
var Schema = mongoose.Schema;
var MessageSchema = new mongoose.Schema({
  name: {type: String, required: true, minlength: 4},
  text: {type: String, required: true, minlength: 2},
  comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
}, {timestamps: true} );

mongoose.model('Message', MessageSchema);
var Message = mongoose.model('Message');

var CommentSchema = new mongoose.Schema({
  _message: {type: Schema.Types.ObjectId, ref: 'Message'},
  name: {type: String, required: true, minlength: 4},
  text: { type: String, required: true, minlength: 2}
}, {timestamps: true } );

mongoose.model('Comment', CommentSchema);
var Comment = mongoose.model('Comment');

app.get('/', function (req, res) {
      Message.find({})
      .populate('comments')
      .exec(function (err, messages) {
        if (err) {
          console.log("this did not work, ", err);
        } else {
          console.log("message list ", messages);
          res.render('index', {messages: messages});
        }
      })
    })

app.post('/addMessage', function(req, res) {
  var message = new Message({name: req.body.name, text: req.body.message});
  message.save(function(err) {
    if (err) {
      console.log("Was not able to add a new Message");
      res.redirect('/');
    } else {
      console.log('Added a new Message');
      res.redirect('/');
    }
  })
})

app.post('/comment/:id', function (req, res) {
  Message.findOne({ _id : req.params.id }, function(err, message) {
    if (err) {
      console.log('this did not work to find one by id')
      res.redirect('/');
    } else {
      var comment = new Comment({name: req.body.name, text: req.body.comment});
      console.log("My newly made comment ",comment)
      comment._message = message._id;
      comment.save(function(err) {
        console.log(comment);
        message.comments.push(comment._id);
        message.save(function(err) {
          if(err) {
            console.log('Error in comment adding.')
          } else {
            console.log('succeeded in adding a comment')
            res.redirect('/')
          }
        })
      })
    }
  })
})

app.listen(8000, function() {
  console.log('listening on port 8000');
})
