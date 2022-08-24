const express = require("express");
const router = express.Router();

const { getOneNews, getOneeNews } = require("../controllers/slug.controller");

router.get("/:slug", getOneNews);
router.get("/:id", getOneeNews);

module.exports = router;