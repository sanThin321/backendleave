import pool from "../db.js";

export const insertStudent = async (student) => {
  const query = `
      INSERT INTO Student (student_id, student_name, email, contact, gender, password)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *;
    `;
  const values = [
    student.student_id,
    student.student_name,
    student.email,
    student.contact,
    student.gender,
    student.password, // This should already be hashed
  ];

  try {
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (error) {
    throw new Error(`Database Error: ${error.message}`);
  }
};
export const findUserById = async (user_id) => {
  // First, check in the Student table
  const studentQuery = "SELECT * FROM Student WHERE student_id = $1";
  const facultyQuery = "SELECT * FROM Faculty WHERE faculty_id = $1";
  const values = [user_id];

  try {
    const studentResult = await pool.query(studentQuery, values);
    if (studentResult.rows.length > 0) {
      return { user: studentResult.rows[0], type: "student" };
    }

    const facultyResult = await pool.query(facultyQuery, values);
    if (facultyResult.rows.length > 0) {
      return { user: facultyResult.rows[0], type: "faculty" };
    }

    // If no match in either table
    return null;
  } catch (error) {
    throw new Error(`Database Error: ${error.message}`);
  }
};
