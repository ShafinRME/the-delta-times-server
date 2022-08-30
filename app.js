const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");
require("dotenv").config();
require("./config/db");

const moderatorRouter = require("./routes/moderator.route");
const adminNewsRouter = require("./routes/admin.route");
const contactRouter = require("./routes/contact.route");
const slugRouter = require("./routes/slug.route");
const photoRouter = require("./routes/photos.route");
const usersRouter = require("./routes/users.route");

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/news", moderatorRouter);
app.use("/api/contacts", contactRouter);
app.use("/api/news", slugRouter);
app.use("/api/users", usersRouter);
app.use("/api/photos", photoRouter);
app.use("/api/adminNews", adminNewsRouter);


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/Views/index.html");
});

//Route is found
app.use((req, res, next) => {
    res.status(404).json({
        message: "route is not found",
    });
});


// Server is not found
app.use((err, req, res, next) => {
    res.status(500).json({
        message: "server is not found",
    });
});

module.exports = app;
