const { v4: uuidv4 } = require("uuid")
const News = require("../models/user.model")


const getAllNews = async (req, res) => {
    try {
        const news = await News.find();
        res.status(200).json(news);
    } catch (error) {
        res.status(500).send(error.message);
    }
};


const getTechNews = async (req, res) => {
    try {
        const query = { category: "Tech" }
        const news = await News.find(query);
        res.status(200).json(news);
    } catch (error) {
        res.status(500).send(error.message);
    }
};
const getInternationalNews = async (req, res) => {
    try {
        const query = { category: "International" }
        const news = await News.find(query);
        res.status(200).json(news);
    } catch (error) {
        res.status(500).send(error.message);
    }
};
const getHealthNews = async (req, res) => {
    try {
        const query = { category: "Health" }
        const news = await News.find(query);
        res.status(200).json(news);
    } catch (error) {
        res.status(500).send(error.message);
    }
};
const getSportsNews = async (req, res) => {
    try {
        const query = { category: "Sports" }
        const news = await News.find(query);
        res.status(200).json(news);
    } catch (error) {
        res.status(500).send(error.message);
    }
};
const getBusinessNews = async (req, res) => {
    try {
        const query = { category: "Business" }
        const news = await News.find(query);
        res.status(200).json(news);
    } catch (error) {
        res.status(500).send(error.message);
    }
};


const getOneUser = (req, res) => {
    res.status(200).json({
        message: "Get one user",
    });
};
const getManyUser = (req, res) => {
    res.status(201).json({
        message: "Get many  user",
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
        res.status(500).send(error.message);
    }
};


const updateUser = async (req, res) => {
    try {
        const news = await News.findOne({ id: req.params.id });
        news.title = req.body.title;
        news.slug = req.body.slug;
        news.description = req.body.description;
        news.image = req.body.image;
        news.date = req.body.date;
        news.category = req.body.category;
        news.reference = req.body.title;
        await news.save();
        res.status(200).json(news);
    } catch (error) {
        res.status(500).send(error.message);
    }

};


const deleteUser = async (req, res) => {
    try {
        await News.deleteOne({ id: req.params.id });
        req.status(200).json({ message: "News is Deleted from Database" });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = { getAllNews, getOneUser, createUser, updateUser, deleteUser, getManyUser, getSportsNews, getInternationalNews, getTechNews, getHealthNews, getBusinessNews };