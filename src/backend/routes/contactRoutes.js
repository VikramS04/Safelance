import express from "express";
import { saveContact } from "../models/ContactModel.js";

const router = express.Router();

// POST route to handle contact form
router.post("/", (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  saveContact(name, email, message, (err, result) => {
    if (err) {
      return res.status(500).json({ error: "Database error" });
    }
    res.status(200).json({ message: "Message received!" });
  });
});

export default router;
