const mongoose = require("mongoose");

const adminNewsSchema = mongoose.Schema({
    id: {
        type: String,
        require: true
    },
    title: {
        type: String,
        require: true
    },
    slug: {
        type: String,
        require: true
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

module.exports = mongoose.model("AdminNews", adminNewsSchema);