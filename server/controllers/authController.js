import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { findUserById, insertStudent } from "../models/authModel.js"; // Import the model

dotenv.config();

export const createStudent = async (req, res) => {
  const {
    student_id,
    student_name,
    email,
    contact,
    gender,
    password,
    confirmPassword,
  } = req.body;

  try {
    // Validate required fields
    if (
      !student_id ||
      !student_name ||
      !email ||
      !password ||
      !confirmPassword
    ) {
      return res.status(400).json({ error: "Required fields are missing" });
    }
    if (password !== confirmPassword) {
      return res
        .status(401)
        .json({ error: "password and the confirm password did not match" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Prepare the student object
    const student = {
      student_id,
      student_name,
      email,
      contact,
      gender,
      password: hashedPassword,
    };

    // Insert into the database
    const newStudent = await insertStudent(student);
    res
      .status(201)
      .json({ message: "Student created successfully", student: newStudent });
  } catch (error) {
    console.error("Error creating student:", error.message);
    res.status(500).json({ error: error.message });
  }
};

export const login = async (req, res) => {
  const { user_id, password } = req.body;

  try {
    // Validate required fields
    if (!user_id || !password) {
      return res
        .status(400)
        .json({ error: "User ID and password are required" });
    }

    // Find the user by user_id (could be student_id or faculty_id)
    const userRecord = await findUserById(user_id);

    if (!userRecord) {
      return res.status(404).json({ error: "User not found" });
    }

    const { user, type } = userRecord; // user is the user record, type is 'student' or 'faculty'

    // Compare the provided password with the stored hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    console.log(isPasswordValid);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid ID or password" });
    }

    // Create the payload for the JWT token
    const payload = {
      id: user_id, // student_id or faculty_id
    };
    console.log(user_id);

    // Generate a JWT token using the secret key from the .env file
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    // Respond with the token and user data
    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user.user_id,
        name: user.user_name,
        email: user.email,
        contact: user.contact,
        type, // student or faculty
      },
    });
  } catch (error) {
    console.error("Error logging in user:", error.message);
    res.status(500).json({ error: error.message });
  }
};
