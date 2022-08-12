const express = require("express");
const cors = require("cors");
require("./config/db");

const userRouter = require("./routes/user.route");

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/users", userRouter);

// api/users : GET
// api/users/:id : GET
// api/users/ : POST
// api/users/:id : PATCH
// api/users/:id : DELETE

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
