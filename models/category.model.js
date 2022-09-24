const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
  category: {
    type: String,
    require: true,
  },
  subCategory: [
    {title: {
      type: String,
      index: { unique: true, sparse: true },
      default: "",
    }}
  ],
});

module.exports = mongoose.model("Category", categorySchema);
