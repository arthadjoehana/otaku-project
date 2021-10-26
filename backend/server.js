const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const multer = require("multer");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const Protect = require("./middleware/protect");
// const isAdmin = require("./middleware/isAdmin");
// const router = express.Router();

// ROUTER
const PostRouter = require("./Router/PostRouter");
const HomeRouter = require("./Router/HomeRouter");
const ListRouter = require("./Router/ListRouter");
const ProfilRouter = require("./Router/ProfilRouter");

// SCHEMA
const Schema = require("./Schema");

// DOTENV CONFIG
dotenv.config(
    { path: "./config.env" }
);

// MONGOOSE CONNECT
mongoose
    .connect(process.env.DB, {
        useNewUrlParser: true,
    })
    .then(() => {
        console.log("Connected to MongoDB !");
    });

// MIDDLEWARE
app.use(express.json());
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));  //// ATTENTION A ADAPTER AVEC HEROKU !!!
app.use(cookieParser());
app.use(express.static(path.join(__dirname+'/public')));
//app.use(express.static('public'))
// app.use(express.urlencoded({ extended: true }));


app.use("/post", PostRouter);
app.use("/home", HomeRouter);
app.use("/list", ListRouter);
app.use("/profil", ProfilRouter);


// LISTEN
app.listen(process.env.PORT, () => {
    console.log("Server listening on port: " + process.env.PORT);
});

//