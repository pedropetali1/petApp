const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
  name: { type: String, required: true },
  symptoms: { type: [String], required: true },
  description: { type: String, required: true },
  treatment: { type: String, required: true}
});

module.exports = mongoose.model('Doenca', Schema);