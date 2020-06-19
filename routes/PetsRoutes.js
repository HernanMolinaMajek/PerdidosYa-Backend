const express = require("express");
const Pets = require("../controllers/Pet");

let router = express.Router();

// router.post("/", Pets.createPet);
// router.get("/", Pets.getPets);
// router.delete("/:id", Pets.deletePet);
router.route("/").post(Pets.createPet).get(Pets.getPets);

router.route("/:id").delete(Pets.deletePet);

module.exports = router;
