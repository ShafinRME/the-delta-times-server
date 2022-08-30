const express = require("express");
const router = express.Router();

const { getIdNews, getSlugNews } = require("../controllers/slug.controller");

router.get("/:slug", getSlugNews);
router.get("/:id", getIdNews);

module.exports = router;