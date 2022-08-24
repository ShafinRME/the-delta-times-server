const express = require("express");
const router = express.Router();

const { createContacts, getAllContacts } = require("../controllers/contacts.controller");

router.post("/", createContacts);
router.get("/", getAllContacts);

module.exports = router;