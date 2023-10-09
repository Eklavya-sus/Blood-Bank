const express = require("express");
const app = express();
const port = 4000;
const connectToMongo = require("./db");
const donorAuthRoute = require("./routes/donorAuth");
const hospitalAuthRoute = require("./routes/hospitalAuth");
require('dotenv').config();

// Middleware
app.use(express.json());
// Routes
app.use("/api/donor", donorAuthRoute );
app.use("/api/hospital", hospitalAuthRoute);
// Start the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
// Connect to MongoDB
connectToMongo();
