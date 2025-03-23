import db from "../config/db.js";

export const saveContact = (name, email, message, callback) => {
  const sql = "INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)";
  db.query(sql, [name, email, message], (err, result) => {
    if (err) {
      console.error("Error saving contact:", err);
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
};
