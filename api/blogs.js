const Blog = require("../models/blogs.model");

module.exports.createBlog = async (req, res) => {
  try {
    const blog = new Blog(req.body);
    await blog.save();
    res.status(201).send(blog);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports.getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    if (blogs.length < 1) {
      return res.status(404).send({ message: "No blogs found" });
    }
    res.status(200).send(blogs);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports.getBlogByID = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.blog_id);
    if (!blog) {
      return res.status(404).send({ message: "Blog not found" });
    }
    res.status(200).send(blog);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports.updateBlogByID = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndUpdate(req.params.blog_id, req.body, {
      new: true,
    });
    res.status(200).send(blog);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports.deleteBlogByID = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.blog_id);
    res.status(200).send(blog);
  } catch (err) {
    res.status(500).send(err);
  }
};
