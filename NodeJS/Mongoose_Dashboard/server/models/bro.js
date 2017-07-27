var mongoose = require('mongoose');

var MongooseSchema = new mongoose.Schema({
  name: String,
  age: Number,
  saying: String
}, {timestamps: true})
var Bro = mongoose.model('Bro', MongooseSchema);
