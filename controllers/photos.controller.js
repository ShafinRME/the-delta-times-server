const News = require("../models/moderator.news.model")


const getBangladeshPhotos = async (req, res) => {
    try {
        const query = { photo: "Yes", category: "Bangladesh" }
        const news = await News.find(query);
        res.status(200).json(news);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const getInternationalPhotos = async (req, res) => {
    try {
        const query = { photo: "Yes", category: "International" }
        const news = await News.find(query);
        res.status(200).json(news);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const getSportsPhotos = async (req, res) => {
    try {
        const query = { photo: "Yes", category: "Sports" }
        const news = await News.find(query);
        res.status(200).json(news);
    } catch (error) {
        res.status(500).send(error.message);
    }
};
const getTechPhotos = async (req, res) => {
    try {
        const query = { photo: "Yes", category: "Tech" }
        const news = await News.find(query);
        res.status(200).json(news);
    } catch (error) {
        res.status(500).send(error.message);
    }
};
const getHealthPhotos = async (req, res) => {
    try {
        const query = { photo: "Yes", category: "Health" }
        const news = await News.find(query);
        res.status(200).json(news);
    } catch (error) {
        res.status(500).send(error.message);
    }
};
const getBooksPhotos = async (req, res) => {
    try {
        const query = { photo: "Yes", category: "Books" }
        const news = await News.find(query);
        res.status(200).json(news);
    } catch (error) {
        res.status(500).send(error.message);
    }
};
const getBusinessPhotos = async (req, res) => {
    try {
        const query = { photo: "Yes", category: "Business" }
        const news = await News.find(query);
        res.status(200).json(news);
    } catch (error) {
        res.status(500).send(error.message);
    }
};
const getEntertainmentPhotos = async (req, res) => {
    try {
        const query = { photo: "Yes", category: "Entertainment" }
        const news = await News.find(query);
        res.status(200).json(news);
    } catch (error) {
        res.status(500).send(error.message);
    }
};
const getEnvironmentPhotos = async (req, res) => {
    try {
        const query = { photo: "Yes", category: "Environment" }
        const news = await News.find(query);
        res.status(200).json(news);
    } catch (error) {
        res.status(500).send(error.message);
    }
};


module.exports = { getBangladeshPhotos, getBooksPhotos, getBusinessPhotos, getHealthPhotos, getInternationalPhotos, getSportsPhotos, getTechPhotos, getEntertainmentPhotos, getEnvironmentPhotos };