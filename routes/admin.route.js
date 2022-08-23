const express = require("express");
const router = express.Router();


const { getAllAdminNews, createAdminNews, updateAdminNews, deleteAdminNews, getOneAdminNews } = require("../controllers/admin.controller");

router.get("/", getAllAdminNews);
router.get("/:id", getOneAdminNews);
router.post("/", createAdminNews);
router.patch("/:id", updateAdminNews);
router.delete("/:id", deleteAdminNews);

module.exports = router;