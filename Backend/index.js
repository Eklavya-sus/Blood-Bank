const express = require("express");
const app = express();
const port = 4000;
const connectToMongo = require("./db");

// Load environment variables
require('dotenv').config();

// Middleware
app.use(express.json());

// Routes
// app.use("/api/hospital", require("./routes/hospitalAuth"));
app.use("/api/donor", require("./routes/donorAuth"));

// Start the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// Connect to MongoDB
connectToMongo();
