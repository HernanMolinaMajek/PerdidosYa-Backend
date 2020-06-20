const Lost = require("../models/Lost.dao");

exports.createLost = function (req, res) {
  console.log(req);
  const lost = {
    _petId: req.body._petId,
    _ownerId: req.body._ownerId,
    date: req.body.date,
    location: {
      lat: req.body.location.lat,
      lng: req.body.location.lng,
    },
  };
  Lost.create(lost, function (err, lost) {
    if (err) {
      res.json({ error: err });
    }
    res.json({ message: "lost created succesfuly", Lost: lost });
  });
};

exports.getLost = function (req, res) {
  Lost.get({}, function (err, lost) {
    if (err) {
      res.json({ error: err });
    }
    res.json({ Lost: lost });
  });
};

exports.deleteByPetId = function (petId) {
  Lost.deleteByPetId({ _petId: petId }, function (err, lost) {
    console.log("borrado con extito");
  });
};

exports.delete = function (req, res) {
  Lost.delete({ _id: req.params.id }, function (err, lost) {
    if (err) res.json({ error: err });
    res.json({ mesage: "borrado lost con exito", Lost: lost });
  });
};
