const express = require("express");
const Pets = require("../controllers/Pet");
const upload = require("../Utils/storage");

let router = express.Router();

router.post("/", upload.single("img"), Pets.createPet);
router.get("/", Pets.getPets);
router.delete("/:id", Pets.deletePet);
router.patch("/:id", Pets.updateLostStatus);
// router.route("/").post(Pets.createPet).get(Pets.getPets);

// router.route("/:id").delete(Pets.deletePet);

module.exports = router;
