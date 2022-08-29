const express = require("express");
const router = express.Router();

const { getInternationalPhotos, getSportsPhotos, getTechPhotos, getHealthPhotos, getBooksPhotos, getBusinessPhotos, getBangladeshPhotos } = require("../controllers/photos.controller");

router.get("/bangladesh", getBangladeshPhotos);
router.get("/international", getInternationalPhotos);
router.get("/sports", getSportsPhotos);
router.get("/tech", getTechPhotos);
router.get("/health", getHealthPhotos);
router.get("/books", getBooksPhotos);
router.get("/business", getBusinessPhotos);

module.exports = router;