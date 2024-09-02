const mongoose = require("mongoose");

const Review = new mongoose.Schema({
  user: {
    type: String,

    required: true,
  },
  product: {
    type: String,

    required: true,
  },
  rating: {
    type: Number,
    required: true,
    min: 3,
    max: 5,
  },
  comment: {
    type: String,
    required: true,
    maxlength: 500,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("review", Review);
