const express = require("express");
const router = express.Router();

const { getOneNews } = require("../controllers/slug.controller");

router.get("/:slug", getOneNews);

module.exports = router;