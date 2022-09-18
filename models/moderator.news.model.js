const mongoose = require("mongoose");


const newsSchema = mongoose.Schema({
  id: {
    type: String,
    require: true,
  },
  title: {
    type: String,
    require: true,
    unique: [true, "title must be unique"],
  },
  slug: {
    type: String,
    require: true,
    unique: [true, "title must be unique"],
  },
  description: {
    type: String,
    require: true,
    min: [280, "Must be 280 characters or longer"],
    max: [280, "Must be 290 characters or lower"],
  },
  descriptionOne: {
    type: String,
    require: true,
    min: [280, "Must be 280 characters or longer"],
    max: [280, "Must be 290 characters or lower"],
  },
  descriptionTwo: {
    type: String,
    require: true,
    min: [280, "Must be 280 characters or longer"],
    max: [280, "Must be 290 characters or lower"],
  },
  descriptionThree: {
    type: String,
    require: false,
    min: [280, "Must be 280 characters or longer"],
    max: [280, "Must be 290 characters or lower"],
  },
  descriptionFour: {
    type: String,
    require: false,
    min: [280, "Must be 280 characters or longer"],
    max: [280, "Must be 290 characters or lower"],
  },
  image: {
    type: String,
    require: true,
  },
  photo: {
    type: String,
  },
  breakingNews: {
    type: String,
  },
  subCategory: {
    type: String,
  },
  date: {
    type: String,
    require: true,
  },
  category: {
    type: String,
    require: true,
  },
  reference: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("News", newsSchema);