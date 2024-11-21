import {
  getAllPendingLeaves,
  getApprovedLeaveCount,
  getPendingLeaveCount,
  getRejectedLeaveCount,
  getTotalLeaveCount,
  updateLeaveStatus,
} from "../models/leaveModel.js";

export const getAllLeaves = async (req, res) => {
  try {
    const leaves = await getAllPendingLeaves(); // Call the model function

    // Send a response with the list of leave requests for the student
    res.status(200).json({
      message: "Leave requests retrieved successfully",
      leaves: leaves,
    });
  } catch (error) {
    res.status(500).json({ error: error.message }); // Handle any errors
  }
};
export const updateLeaveStatusController = async (req, res) => {
    const { leave_id, status } = req.params;
    const faculty_id = req.id; 
  
    // Validate the status to ensure it is one of the allowed values
    if (!["approved", "rejected"].includes(status)) {
      return res.status(400).json({
        error: "Invalid status value. Allowed values: approved, rejected.",
      });
    }
  
    // Check if faculty_id is provided
    if (!faculty_id) {
      return res.status(400).json({
        error: "Faculty ID is required to record the leave status update.",
      });
    }
  
    try {
      // Call the model to update the leave status and record the change
      const updatedLeave = await updateLeaveStatus(leave_id, status, faculty_id);
  
      // Send a response with the updated leave data
      res.status(200).json({
        message: "Leave status updated and recorded successfully.",
        leave: updatedLeave,
      });
    } catch (error) {
      // Handle any errors during the process
      res.status(500).json({ error: error.message });
    }
  };
  

// Controller to get all leave status counts
export const statusCountForPending = async (req, res) => {
  try {
    const pendingCount = await getPendingLeaveCount();

    // Send the response with the individual status counts
    res.status(200).json({
      message: "Leave status counts retrieved successfully",
      pending_count: pendingCount,
    });
  } catch (error) {
    res.status(500).json({ error: error.message }); // Handle any errors
  }
};
export const statusCountForApproved = async (req, res) => {
  try {
    const approveCount = await getApprovedLeaveCount();

    // Send the response with the individual status counts
    res.status(200).json({
      message: "Leave status counts retrieved successfully",
      approve_count: approveCount,
    });
  } catch (error) {
    res.status(500).json({ error: error.message }); // Handle any errors
  }
};

export const statusCountForRejected = async (req, res) => {
  try {
    const rejectcount = await getRejectedLeaveCount();

    // Send the response with the individual status counts
    res.status(200).json({
      message: "Leave status counts retrieved successfully",
      reject_count: rejectcount,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const totalCount = async (req, res) => {
  try {
    const totalcount = await getTotalLeaveCount();

    // Send the response with the individual status counts
    res.status(200).json({
      message: "Leave status counts retrieved successfully",
      total_count: totalcount,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
