const express = require("express");
const Pets = require("../controllers/Pet");
const upload = require("../Utils/storage");

let router = express.Router();

router.post("/", upload.single("img"), Pets.createPet);
router.get("/userpets/:id", Pets.getUserPets);
router.get("/", Pets.getPets);
router.get("/:id", Pets.getById);
router.delete("/:id", Pets.deletePet);
router.patch("/:id", Pets.setIsLostFalse);
router.put("/update/:id", Pets.updatePet);



// router.route("/:id").delete(Pets.deletePet);

module.exports = router;
