const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const showSchema = new Schema ({
   
  name: {type: String, required: true },
  poster: {type: String, required: false },
  overview: {type: String}
})

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  hash: {
    type: String,
    required: true
  },
  show: [showSchema]
})

const User = mongoose.model('User', UserSchema);

module.exports = User;