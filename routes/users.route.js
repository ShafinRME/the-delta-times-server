const express = require("express");
const router = express.Router();
const {verifyJWT,verifyModerator, verifyAdmin} = require('../middleware/userVerify')

const {
  getAllUsers,
  getOneUser,
  putOneUser,
  deleteUser,
  makeAdmin,
  makeModerator,
  makeGeneral
} = require("../controllers/users.controller");

router.get("/",verifyJWT, getAllUsers);
router.get("/:email", verifyJWT,  getOneUser);
router.put("/:email", putOneUser);
router.patch("/admin/:email", verifyJWT, makeAdmin);
router.patch("/moderator/:email", verifyJWT, makeModerator);
router.patch("/general/:email", verifyJWT, makeGeneral);
// router.delete("/:email", verifyJWT, deleteUser);
router.delete("/:_id", verifyJWT, deleteUser);


module.exports = router;
