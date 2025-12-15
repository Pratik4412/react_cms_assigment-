import express from "express";
import auth from "../middleware/auth.js";
import {
  getMeController,
  loginController,
  registerController,
} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/register", registerController);
router.post("/login", loginController);
router.get("/me", auth, getMeController);

export default router;
