const { v4: uuidv4 } = require("uuid");
const AdminNews = require("../models/admin.news.model");

const getAllAdminNews = async (req, res) => {
    try {
        const adminNews = await AdminNews.find();
        res.status(200).json(adminNews);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const getOneAdminNews = async (req, res) => {
    try {
        const adminNews = await AdminNews.findOne({ id: req.params.id });
        res.status(200).json(adminNews);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const createAdminNews = async (req, res) => {
    try {
        const adminNews = new AdminNews({
            id: uuidv4(),
            title: req.body.title,
            slug: req.body.slug,
            description: req.body.description,
            image: req.body.image,
            photo: req.body.photo,
            subCategory: req.body.subCategory,
            breakingNews: req.body.breakingNews,
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
        news.breakingNews = req.body.breakingNews;
        news.subCategory = req.body.subCategory;
        news.photo = req.body.photo;
        news.date = req.body.date;
        news.category = req.body.category;
        news.reference = req.body.title;
        await adminNews.save();
        res.status(200).json(adminNews);
    } catch (error) {
        res.status(500).send(error.message);
    }

};

const deleteAdminNews = async (req, res) => {
    try {
        await AdminNews.deleteOne({ id: req.params.id });
        req.status(200).json({ message: "News is Deleted from Database" });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = { getAllAdminNews, getOneAdminNews, createAdminNews, updateAdminNews, deleteAdminNews };
