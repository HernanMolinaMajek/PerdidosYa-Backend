const mongoose = require("mongoose");

const lostSchema = mongoose.Schema({
  _petId: { type: mongoose.Schema.Types.ObjectId, ref: "Pet" },
  _ownerId: { type: mongoose.Schema.Types.ObjectId, ref: "Owner" },
  date: Date,
  location: {
    lat: String,
    lng: String ,
  },
});

module.exports = lostSchema;
