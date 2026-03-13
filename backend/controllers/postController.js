import Post from "../models/Post.js";

export const getPosts = async (_req, res) => {
  try {
    const posts = await Post.find().populate("author", "name email").sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch posts", error: err.message });
  }
};

export const createPost = async (req, res) => {
  try {
    const { title, content } = req.body;
    if (!title || !content) return res.status(400).json({ message: "Title and content required" });
    const post = await Post.create({ title, content, author: req.user._id });
    res.status(201).json(post);
  } catch (err) {
    res.status(500).json({ message: "Failed to create post", error: err.message });
  }
};

export const getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id).populate("author", "name email");
    if (!post) return res.status(404).json({ message: "Post not found" });
    res.json(post);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch post", error: err.message });
  }
};
