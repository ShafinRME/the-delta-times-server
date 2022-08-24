const express = require("express");
const router = express.Router();


const { getAllNews, createNews, deleteNews, updateNews, getSportsNews, getHealthNews, getInternationalNews, getTechNews, getBusinessNews, getPhotos, getBreakingNews } = require("../controllers/moderator.controller");



router.get("/", getAllNews);
router.get("/photos", getPhotos);
router.get("/breakingNews", getBreakingNews);
router.get("/tech", getTechNews);
router.get("/international", getInternationalNews);
router.get("/sports", getSportsNews);
router.get("/health", getHealthNews);
router.get("/business", getBusinessNews);
router.post("/", createNews);
router.delete("/:id", deleteNews);
router.patch("/:id", updateNews);

module.exports = router;