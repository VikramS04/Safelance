import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import contactRoutes from "./routes/contactRoutes.js";
import paymentRoutes from "./routes/paymentRoutes.js";
import db from "./config/db.js"; // Ensure MySQL starts

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const mysql = require("mysql");

const db2 = mysql.createConnection({
  host: "10.72.8.160",  // Replace with Windows IP
  user: "root",
  password: "12345678",
  database: "testdb"
});

db2.connect((err) => {
  if (err) {
    console.error("Database connection failed: " + err.stack);
    return;
  }
  console.log("Connected to remote MySQL database!");
});

// Routes
app.use("/api/contact", contactRoutes);
app.use("/api/payment", paymentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
