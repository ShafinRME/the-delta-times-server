const Users = require("../models/users.model");

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
    console.log(user);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const putOneUser = async (req, res) => {
  // try {
  //   const user = await Users.findOneAndUpdate(
  //     { email: req.params.email },
  //     {
  //       upsert: true,
  //       new: true,
  //     },
  //     (err, data) => {
  //       if (err) {
  //         console.log(error);
  //       } else {
  //         console.log(data);
  //       }
  //     }
  //   );
  //   res.status(200).json(user);
  // } catch (error) {
  //   res.status(500).send(error.message);
  // }

  try {
    const email = req.params.email;
    const user = req.body;
    const filter = { email: email };
    const options = { upsert: true };
    const updateDoc = {
      $set: user,
    };
    const result = await Users.updateOne(filter, updateDoc, options);
    // const token = jwt.sign({ email: email }, process.env.ACCESS_TOKEN_SECRET, {
    //   expiresIn: "12h",
    // });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { getAllUsers, getOneUser, putOneUser };
