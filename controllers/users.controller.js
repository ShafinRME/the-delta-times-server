const Users = require("../models/users.model");
const jwt = require("jsonwebtoken");
const ObjectId = require("mongodb").ObjectId;

//get all user
const getAllUsers = async (req, res) => {
  try {
    const user = await Users.find();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// get one single user
const getOneUser = async (req, res) => {
  try {
    const user = await Users.findOne({ email: req.params.email });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// update one user
const putOneUser = async (req, res) => {
  try {
    const email = req.params.email;
    const user = req.body;
    const filter = { email: email };
    const options = { upsert: true };
    const updateDoc = {
      $set: user,
    };
    const result = await Users.updateOne(filter, updateDoc, options);
    const token = jwt.sign({ email: email }, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "12h",
    });
    res.status(200).json({ user, token });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// make admin
const makeAdmin = async (req, res) => {
  try {
    const email = req.params.email;
    const filter = { email: email };
    const updateDoc = {
      $set: { role: "admin" },
    };
    const result = await Users.updateOne(filter, updateDoc);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
// make admin
const makeModerator= async (req, res) => {
  try {
    const email = req.params.email;
    const filter = { email: email };
    const updateDoc = {
      $set: { role: "moderator" },
    };
    const result = await Users.updateOne(filter, updateDoc);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// make General
const makeGeneral = async (req, res) => {
  try {
    const email = req.params.email;
    const filter = { email: email };
    const updateDoc = {
      $set: { role: "general" },
    };
    const result = await Users.updateOne(filter, updateDoc);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// delete user per user
const deleteUser = async (req, res) => {
  try {

    const result = await Users.deleteOne({ _id: req.params._id });
    console.log(req.params._id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  getAllUsers,
  getOneUser,
  putOneUser,
  deleteUser,
  makeAdmin,
  makeModerator,
  makeGeneral,
};



