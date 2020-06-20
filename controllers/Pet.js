const Pet = require("../models/Pet.dao");
const Lost = require("../controllers/Lost");
const fs = require('fs');

exports.createPet = function (req, res, next) {
  const pet = {
    _ownerId: req.body._ownerId,
    img: req.file.path,
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
    res.json({ Pets: pets });
  });
};

exports.updateLostStatus = function (req, res) {
  const pet = {
    isLost: req.body.isLost,
  };
  Pet.updateLostStatus({ _id: req.params.id }, pet, function (err, pet) {
    if (err) res.json({ error: err });

    if (!pet.isLost) Lost.deleteByPetId(pet._id);

    res.json({ message: "isLost updated", Pet: pet });
  });
};

exports.deletePet = function (req, res) {
  Pet.delete({ _id: req.params.id }, function (err, pet) {
    if (err) res.json({ error: err });

    Lost.deleteByPetId(pet._id);

    fs.unlink(`./${pet.img}`, (err) => {
      if (err) throw err;
      console.log("Photo delete");
    });


    res.json({ message: "Pet deleted" });
  });
};
