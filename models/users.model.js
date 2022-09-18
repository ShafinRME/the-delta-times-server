const mongoose = require("mongoose");

const usersSchema = mongoose.Schema({
  email: {
    type: String,
    require: [true, "Email already register"],
    unique: [true, "email must be unique"],
    trim: true,
  },
  name: {
    type: String,
    require: true,
  },
  photoUrl: {
    type: String,
    require: true,
  },
  role: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("Users", usersSchema);
