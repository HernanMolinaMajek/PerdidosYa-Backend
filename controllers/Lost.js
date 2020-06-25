const Lost = require("../models/Lost.dao");
const Pet = require("../controllers/Pet");

exports.createLost = function (req, res) {
  console.log(req);
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

    Pet.setIsLostTrueById(lost._petId);

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
