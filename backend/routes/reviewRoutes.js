import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { getReviewsForPost, addReviewToPost } from "../controllers/reviewController.js";

const router = express.Router();

// GET reviews for a specific post
router.get("/:postId", getReviewsForPost);

// POST a new review (frontend sends post, rating, comment in body)
router.post("/", protect, addReviewToPost);

export default router;
