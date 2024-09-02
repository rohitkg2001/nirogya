const {
  createBlog,
  getBlogs,
  getBlogByID,
  updateBlogByID,
  deleteBlogByID,
} = require("../api/blogs");
const router = require("express").Router();

router.post("/create-blog", createBlog);
router.get("/get-blogs", getBlogs);
router.get("/get-blog/:blog_id", getBlogByID);
router.put("/update-blog/:blog_id", updateBlogByID);
router.delete("/delete-blog/:blog_id", deleteBlogByID);

module.exports = router;
