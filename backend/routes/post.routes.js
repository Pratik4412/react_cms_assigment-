import express from "express";
import {
  createPostController,
  deletePostController,
  getPostBySlugController,
  getPostsController,
  togglePublishController,
  updatePostController,
} from "../controllers/post.controller.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.post("/", auth, createPostController);
router.get("/", getPostsController);
router.get("/:slug", getPostBySlugController);
router.put("/:id", auth, updatePostController);
router.delete("/:id", auth, deletePostController);
router.patch("/:id/publish", auth, togglePublishController);

export default router;
