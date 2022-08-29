const express = require("express");
const router = express.Router();
const {verifyJWT,verifyModerator, verifyAdmin} = require('../middleware/userVerify')

const {
  getAllUsers,
  getOneUser,
  putOneUser,
  deleteUser,
  makeAdmin,
} = require("../controllers/users.controller");

router.get("/",verifyJWT, getAllUsers);
router.get("/:email", verifyJWT,  getOneUser);
router.put("/:email", putOneUser);
router.put("/admin/:email", makeAdmin);
router.delete("/:email", verifyJWT, deleteUser);

module.exports = router;
