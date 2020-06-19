const mongoose = require("mongoose");

const ownerSchema = mongoose.Schema({
  name: String,
  email: String,
  phone: String,
});

module.exports = ownerSchema;
