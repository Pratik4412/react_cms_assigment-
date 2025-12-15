import Post from "../models/Post.js";
import slugify from "slugify";

export const createPostController = async (req, res) => {
  try {
    const { title, content, seoTitle, seoDescription } = req.body;
    if (!title || !content) {
      return res
        .status(400)
        .json({ message: " Title  and content are required" });
    }

    const slug = slugify(title, { lower: true, strict: true });

    const exists = await Post.findOne({ slug });
    if (exists) {
      return res
        .status(400)
        .json({ message: "Post with same title already exists" });
    }
    const post = await Post.create({
      title,
      slug,
      content,
      seoTitle,
      seoDescription,
      status: "draft",
    });
    return res.status(200).json(post);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const getPostsController = async (req, res) => {
  try {
    const filter = {};
    if (req.query.status === "published") {
      filter.status = "published";
    }

    const posts = await Post.find(filter).sort({ createdAt: -1 });
    return res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getPostBySlugController = async (req, res) => {
  try {
    const post = await Post.findOne({
      slug: req.params.slug,
      status: "published",
    });

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    return res.status(200).json(post);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updatePostController = async (req, res) => {
  try {
    const { title, content, seoTitle, seoDescription, status } = req.body;

    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    post.title = title || post.title;
    post.content = content || post.content;
    post.seoTitle = seoTitle || post.seoTitle;
    post.seoDescription = seoDescription || post.seoDescription;
    post.status = status || post.status;

    if (title) {
      post.slug = slugify(title, { lower: true, strict: true });
    }

    await post.save();
    return res.status(200).json(post);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deletePostController = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    await post.deleteOne();
    return res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const togglePublishController = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    post.status = post.status === "published" ? "draft" : "published";
    await post.save();
    return res.status(200).json({
      message: `Post ${
        post.status === "published" ? "published" : "unpublished"
      }`,
      status: post.status,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
