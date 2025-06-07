// backend/routes/authRoutes.js
import express from "express";

const router = express.Router();

router.post("/login", (req, res) => {
  res.send("Login successful");
});

export default router;
