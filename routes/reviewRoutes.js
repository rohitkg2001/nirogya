const {
  createReview,
  getReview,
  getReviewByID,
  deleteReviewById,
  deleteManyReviews,
  updateReviewById,
} = require("../api/reviews");

const router = require("express").Router();

router.post("/create-review", createReview);
router.get("/get-reviews/", getReview);
router.get("/get-review/:review-id", getReviewByID);
router.delete("/delete-review/:review-id", deleteReviewById);
router.delete("/delete-many-review", deleteManyReviews);
router.put("/update-review/:review_id", updateReviewById);

module.exports = router;
