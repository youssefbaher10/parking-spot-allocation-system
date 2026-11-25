
const express = require("express");

const router = express.Router();

// GET /api/allocation/requests
router.get("/", (req, res) => {
  res.status(401).json({
    success: false,
    error: {
      code: "UNAUTHORIZED",
      message: "Authentication is required"
    }
  });
});

module.exports = router;
