const mongoose = require("mongoose");
const courseSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: true,
  },
  items: [],
  zip_code: {
    type: Number,
    min: [100, "コードが短いです。"],
    max: 999
  }
});

module.exports = mongoose.model("Course", courseSchema);
