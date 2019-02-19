var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var Participant = new Schema({
  name: {
    type: String
  },
  price: {
    type: Number
  }
},{
    collection: 'participants'
});

module.exports = mongoose.model('Participant', Participant);