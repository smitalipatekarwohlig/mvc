const express = require("express");
const router = express.Router();

const controller = require("../mvc/controllers/userController");

router.get("/",controller.get);

module.exports = router;