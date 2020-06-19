const Owner = require("../models/Owner.dao");

exports.createOwner = function (req, res, next) {
  const owner = {
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
  };

  Owner.create(owner, function (err, owner) {
    if (err) res.json({ error: err });
    res.json({ message: "owner created succesfuly", Owner: owner });
  });
};

exports.getOwners = function (req, res, next) {
  Owner.get({}, function (err, owners) {
    if (err) {
      res.json({ error: err });
    }
    
    res.json({ Owners: owners });
  });
};

exports.deleteOwner = function (req, res) {
  Owner.delete({ _id: req.params.id }, function (err, owner) {
    if (err) res.json({ error: err });
    res.json({ message: "Owner deleted" });
  });
};
