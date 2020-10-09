const mongoose = require("mongoose");

const transectionSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: [true, "please add some text"]
  },
  amount: {
    type: Number,
    required: [true, "please add number"]
  },
  note: {
    type: String,
    trim: true,
    required: [true, "please add some text"]
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  date: {
    type: Date
  }
});

module.exports = mongoose.model("transection", transectionSchema);
