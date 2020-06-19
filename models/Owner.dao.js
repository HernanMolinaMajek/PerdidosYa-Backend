const mongoose = require("mongoose");
const ownerSchema = require("./Owner.model");

ownerSchema.statics = {
  create: function (data, cb) {
    const owner = new this(data);
    owner.save(cb);
  },

  get: function (query, cb) {
    this.find(query,cb)
  },

  update: function (query, updatedData, cb) {
    this.findOneAndUpdate(query, updatedData, cb);
  },

  delete: function (query, cb) {
    this.findOneAndDelete(query, cb);
  },
};

const ownerModel = mongoose.model("Owner", ownerSchema);
module.exports = ownerModel;
