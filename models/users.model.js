const mongoose = require("mongoose");

const usersSchema = mongoose.Schema({
  email: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("Users", usersSchema);
