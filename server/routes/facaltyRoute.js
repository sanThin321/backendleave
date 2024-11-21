import express from "express";
import { authenticate } from "../middleware/authMiddleware.js";
import {
  getAllLeaves,
  statusCountForApproved,
  statusCountForPending,
  statusCountForRejected,
  totalCount,
  updateLeaveStatusController,
} from "../controllers/facultyController.js";

const router = express.Router();
router.get("/leave", authenticate, getAllLeaves);
router.put(
  "/leave/status/:leave_id/:status",
  authenticate,
  updateLeaveStatusController
);
router.get("/leave/approvecount", authenticate, statusCountForApproved);
router.get("/leave/pendingcount", authenticate, statusCountForPending);
router.get("/leave/rejectedcount", authenticate, statusCountForRejected);
router.get("/leave/totalcount", authenticate, totalCount);

export default router;
