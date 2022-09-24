const express = require("express");
const router = express.Router();

const {
  getAllNews,
  createNews,
  deleteNews,
  updateNews,
  // getSportsNews,
  // getHealthNews,
  // getInternationalNews,
  // getTechNews,
  // getBusinessNews,
  getBreakingNews,
  // getAmericaNews,
  // getAsiaNews,
  // getEuropeNews,
  // getBangladeshNews,
  // getAccidentNews,
  // getCrimeNews,
  // getPoliticsNews,
  // getCricketNews,
  // getFootballNews,
  // getGlobalBusinessNews,
  // getLocalBusinessNews,
  // getLocalSportsNews,
  // getBooksNews,
  getCategoryNews,
  // getMovieNews,
  // getMusicNews,
  // getTelevisionNews,
  // getClimateNews,
  // getPollutionNews,
  // getGadgetNews,
  // getSocialMediaNews,
  // getItNews,
  getSubCategoryNews,
} = require("../controllers/moderator.controller");


router.get("/", getAllNews);
router.get("/category/:category", getCategoryNews);
router.get("/subCategory/:subCategory", getSubCategoryNews);
router.get("/breakingNews", getBreakingNews);
// router.get("/tech", getTechNews);
// router.get("/gadgets", getGadgetNews);
// router.get("/socialmedia", getSocialMediaNews);
// router.get("/it", getItNews);
// router.get("/books", getBooksNews);
// router.get("/international", getInternationalNews);
// router.get("/america", getAmericaNews);
// router.get("/asia", getAsiaNews);
// router.get("/europe", getEuropeNews);
// router.get("/bangladesh", getBangladeshNews);
// router.get("/accident", getAccidentNews);
// router.get("/crime", getCrimeNews);
// router.get("/politics", getPoliticsNews);
// router.get("/sports", getSportsNews);
// router.get("/cricket", getCricketNews);
// router.get("/football", getFootballNews);
// router.get("/localsports", getLocalSportsNews);
// router.get("/health", getHealthNews);
// router.get("/business", getBusinessNews);
// router.get("/globalbusiness", getGlobalBusinessNews);
// router.get("/localbusiness", getLocalBusinessNews);
// router.get("/movies", getMovieNews);
// router.get("/music", getMusicNews);
// router.get("/television", getTelevisionNews);
// router.get("/climate", getClimateNews);
// router.get("/pollution", getPollutionNews);
router.post("/", createNews);
router.delete("/:id", deleteNews);
router.patch("/:id", updateNews);

module.exports = router;
