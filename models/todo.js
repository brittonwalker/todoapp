var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var TodoSchema = new Schema({
  donnie : Boolean,
  britton : Boolean,
  andrew : Boolean,
  group : Boolean,
  text : String,
  done : Boolean
})

module.exports = mongoose.model('Todo', TodoSchema);
