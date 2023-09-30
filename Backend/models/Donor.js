const mongoose = require('mongoose');
const { Schema } = mongoose;

const donorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    bloodType: { type: String, required: true }, 
    contactInfo: { type: String, required: true }, 
    address: { type: String }
  });
  

module.exports = mongoose.model('Donor', donorSchema);
