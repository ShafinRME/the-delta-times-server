const express = require("express");
const router = express.Router();


const { getAllAdminNews, createAdminNews, updateAdminNews } = require("../controllers/admin.controller");

router.get("/", getAllAdminNews);
router.post("/", createAdminNews);
router.patch("/:id", updateAdminNews);

module.exports = router;