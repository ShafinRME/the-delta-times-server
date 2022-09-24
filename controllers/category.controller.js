const Category = require("../models/category.model");

const getNewsAddCategory = async (req, res) => {
  try {
    const NewsCategory = await Category.find({},"category");
    res.status(200).json(NewsCategory);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
const getNewsAddSubCategory = async (req, res) => {
  try {
    const newsSubCategory = await Category.find({}, "subcategory");
    res.status(200).json(newsSubCategory);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
const createNewsCategory = async (req, res) => {
  try {
    console.log(req.body)
    const newCategory = await Category.create(req.body);
    res.status(200).json({
      status: "success",
      message: "category and SubCategory inserted successfully!",
      data: newCategory,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "category and SubCategory in not inserted",
      error: error.message,
    });
  }
};

module.exports = {
  getNewsAddCategory,
  getNewsAddSubCategory,
  createNewsCategory,
};
