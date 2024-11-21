import pool from "../db.js";

// Create Leave Request
export const createLeave = async (leave) => {
  const query = `
    INSERT INTO LeaveSystem (student_id, reason, start_date, end_date, leave_type)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *;
  `;
  const values = [
    leave.student_id,
    leave.reason,
    leave.start_date,
    leave.end_date,
    leave.leave_type,
  ];

  try {
    const result = await pool.query(query, values);
    return result.rows[0]; // Return the created leave record
  } catch (error) {
    throw new Error(`Database Error: ${error.message}`);
  }
};
export const getAllPendingLeaves = async () => {
  const query = `
      SELECT * FROM LeaveSystem
      WHERE status = 'pending';
    `;
  try {
    const result = await pool.query(query);
    // If no pending leaves found, return an empty array
    if (result.rows.length > 0) {
      return result.rows; // Return all pending leave records
    } else {
      return []; // Return an empty array if no records found
    }
  } catch (error) {
    throw new Error(`Database Error: ${error.message}`);
  }
};
// Update Leave Status (Approved/Rejected)
export const updateLeaveStatus = async (leave_id, status, faculty_id) => {
  const updateQuery = `
      UPDATE LeaveSystem
      SET status = $1
      WHERE leave_id = $2
      RETURNING leave_id, status;
    `;
  const insertRecordQuery = `
      INSERT INTO LeaveRecord (leave_id, faculty_id, status)
      VALUES ($1, $2, $3)
      RETURNING *;
    `;
  const values = [status, leave_id];

  try {
    // Update the leave status in LeaveSystem
    const result = await pool.query(updateQuery, values);

    if (result.rows.length > 0) {
      const leave = result.rows[0]; // Extract the updated leave record

      // Insert the leave status change into the LeaveRecord table
      const recordValues = [leave_id, faculty_id, status];
      await pool.query(insertRecordQuery, recordValues);

      return {
        leave_id: leave.leave_id,
        status: leave.status,
        message: "Leave status updated and recorded successfully.",
      };
    }

    throw new Error("Leave request not found.");
  } catch (error) {
    throw new Error(`Database Error: ${error.message}`);
  }
};
export const getAllLeavesByStudentId = async (student_id) => {
  const query = `
      SELECT * FROM LeaveSystem
      WHERE student_id = $1;
    `;
  const values = [student_id];

  try {
    const result = await pool.query(query, values);

    // If there are no leaves found for the student, return an empty array
    if (result.rows.length > 0) {
      return result.rows; // Return all leave records for the student
    } else {
      return []; // Return an empty array if no records found
    }
  } catch (error) {
    throw new Error(`Database Error: ${error.message}`);
  }
};
// Get Count of Pending Leaves
export const getPendingLeaveCount = async () => {
  const query = `
      SELECT COUNT(*) AS pending_count
      FROM LeaveSystem
      WHERE status = 'pending';
    `;
  try {
    const result = await pool.query(query);
    return result.rows[0].pending_count || 0; // Return the count or 0 if no results
  } catch (error) {
    throw new Error(`Database Error: ${error.message}`);
  }
};

// Get Count of Approved Leaves
export const getApprovedLeaveCount = async () => {
  const query = `
      SELECT COUNT(*) AS approved_count
      FROM LeaveSystem
      WHERE status = 'approved';
    `;
  try {
    const result = await pool.query(query);
    return result.rows[0].approved_count || 0; // Return the count or 0 if no results
  } catch (error) {
    throw new Error(`Database Error: ${error.message}`);
  }
};

// Get Count of Rejected Leaves
export const getRejectedLeaveCount = async () => {
  const query = `
      SELECT COUNT(*) AS rejected_count
      FROM LeaveSystem
      WHERE status = 'rejected';
    `;
  try {
    const result = await pool.query(query);
    return result.rows[0].rejected_count || 0; // Return the count or 0 if no results
  } catch (error) {
    throw new Error(`Database Error: ${error.message}`);
  }
};

export const getTotalLeaveCount = async () => {
  const query = `
      SELECT COUNT(*) AS total_count
      FROM LeaveSystem;
    `;
  try {
    const result = await pool.query(query);
    return result.rows[0].total_count || 0; // Return the total count or 0 if no results
  } catch (error) {
    throw new Error(`Database Error: ${error.message}`);
  }
};
