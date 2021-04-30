const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true, minlength: 3, maxlength: 200 },
  description: String,
  postby:String,
  uid: String,
  isComplete: Boolean,
  date: { type: Date, default: new Date() },
});

module.exports=mongoose.model("Blog",blogSchema);

