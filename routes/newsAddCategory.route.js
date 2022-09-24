const express = require("express");
const router = express.Router();

const {

  getNewsAddCategory, getNewsAddSubCategory, createNewsCategory,
} = require("../controllers/category.controller");

router.get("/newsAddCategory", getNewsAddCategory);
router.get("/newsAddSubCategory", getNewsAddSubCategory);
router.post("/addNewsCategory", createNewsCategory);

module.exports = router;
