const { v4: uuidv4 } = require("uuid")
const Contacts = require("../models/contact.model")

const createContacts = async (req, res) => {
    try {
        const newContacts = new Contacts({
            id: uuidv4(),
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            phone: Number(req.body.phone),
            email: req.body.email,
            description: req.body.description,
        })
        await newContacts.save();
        res.status(201).json(newContacts);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const getAllContacts = async (req, res) => {
    try {
        const contacts = await Contacts.find();
        res.status(200).json(contacts);
    } catch (error) {
        res.status(500).send(error.message);
    }
};


module.exports = { createContacts, getAllContacts };