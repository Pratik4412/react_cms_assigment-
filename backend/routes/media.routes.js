import express from "express";
import multer from "multer";
import auth from "../middleware/auth.js";
import {
  deleteMedia,
  updateMedia,
  uploadMedia,
} from "../controllers/media.controller.js";

const router = express.Router();

const upload = multer({ storage: multer.memoryStorage() });

router.post("/upload", auth, upload.single("file"), uploadMedia);

router.put("/:publicId", auth, upload.single("file"), updateMedia);
router.delete("/:publicId", auth, deleteMedia);

export default router;
