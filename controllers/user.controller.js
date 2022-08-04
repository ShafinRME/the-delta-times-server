const { v4: uuidv4 } = require("uuid")
const News = require("../models/user.model")


const getAllUsers = (req, res) => {
    res.status(200).json({
        message: "All users",
    });
};


const getOneUser = (req, res) => {
    res.status(200).json({
        message: "Get one user",
    });
};


const createUser = async (req, res) => {
    try {
        const newNews = new News({
            id: uuidv4(),
            title: req.body.title,
            slug: req.body.slug,
            description: req.body.description,
            image: req.body.image,
            date: req.body.date,
            category: req.body.category,
            reference: req.body.reference
        })
        await newNews.save();
        res.status(201).json(newNews);
    } catch (error) {
        console.log(error.message);
    }
};


const updateUser = (req, res) => {
    res.status(200).json({
        message: "user is updated",
    });
};


const deleteUser = (req, res) => {
    res.status(200).json({
        message: "user is deleted",
    });
};

module.exports = { getAllUsers, getOneUser, createUser, updateUser, deleteUser };