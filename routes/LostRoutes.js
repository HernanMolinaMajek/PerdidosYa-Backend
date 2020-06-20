const express = require("express");
const Lost = require("../controllers/Lost");

let router = express.Router();

router.post("/", Lost.createLost);
router.get("/", Lost.getLost);
router.delete("/:id", Lost.delete);

module.exports = router;
