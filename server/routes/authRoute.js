import express from "express";
import { createStudent, login } from "../controllers/authController.js";

const router = express.Router();

router.post("/signup", createStudent);
router.post("/login", login);

export default router;
