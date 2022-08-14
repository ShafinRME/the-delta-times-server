const { v4: uuidv4 } = require("uuid");
const AdminNews = require("../models/admin.news.model");

const getAllNews = async (req, res) => {
    res.status(201).json({
        message: "Get many  user",
    });
}

const createNews = async (req, res) => {
    try {
        const adminNews = new AdminNews({
            id: uuidv4(),
            title: req.body.title,
            slug: req.body.slug,
            description: req.body.description,
            image: req.body.image,
            date: req.body.date,
            category: req.body.category,
            reference: req.body.reference
        })
        await adminNews.save();
        res.status(201).json(adminNews);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const updateAdminNews = async (req, res) => {
    try {
        const adminNews = await AdminNews.findOne({ id: req.params.id });
        news.title = req.body.title;
        news.slug = req.body.slug;
        news.description = req.body.description;
        news.image = req.body.image;
        news.date = req.body.date;
        news.category = req.body.category;
        news.reference = req.body.title;
        await adminNews.save();
        res.status(200).json(adminNews);
    } catch (error) {
        res.status(500).send(error.message);
    }

};

module.exports = { getAllNews, createNews, updateAdminNews };
