const express = require("express");
const router = express.Router();

const {
  getAllUsers,
  getOneUser,
  putOneUser,
  deleteUser,
} = require("../controllers/users.controller");

router.get("/", getAllUsers);
router.get("/:email", getOneUser);
router.put("/:email", putOneUser);
router.delete("/:email", deleteUser);

module.exports = router;
