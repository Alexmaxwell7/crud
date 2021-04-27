const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 3, maxlength: 30 },
  email: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 200,
    unique: true,
  },
  password: { type: String, required: true, minlength: 3, maxlength: 1024 },
});


// const userSchema = new mongoose.Schema({
//     username: {
//       type: String
//     },
//     email: {
//       type: String
//     },
//     password: {
//       type: String
//     },
//     created: {
//       type: Date,
//       default: Date.now
//     },
//     description: {
//       type: String
//     }
//   });
  
  module.exports = User = mongoose.model("User", userSchema);