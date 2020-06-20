const express = require("express");
const PetRoutes = require("./PetsRoutes");
const OwnerRoutes = require("./OwnersRoutes");
const LostRoutes = require("./LostRoutes");

const router = express.Router();

router.use("/pet", PetRoutes);
router.use("/owner", OwnerRoutes);
router.use("/lost", LostRoutes);

module.exports = router;
