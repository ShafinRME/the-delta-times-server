const express = require("express");
const router = express.Router();


const { getAllUsers, createUser, deleteUser, updateUser, getSportsNews, getHealthNews, getInternationalNews, getTechNews } = require("../controllers/user.controller");


router.get("/", getAllUsers);
router.get("/tech", getTechNews);
router.get("/international", getInternationalNews);
router.get("/sports", getSportsNews);
router.get("/health", getHealthNews);
router.get("/tech", getSportsNews);
router.post("/", createUser);
router.delete("/:id", deleteUser);
router.patch("/:id", updateUser);

module.exports = router;