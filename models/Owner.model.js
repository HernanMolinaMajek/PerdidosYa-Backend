const mongoose = require("mongoose");

const ownerSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  phone: String,
});

module.exports = ownerSchema;
