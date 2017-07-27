var mongoose = require('mongoose');
var Bro = mongoose.model('Bro');
module.exports = {
  show: function(req, res) {
      Bro.find({}, function (err, bruhs) {
      if (err) {
        console.log("I can't do anything right!!!!")
      } else {
        var bruh_list = bruhs;
        // res.render('index', {mongoose: bruh_list});
        res.json(bruhs)
      }
    })
  },
  profile: function(req,res) {
      Bro.findOne({_id : req.params.id}, function(err, goose) {
        if (err) {
          console.log("Something went wrong with this goose")
        } else {
          res.render('profile', {mongoose: goose})
        }
      })
  },
  editPage: function(req, res) {
      Bro.findOne({_id : req.params.id}, function(err, goose) {
        if (err) {
          console.log("Something went wrong with this goose")
        } else {
          res.render('edit', {mongoose: goose})
        }
      })
  },
  edit: function (req, res) {
      Bro.findOne({_id : req.params.id}, function(err, goose) {
        if (err) {
          console.log('did not find anything')
        } else {
            if (req.body.name.length > 0) {
              goose.name = req.body.name;
            }
            if (req.body.age.length > 0) {
              goose.age = req.body.age;
            }
            if (req.body.saying.length > 0) {
              goose.saying = req.body.saying;
            }
            goose.save(function(err) {
              if (err) {
                console.log("could not save")
              } else {
                res.redirect('/mongooses/' + req.params.id)
              }
            })
          }
        })
    },
    addBro: function (req, res) {
      var bro = new Bro({name: req.body.name, saying: req.body.saying, age: req.body.age});
      bro.save(function(err) {
        if (err) {
          console.log('something went wrong while trying to add');
        } else {
          console.log('added a bro');
          res.redirect('/');
        }
      })
    },
    removeBro: function (req, res) {
      Bro.remove({_id : req.params.id}, function(err) {
        if (err) {
          console.log("Could not delete this guy")
        } else {
          res.redirect('/');
        }
      })
    }
    














}
