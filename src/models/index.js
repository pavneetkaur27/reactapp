const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for ServerPort
const users = new Schema({
  name: {
    type: String
  },
  phoneno: {
      type: String
  },
  email:{
      type: String
  }
},{
    collection: 'servers'
});

module.exports = mongoose.model('users', users);
