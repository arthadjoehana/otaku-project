const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    userId: {
        required: false,
        type: String,
    },
    userName: {
        required: true,
        type: String,
    },
    email: {
        required: true,
        type: String,
        unique: true,
    },
    password: {
        required: true,
        type: String,
    },
    picture: {
        required: false,
        type: String,
    },
});

const PostSchema = new mongoose.Schema({
    PostId: {
        required: false,
        type: String,
    },
    title: {
        required: true,
        type: String,
    },
    picture: {
        type: String,
        required: true
    },
    description: {
        required: true,
        type: String,
    },
    userId: [{
        type: mongoose.Types.ObjectId,
        ref: "Users", // à vérif
    }],
    numberOfLikes: {
        required: true,
        type: Number,
    },
});

const PostLikeSchema = new mongoose.Schema({
    postId: [{
        type: mongoose.Types.ObjectId,
        ref: "Post", // à vérif
    }],
    userId: [{
        type: mongoose.Types.ObjectId,
        ref: "Users", // à vérif
    }],
});

const User = mongoose.model("User", UserSchema);
const Post = mongoose.model("User", PostSchema);
const PostLike = mongoose.model("User", PostLikeSchema);

module.exports = {
    User,
    Post,
    PostLike,

};