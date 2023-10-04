const express = require("express");
const router = express.Router();
const Donor = require("../models/Donor");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


require('dotenv').config({ path: './.env' });
router.post("/register", async (req, res) => {
  try {
    const { name, email, bloodType, contactInfo, address, password } = req.body;

    const existingDonor = await Donor.findOne({ email });
    if (existingDonor) {
      return res.status(400).json({ error: "A donor with this email already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newDonor = new Donor({
      name,
      email,
      bloodType,
      contactInfo,
      address,
      password: hashedPassword,
    });

    await newDonor.save();
    const jwtSecretKey = process.env.DONOR_JWT_SECRET; //key from the environment variable
    const token = jwt.sign({ id: newDonor._id }, jwtSecretKey);
    console.log(process.env.DONOR_JWT_SECRET)

    res.status(201).json({ token });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const donor = await Donor.findOne({ email });

    if (!donor) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    const isPasswordValid = await bcrypt.compare(password, donor.password);

    if (!isPasswordValid) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    const jwtSecretKey = process.env.DONOR_JWT_SECRET; // Store secret key in environment variable
    const token = jwt.sign({ id: donor._id }, jwtSecretKey);

    res.json({ token });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;