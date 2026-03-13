import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { getPosts, createPost, getPostById } from "../controllers/postController.js";

const router = express.Router();

router.get("/", getPosts);
router.get("/:id", getPostById);
router.post("/", protect, createPost);

export default router;
