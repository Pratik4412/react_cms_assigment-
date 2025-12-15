import express from "express";
import auth from "../middleware/auth.js";
import {
  createPageController,
  deletePageController,
  getPageBySlugController,
  getPagesController,
  updatePageController,
} from "../controllers/page.controller.js";

const router = express.Router();

router.post("/", auth, createPageController);
router.get("/", getPagesController);
router.get("/:slug", getPageBySlugController);
router.put("/:id", auth, updatePageController);
router.delete("/:id", auth, deletePageController);

export default router;
