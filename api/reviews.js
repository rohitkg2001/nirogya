const Review = require("../models/reviews.model");

module.exports.createReview = async (req, res) => {
  console.log(req.body);

  try {
    const review = new Review(req.body);
    await review.save();
    res.status(200).send(review);
  } catch (err) {
    console.error("Error creating review:", err);
    res.status(500).send({ error: err.message });
  }
};

module.exports.getReview = async (req, res) => {
  try {
    console.log("Fetching reviews");
    const data = await Review.find().populate("user").populate("product");
    if (data.length < 1) {
      return res.status(404).send({ message: "Reviews not found!", count: 0 });
    }
    res.status(200).send({
      message: "Reviews fetched successfully",
      data: data,
      count: data.length,
    });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

// module.exports.getReviewByID = async (req, res) => {
//   try {
//     const review = await Review.findById(req.params.review_id)
//       .populate("user")
//       .populate("product");
//     if (!review) {
//       return res.status(404).send({ message: "Review not found!" });
//     }
//     res.status(200).send(review);
//   } catch (err) {
//     res.status(500).send({ error: err.message });
//   }
// };
module.exports.getReviewByID = async (req, res) => {
  try {
    const review = await Review.findById(req.params.review_id)
      .populate({
        path: "user",
        select: "name", // Assuming the user's name is stored in the "name" field
      })
      .populate({
        path: "product",
        select: "name", // Assuming the product's name is stored in the "name" field
      });

    if (!review) {
      return res.status(404).send({ message: "Review not found!" });
    }

    // Format the response to include only the reviewer's name and comment
    const response = {
      reviewer: review.user ? review.user.name : "Anonymous", // Default to "Anonymous" if no user is found
      product: review.product ? review.product.name : "Unknown Product", // Default to "Unknown Product" if no product is found
      comment: review.comment,
    };

    res.status(200).send(response);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

module.exports.updateReviewById = async (req, res) => {
  try {
    const review = await Review.findByIdAndUpdate(
      req.params.review_id,
      req.body,
      { new: true }
    )
      .populate("user")
      .populate("product");

    if (!review) {
      return res.status(404).send({ message: "Review not found!" });
    }

    res.status(200).send(review);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

module.exports.deleteReviewById = async (req, res) => {
  try {
    const review = await Review.findByIdAndDelete(req.params.review_id);

    if (!review) {
      return res.status(404).send({ message: "Review not found!" });
    }

    res
      .status(200)
      .send({ message: "Review deleted successfully", data: review });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

module.exports.deleteManyReviews = async (req, res) => {
  try {
    const result = await Review.deleteMany();
    res.status(200).send({
      message: "All reviews deleted successfully",
      deletedCount: result.deletedCount,
    });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};
