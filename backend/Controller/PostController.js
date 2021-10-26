const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const fs = require("fs");
const path = require("path");
const Schema = require("../Schema");
// const Protect = require("../middleware/protect");
// const isAdmin = require("../middleware/isAdmin");
// const router = express.Router();
// const dotenv = require("dotenv");


//  PAGE POST //

//  MODIFIER POST - 
//  SUPPRIMER POST - OK
//  CREER POST - OK
//  CONSULTER POST - OK

const getAllPost = async (_req, res) => {
    const Posts = await Schema.Post.find(/* { date: { $lte: date du jour} } */);
    const allInfoPost = [];

    for (let i = 0; i < Posts.length; i++) {
        const idPost = Posts[i]._id;
        const likeList = await Schema.PostLike.find({ PostId: idPost })
        allInfoPost.push({
            Post: Posts[i],
            likeList,
        })
    }
    res.status(200).json({
        message: "Post list",
        data: allInfoPost,
    });
};

const addPost = async (req, res) => {
    const Post = req.body;
    try {

        const newPost = await Schema.Post.create({
            title: Post.title,
            description: Post.description,
            userId: req.cookies.jwtData.id,
            picture: req.file.originalname,
            numberOfLikes: 0
        });

        fs.renameSync(req.file.path, path.join(req.file.destination, newPost.id));
        await Schema.Post.updateOne({ _id: newPost.id }, { picture: newPost.id });

        res.status(201).json({
            message: `New post added ${Post.title}`,
            data: Post
        });
    }
    catch (err) {
        console.log(err);
        return res.json({
            message: "error",
        });
    }
};

const deletePost = async (req, res) => {
    try {
        const postId = req.params.postId;
        const Post = await Schema.Post.deleteOne({ _id: postId });
        const PostLike = await Schema.PostLike.deleteMany({ PostId: postId });
        fs.unlinkSync(`./public/Img/${postId}`)
        res.json({
            message: `${postId} deleted`,
        });
    }
    catch (err) {
        console.log(err);
        return res.json({
            message: "error: Post not found",
        });
    }
};

async function numberOfLikes() {
    try {
        const arrayPost = await Schema.Post.find({}); // On récupère tous les evenement 
        const IdOfAllPost = arrayPost.map(element => element._id); // on crée un tableau avec la liste de tous les EventID
        // console.log(IdOfAllEvent.length)
        for (let i = 0; i < IdOfAllPost.length; i++) { // On boucle sur tous les éléments du tableau
            const numberLikes = await Schema.PostLike.countDocuments({ EventId: IdOfAllPost[i] }); // on compte dans eventattendee le nombre de fois ou l'ID de l'event existe
            // console.log(numberAttendies); // on affiche le numbre de participant
            // console.log(IdOfAllEvent[i]);
            // const test = await Schema.Event.updateOne({ EventId: IdOfAllEvent[i] }, { numberOfAttendies: numberAttendies }); // Regardé le updateOne //On met à jours la valeur du numberAttendies avec ce qu'on à récupérer ligne précédente
            const test = await Schema.Post.updateOne({ _id: IdOfAllEvent[i] }, { $set: { numberOfLikes: numberLikes } }); // Regardé le updateOne //On met à jours la valeur du numberAttendies avec ce qu'on à récupérer ligne précédente
            // console.log(test);
        } // On boucle sur l'evenement suivant (présent dans la variable/tableau IdOfAllEvent 
    }
    catch (err) {
        console.log(err);
        return res.json({
            message: "error",
        });
    }
}



const likePost = async (req, res) => {
    const eventId = req.params.eventId;
    const userId = req.cookies.jwtData.id;
    try {
        const attendToEvent = await Schema.EventAttendees.findOne({ EventId: eventId, userId: userId });
        if (attendToEvent) {
            await Schema.EventAttendees.deleteOne({ EventId: eventId });
        } else {
            const newPost = await Schema.PostLike.create({
                EventId: eventId,
                userId: userId
            });
        };
        numberOfLikes();
        res.json({
            message: `Number of likes up to date`,
        });
    }
    catch (err) {
        console.log(err);
        return res.json({
            message: "error",
        });
    }
};



/* const patchEvent = async (req, res) => { //////// A corriger et ajouter si on a du temps
    try {
        const EventUpdate = req.body;
        await Schema.Event.findOneAndUpdate(
            { _id: req.body.id },
            {
            title: EventUpdate.title,
            date: EventUpdate.date,
            heure: EventUpdate.heure,
            duration: EventUpdate.duration,
            place: EventUpdate.place,
            description: EventUpdate.description,
            userId: req.cookies.jwtData.id,
            }
        );
        await Schema.EventEducationRelated.findOneAndUpdate(
            { _id: req.body.id },
            {
            EventId: newEvent.id,
            EducationId: EventUpdate.educationId
            }
        );

        res.json({
            message: "Update status: changed recorded",
        })
    }
    catch (err) {
        console.log(err);
        return res.json({
            message: "error: Event not found",
        });
    }
}; */

module.exports = {
    getAllPost: getAllPost,
    addPost: addPost,
    deletePost: deletePost,
    // patchEvent: patchEvent,
    likePost: likePost,
};