import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
// Middleware to authenticate and get user details from JWT token
export const authenticate = (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "Authentication required" });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: "Invalid or expired token" });
    }

    // Save the decoded data (like user ID) to the request object
    req.id = decoded.id;
    console.log(req.id);
    next(); // Proceed to the next middleware or route handler
  });
};
