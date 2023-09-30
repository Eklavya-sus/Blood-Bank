// const express = require("express");
// const router = express.Router();
// const Hospital = require("../models/Hospital");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");

// // Hospital registration
// router.post("/register", async (req, res) => {
//   try {
//     const { name, email, password } = req.body;

//     // Check if the hospital with this email already exists
//     const existingHospital = await Hospital.findOne({ email });
//     if (existingHospital) {
//       return res.status(400).json({ error: "A hospital with this email already exists" });
//     }

//     // Hash the password
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);

//     // Create a new hospital
//     const newHospital = new Hospital({
//       name,
//       email,
//       password: hashedPassword,
//       // Add other hospital-specific fields here
//     });

//     await newHospital.save();

//     // Generate a JWT token
//     const jwtSecretKey = "hospital-secret";
//     const token = jwt.sign({ id: newHospital._id }, jwtSecretKey);

//     res.json({ token });
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).send("Internal Server Error");
//   }
// });

// // Hospital login
// router.post("/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     // Find the hospital by email
//     const hospital = await Hospital.findOne({ email });

//     if (!hospital) {
//       return res.status(400).json({ error: "Invalid credentials" });
//     }

//     // Check the password
//     const isPasswordValid = await bcrypt.compare(password, hospital.password);

//     if (!isPasswordValid) {
//       return res.status(400).json({ error: "Invalid credentials" });
//     }

//     // Generate a JWT token
//     const jwtSecretKey = "hospital-secret";
//     const token = jwt.sign({ id: hospital._id }, jwtSecretKey);

//     res.json({ token });
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).send("Internal Server Error");
//   }
// });

// module.exports = router;
