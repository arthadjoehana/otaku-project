const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const router = express.Router();
const Schema = require("../Schema");
const fs = require("fs");
const path = require("path");

// PAGE HOME //
// MODIFIER SON PROFIL - A faire

const checkLogIn = async (req, res) => {
    try {
        console.log("ON RECOIT REQUETE !!!!!!")
        const dataUser = jwt.verify(req.cookies.jwt, process.env.JWT_SECRET);
        console.log(dataUser)
        if (dataUser.iat + 1000 > Math.ceil(Date.now() / 1000)) {
            return res.json({
                logStatus: true
            })
        } else {
            return res.json({
                logStatus: false
            })
        }
    } catch (err) {
        console.log("Catch", err);
        return res.json({
            logStatus: false
        })
    }
}


const logIn = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const userExist = await Schema.User.findOne({ email }); //Chercher l'utilisateur dans la BD
    if (!userExist) {
        return res.json({
            message: "Invalid email or password",
        });
    }

    const passwordValid = await bcrypt.compare(password, userExist.password) //Verification du MDP
    if (!passwordValid) {
        return res.json({
            message: "Invalid email or password",
        });
    }

    if (userExist.isValidate === false) {
        return res.json({
            message: "Account waiting for validation", // test
        });
    }

    const token = jwt.sign({ id: userExist._id }, process.env.JWT_SECRET); //Creation du token

    res.cookie("jwt", token, { httpOnly: true, secure: false }); //Est ce que ç ava bien jusqu'au front ? Si oui comment vérifier
    res.json({
        message: "You are connected",
    });
};


// remplir l'EducationList
const addUser = async (req, res) => {
    const User = req.body
    console.log("Coté Back    ", User);
    console.log("console log de file ", req.file);
    const hashedPassword = await bcrypt.hash(User.password, 12);
    const educationExist = await Schema.EducationList.findOne({
        education: User.education,
    });
    try {
        const newUser = await Schema.User.create({
            firstName: User.firstName,
            lastName: User.lastName,
            phoneNumber: User.phoneNumber,
            email: User.email,
            area: User.area,
            category: User.category,
            password: hashedPassword,
            isAdmin: false,
            isValidate: false,
            picture: req.file.originalname
        });

        fs.renameSync(req.file.path, path.join(req.file.destination, newUser.id));
        await Schema.User.updateOne({ _id: newUser.id }, { picture: newUser.id });

        await Schema.UserEducation.create({
            date: User.date,
            userId: newUser.id,
            EducationId: educationExist.id,
            // certificate
        });
        await Schema.UserExperience.create({
            title: User.titleExperience,
            startingDate: User.startingDate,
            endingDate: User.endingDate,
            userId: newUser.id,
        });
        res.status(201).json({
            message: `New user added ! ${User.email}`,
            data: User // On renvoit le req.body sans traitement, est-ce que c'est utile ?
        });
    }
    catch (err) {
        console.log(err);
        return res.json({
            message: "error",
        });
    }
};

const deconnected = (_req, res) => {
    try {
        res.clearCookie("jwt", "", { path: "/dsiconnect" })
            .status(200)
            .json({ message: "Offline" });
    }
    catch (err) {
        console.log(err);
        return res.json({
            message: "error",
        });
    }
};

// const patchUser = (Protect.protect, (req, res) => {

// });

module.exports = {
    logIn: logIn,
    addUser: addUser,
    // patchUser: patchUser,
    deconnected: deconnected,
    checkLogIn: checkLogIn,
};