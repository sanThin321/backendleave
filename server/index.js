import express from "express";
import cors from "cors";
import authRoute from "./routes/authRoute.js"
import studentRoute from "./routes/studentRoute.js";
import facaltyRoute from "./routes/facaltyRoute.js"
import dotenv from "dotenv"
dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/leavesystem", authRoute);
app.use("/leavesystem/student", studentRoute);
app.use("/leavesystem/faculty", facaltyRoute);

app.listen(8000, () => {
  console.log("server has started on port 8000");//helloe

  
});
