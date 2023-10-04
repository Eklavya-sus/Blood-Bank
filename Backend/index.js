const express = require("express");
const app = express();
const port = 4000;
const connectToMongo = require("./db");
const donorAuthRoute = require("./routes/donorAuth");
// Load environment variables
require('dotenv').config();

// Middleware
app.use(express.json());
// ConnectToMongo();
console.log('Connected to MongoDB successfully');
// Routes
app.use("/api/donor", donorAuthRoute );
console.log(donorAuthRoute)
// app.use("/api/donor", require("./routes/donorAuth"));

// Start the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// Connect to MongoDB
connectToMongo();
