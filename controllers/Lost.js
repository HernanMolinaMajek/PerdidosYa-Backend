const Lost = require("../models/Lost.dao");

exports.createLost = function (req, res) {
  const lost = {
    _petId: req.body._petId,
    _ownerId: req.body._ownerId,
    date: req.body.date,
    location: {
      lat: req.body.lat,
      lng: req.body.lng,
    },
  };
  Lost.create(lost, function (err, lost) {
    if (err) {
      res.json({ error: err });
    }
    res.json({ message: "lost created succesfuly" });
  });
};

exports.getAllWithPets = function (req, res) {
  Lost.get({}, function (err, lost) {
    if (err) res.json({ error: err });
    lost._petId = _petId;
    lost._ownerId = _ownerId;
  });
};
