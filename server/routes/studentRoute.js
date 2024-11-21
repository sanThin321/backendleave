import express from "express";
import { authenticate } from "../middleware/authMiddleware.js";
import {
  applyForLeave,
  getAllLeavesByStudentIdController,
} from "../controllers/studentController.js";

const router = express.Router();

router.post("/leave", authenticate, applyForLeave);
router.get("/getleave", authenticate, getAllLeavesByStudentIdController);

export default router;
