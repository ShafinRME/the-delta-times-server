const express = require("express");
const router = express.Router();

const { getIdNews, getSlugNews } = require("../controllers/slug.controller");

router.get("/:slug", getSlugNews);
router.get("/politics/:slug", getSlugNews);
router.get("/accident/:slug", getSlugNews);
router.get("/crime/:slug", getSlugNews);
router.get("/asia/:slug", getSlugNews);
router.get("/europe/:slug", getSlugNews);
router.get("/america/:slug", getSlugNews);
router.get("/cricket/:slug", getSlugNews);
router.get("/football/:slug", getSlugNews);
router.get("/localsports/:slug", getSlugNews);
router.get("/localbusiness/:slug", getSlugNews);
router.get("/globalbusiness/:slug", getSlugNews);
router.get("/gadgets/:slug", getSlugNews);
router.get("/lsocialmedia/:slug", getSlugNews);
router.get("/it/:slug", getSlugNews);
router.get("/movies/:slug", getSlugNews);
router.get("/music/:slug", getSlugNews);
router.get("/television/:slug", getSlugNews);
router.get("/climate/:slug", getSlugNews);
router.get("/pollution/:slug", getSlugNews);
router.get("/:id", getIdNews);

module.exports = router;