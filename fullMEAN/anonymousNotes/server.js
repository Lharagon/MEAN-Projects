var express = require('express')
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path')
mongoose.connect('mongodb://localhost/notes')
var Schema = mongoose.Schema;
var NoteSchema = new mongoose.Schema({
	note: {type: String, required: true, minlength: 3}},
	{ timestamps: true }
)
mongoose.model('Note', NoteSchema);
var Note = mongoose.model('Note')

app.use(express.static(path.join(__dirname, 'anonymousApp', 'dist')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

app.post('/api/add', function(req, res) {
	var note = new Note(req.body.note);
	console.log(req.body)
	note.save(function(err) {
		if(err) {
			console.log('There was an error')
			res.sendStatus(500);
		} else {
			console.log('added a note successfully!');
			Note.find({}, function(err, notes) {
				if (err) {
					res.sendStatus(500);
				} else {
					res.json(notes);
				}
			})
		}
	})

})

app.all("*", (req, res, next) => {
	res.sendfile(path.resolve("./anonymousNotes/dist/index.html"))
})


app.listen(8000, function() {
	console.log("running on localhost:8000")
})
