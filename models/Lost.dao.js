const mongoose = require("mongoose");
const lostSchema = require("./Lost.model");

lostSchema.statics = {
  create: function (data, cb) {
    const lost = new this(data);
    lost.save(cb);
  },

  get: function (query, cb) {
    this.find(query).populate("_ownerId").populate("_petId").exec(cb);
  },

  update: function (query, updatedData, cb) {
    this.findOneAndUpdate(query, updatedData, cb);
  },

  deleteByPetId: function(query,cb){
    this.findOneAndDelete(query,cb)
  },

  delete: function (query, cb) {
    this.findOneAndDelete(query, cb);
  },
};

const lostModel = mongoose.model("Lost", lostSchema);
module.exports = lostModel;
