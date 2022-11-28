const express = require("express");
const router = express.Router()
const { login, signup, getusers } = require("../Controllers/controller");
const {validate} = require("../Middleware/validate");


router.get("/", getusers)

router.post("/signup",validate, signup)

router.post("/login", login)

module.exports = router;