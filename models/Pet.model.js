const mongoose = require("mongoose");

const petSchema = mongoose.Schema({
  _ownerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Owner' },
  img: String,
  name: String,
  sex: String,
  age: Number,
  type: String,
  breed: String,
  description: String,
  isLost: Boolean,
});

module.exports = petSchema;
