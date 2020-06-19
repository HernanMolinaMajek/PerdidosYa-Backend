const Pet = require("../models/Pet.dao");

exports.createPet = function (req, res, next) {
  const pet = {
    _ownerId: req.body._ownerId,
    img: req.body.img,
    name: req.body.name,
    sex: req.body.sex,
    age: req.body.age,
    type: req.body.type,
    breed: req.body.breed,
    description: req.body.description,
    isLost: req.body.isLost,
  };

  Pet.create(pet, function (err, pet) {
    if (err) res.json({ error: err });
    res.json({ message: "Pet created succesfuly", Pet: pet });
  });
};

exports.getPets = function (req, res, next) {
  Pet.get({}, function (err, pets) {
    if (err) {
      res.json({ error: err });
    }
    //pets._ownerId = _ownerId;
    res.json({ Pets: pets });
  });
};

exports.deletePet = function (req, res) {
  Pet.delete({ _id: req.params.id }, function (err, pet) {
    if (err) res.json({ error: err });
    res.json({ message: "Pet deleted" });
  });
};

