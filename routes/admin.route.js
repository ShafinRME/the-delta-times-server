const express = require("express");
const router = express.Router();


const { getAllNews, createNews, updateAdminNews } = require("../controllers/admin.controller");

router.get("/", getAllNews);
router.post("/", createNews);
router.patch("/:id", updateAdminNews);

module.exports = router;