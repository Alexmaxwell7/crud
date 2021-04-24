const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    username: {
      type: String
    },
    email: {
      type: String
    },
    password: {
      type: String
    },
    created: {
      type: Date,
      default: Date.now
    },
    description: {
      type: String
    }
  });
  
  module.exports = User = mongoose.model("User", userSchema);