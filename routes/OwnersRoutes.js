const express = require("express");
const Owners = require("../controllers/Owner");

let router = express.Router();

// router.post("/", Owners.createOwner);
// router.get("/", Owners.getOwners);
// router.delete("/:id", Owners.deleteOwner);
router.route("/").post(Owners.createOwner).get(Owners.getOwners);

router.route("/:id").delete(Owners.getOwners);

module.exports = router;
