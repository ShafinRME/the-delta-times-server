const express = require("express");
const router = express.Router();

const { createContacts } = require("../controllers/contacts.controller");

router.post("/", createContacts);

module.exports = router;