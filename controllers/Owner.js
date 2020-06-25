const Owner = require("../models/Owner.dao");

exports.createOwner = function (req, res, next) {
  Owner.get({ email: req.body.email }, function (err, owner) {
    if (Object.keys(owner).length === 0) {
      const reqOwner = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        phone: req.body.phone,
      };
      Owner.create(reqOwner, function (err, owner) {
        if (err) return res.json({ error: err });
        return res.json({ Successful: true, Owner: owner });
      });
    } else {
      return res.json({ Error: "El Usuario ya existe" });
    }
  });
};

exports.logIn = function (req, res) {
  Owner.get({ email: req.body.email, password: req.body.password }, function (
    err,
    owner
  ) {
    if (err) {
      return res.json({ error: err });
    }

    if (Object.keys(owner).length === 0) {
      return res.json({ Error: "No se encontro al usuario" });
    } else {
      const ow = {
        _id: owner[0]._id,
        name: owner[0].name,
        phone: owner[0].phone,
      };
      return res.json(ow);
    }
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
