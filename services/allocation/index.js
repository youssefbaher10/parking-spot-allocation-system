
const express = require("express");
const requestRoutes = require("./src/routes/requestRoutes");

const app = express();
const PORT = process.env.PORT || 3001;

// Allow JSON requests
app.use(express.json());

// Home endpoint
app.get("/", (req, res) => {
  res.json({
    message: "Parking Allocation Service is running!"
  });
});

// Health check
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    service: "parking-allocation-service"
  });
});

// Connect Parking Request routes
app.use("/api/allocation/requests", requestRoutes);

// Start the server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
