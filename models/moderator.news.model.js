const mongoose = require("mongoose");


const newsSchema = mongoose.Schema({
    id: {
        type: String,
        require: true
    },
    title: {
        type: String,
        require: true,
        unique: [true, 'title must be unique']
    },
    slug: {
        type: String,
        require: true,
        unique: [true, 'title must be unique']
    },
    description: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true
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
        require: true
    },
    category: {
        type: String,
        require: true
    },
    reference: {
        type: String,
        require: true
    },

});

module.exports = mongoose.model("News", newsSchema);