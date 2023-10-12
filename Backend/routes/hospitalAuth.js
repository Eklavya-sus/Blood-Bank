const express = require("express");
const router = express.Router();
const Hospital = require("../models/Hospital");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fetchHospital = require("../middleware/fetchHospital");

//
require('dotenv').config({ path: './.env' });
router.post("/register", async (req, res) => {
  try {
    const { name, email, contactInfo, address, password } = req.body;

    const existingHospital = await Hospital.findOne({ email });
    if (existingHospital) {
      return res.status(400).json({ error: "A Hospital with this email already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newHospital = new Hospital({
      name,
      email,
      contactInfo,
      address,
      password: hashedPassword,
    });

    await newHospital.save();
    const jwtSecretKey = process.env.JWT_SECRET; //key from the environment variable
    const token = jwt.sign({ id: newHospital._id }, jwtSecretKey);

    res.status(201).json({ token });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const hospital = await Hospital.findOne({ email });

    if (!hospital) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    const isPasswordValid = await bcrypt.compare(password, hospital.password);

    if (!isPasswordValid) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    const jwtSecretKey = process.env.JWT_SECRET; // Store secret key in environment variable
    const token = jwt.sign({ id: hospital._id }, jwtSecretKey);

    res.json({ token });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//ROUTE 3: Get loggedin hospital details using: POST "/api/auth/getuser". Login required
router.post("/getdonor", fetchHospital,  async (req, res) => {
  try {
    const userid = req.user.id;
    const user = await User.findById(req.user.id).select("password");
    res.send(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
  });

module.exports = router;