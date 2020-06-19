const express = require("express");
const PetRoutes = require("./PetsRoutes");
const OwnerRoutes = require("./OwnersRoutes");

const router = express.Router();

router.use("/pet",PetRoutes);
router.use("/owner",OwnerRoutes);

module.exports = router;
