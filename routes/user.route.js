const express = require("express");
const router = express.Router();


const { getAllNews, createUser, deleteUser, updateUser, getSportsNews, getHealthNews, getInternationalNews, getTechNews, getBusinessNews } = require("../controllers/user.controller");


router.get("/", getAllNews);
router.get("/tech", getTechNews);
router.get("/international", getInternationalNews);
router.get("/sports", getSportsNews);
router.get("/health", getHealthNews);
router.get("/tech", getSportsNews);
router.get("/business", getBusinessNews);
router.post("/", createUser);
router.delete("/:id", deleteUser);
router.patch("/:id", updateUser);

module.exports = router;