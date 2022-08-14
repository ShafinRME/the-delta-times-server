const mongoose = require("mongoose");


const contactSchema = mongoose.Schema({
    id: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    phone: {
        type: Number,
    },
    email: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    },

});

module.exports = mongoose.model("contacts", contactSchema);