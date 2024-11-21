import { createLeave, getAllLeavesByStudentId } from "../models/leaveModel.js";

// Controller to apply for leave
export const applyForLeave = async (req, res) => {
  const { reason, start_date, end_date, leave_type } = req.body;
  const student_id = req.id;

  if (!student_id || !reason || !start_date || !end_date || !leave_type) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    // Call the model to create the leave request with the student_id from the payload
    const leave = await createLeave({
      student_id,
      reason,
      start_date,
      end_date,
      leave_type,
    });
    res.status(201).json({
      message: "Leave request created successfully",
      leave,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const getAllLeavesByStudentIdController = async (req, res) => {
  const student_id  = req.id; 

  try {
    const leaves = await getAllLeavesByStudentId(student_id); // Call the model function

    // Send a response with the list of leave requests for the student
    res.status(200).json({
      message: "Leave requests retrieved successfully",
      leaves: leaves,
    });
  } catch (error) {
    res.status(500).json({ error: error.message }); // Handle any errors
  }
};
