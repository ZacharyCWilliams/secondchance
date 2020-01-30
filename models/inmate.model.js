const mongoose = require("mongoose");

const InmateSchema = mongoose.Schema({
  name: { type: String, required: true },
  dob: { type: String, required: true },
  gender: { type: String, required: true },
  orientation: { type: String, required: true },
  location: { type: String, required: true },
  about: { type: String, required: true },
  interests: { type: [String], required: true },
  goals: { type: [String], required: true },
  inc_date: { type: String, required: true },
  charges: { type: [String], required: true }
}, {
  timestamps: true
});

module.exports = mongoose.model('Inmate', InmateSchema);
