import Review from "../models/Review.js";

// GET reviews for a specific post
export const getReviewsForPost = async (req, res) => {
  try {
    const { postId } = req.params;

    // Find reviews for the given post, populate user name
    const reviews = await Review.find({ post: postId }).populate("user", "name");

    res.json(reviews);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// POST a new review
export const addReviewToPost = async (req, res) => {
  try {
    const { post, rating, comment } = req.body;

    // Protect middleware should set req.user
    const user = req.user._id;

    if (!post || !rating || !comment) {
      return res.status(400).json({ message: "Post, rating, and comment are required" });
    }

    // Create new review
    const review = await Review.create({ post, user, rating, comment });

    res.status(201).json({ message: "Review added", review });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
