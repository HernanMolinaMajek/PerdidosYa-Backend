const Pet = require("../models/Pet.dao");
const Lost = require("../controllers/Lost");

const fs = require("fs");
const serverPath = "http://localhost:3030/";

exports.createPet = function (req, res, next) {
 
  const pet = {
    _ownerId: req.body._ownerId,
    img: serverPath + req.file.path,
    name: req.body.name,
    sex: req.body.sex,
    age: req.body.age,
    type: req.body.type,
    breed: req.body.breed,
    description: req.body.description,
    isLost: req.body.isLost,
  };

  Pet.create(pet, function (err, pet) {
    if (err) return res.json({ error: err });
    return res.json({ message: "Pet created succesfuly", Pet: pet });
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

exports.getUserPets = function (req, res, next) {
  
  Pet.get({ _ownerId: req.params.id }, function (err, pets) {
    if (err) {
      res.json({ error: err });
    }
    res.json({ Pets: pets });
  });
};

// exports.getPet = function (req, res, next) {
//   Pet.get({ _id: req.params.id }, function (err, pet) {
//     if (err) {
//       res.json({ error: err });
//     }
//     res.json({ pet });
//   });
// };

exports.getById = function (req, res) {
  Pet.get({ _id: req.params.id }, function (err, pet) {
    if (err) {
      res.json({ error: err });
    }
    res.json(pet);
  });
};

// exports.updateLostStatus = function (req, res) {
//   const pet = {
//     isLost: req.body.isLost,
//   };
//   Pet.updateLostStatus({ _id: req.params.id }, pet, function (err, pet) {
//     if (err) res.json({ error: err });

//     if (!pet.isLost) Lost.deleteByPetId(pet._id);

//     res.json({ message: "isLost updated", Pet: pet });
//   });
// };
exports.setIsLostFalse = function (req, res) {
  const pet = {
    isLost: false,
  };
  Pet.updateLostStatus({ _id: req.params.id }, pet, function (err, pet) {
    if (err) res.json({ error: err });

    Lost.deleteByPetId(pet._id);

    res.json({ message: "isLost updated", Pet: pet });
  });
};

exports.setIsLostTrueById = function (petId) {
  const pet = {
    isLost: true,
  };
  Pet.updateLostStatus({ _id: petId }, pet, function (err, pet) {
    console.log("islost cambiado con exito");
  });
};

exports.deletePet = function (req, res) {
  Pet.delete({ _id: req.params.id }, function (err, pet) {
    if (err) res.json({ error: err });

    Lost.deleteByPetId(pet._id);
    
    console.log(pet)

    // fs.unlink(`./${pet.img.path}`, (err) => {
    //   if (err) throw err;
    //   console.log("Photo delete");
    // });

    res.json({ message: "Pet deleted" });
  });
};
