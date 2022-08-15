const { v4: uuidv4 } = require("uuid")
const News = require("../models/moderator.news.model")

const getOneNews = async (req, res) => {
    try {
        const news = await News.findOne({ slug: req.params.slug })
        res.status(200).json(news);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = { getOneNews };