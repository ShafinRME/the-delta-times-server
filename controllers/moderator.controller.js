const { v4: uuidv4 } = require("uuid")
const News = require("../models/moderator.news.model")


const createNews = async (req, res) => {
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
        console.log(req);
        const query = { category: "Tech" }
        console.log("query log", query)
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


const updateNews = async (req, res) => {
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


const deleteNews = async (req, res) => {
    try {
        await News.deleteOne({ id: req.params.id });
        req.status(200).json({ message: "News is Deleted from Database" });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = { getAllNews, createNews, updateNews, deleteNews, getSportsNews, getInternationalNews, getTechNews, getHealthNews, getBusinessNews };