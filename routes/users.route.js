const express = require("express");
const router = express.Router();

const {
  getAllUsers,
  getOneUser,
  putOneUser,
} = require("../controllers/users.controller");

router.get("/", getAllUsers);
router.get("/:email", getOneUser);
router.put("/:email", putOneUser);

module.exports = router;
