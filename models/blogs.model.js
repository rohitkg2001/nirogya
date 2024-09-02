const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    thumbnail: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    blog: {
      type: String,
      required: true,
    },
    timestamp: {
      type: Date,
      default: Date.now,
    },
    image: {
      type: String,
    },
    views: {
      type: Number,
    },
    comments: {
      type: String,
    },
    description: {
      type: String,
    },
    dataDelay: {
      type: Number,
    },
    
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
