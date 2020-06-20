const mongoose = require("mongoose");
const petSchema = require("./Pet.model");

petSchema.statics = {
  create: function (data, cb) {
    const pet = new this(data);
    pet.save(cb);
  },

  get: function (query, cb) {
    this.find(query).populate("_ownerId").exec(cb);
  },

  updateLostStatus: function (query, status, cb) {
    this.findOneAndUpdate(query, { $set: status }, { new: true }, cb);
  },

  delete: function (query, cb) {
    this.findOneAndDelete(query, cb);
  },
};

const petModel = mongoose.model("Pet", petSchema);
module.exports = petModel;
