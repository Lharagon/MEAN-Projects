var bros = require('../controllers/bros.js');

module.exports = function(app) {
  app.get('/', function (req, res) {
    bros.show(req, res);
  })

  app.get('/mongooses/new', function(req, res) {
    res.render('new');
  })

  app.get('/mongooses/:id', function(req, res) {
    bros.profile(req,res);
  })

  app.get('/mongooses/edit/:id', function(req, res) {
    bros.editPage(req, res);
  })

  app.post('/mongooses/:id', function(req, res) {
    bros.edit(req, res);
  })

  app.post('/mongooses', function(req, res) {
    bros.addBro(req, res);
  })

  app.post('/mongoose/destroy/:id', function(req, res) {
    bros.removeBro (req, res);
  })
}
