const express = require("express");
const PostController = require("../Controller/PostController");
const Protect = require("../middleware/protect");
const isAdmin = require("../middleware/isAdmin");
const multer = require("multer");
const upload = multer({ dest: './public/Img/' });
const router = express.Router();


router.get("/", Protect.protect, PostController.getAllPost); // V
router.post("/", Protect.protect, isAdmin.isAdmin, upload.single('image'), PostController.addEvent); // V
router.post("/liked/:postId", Protect.protect, PostController.likePost); // X
router.delete("/:postId", Protect.protect, isAdmin.isAdmin, PostController.deletePost); //  V
// router.patch("/", Protect.protect, isAdmin.isAdmin, EventController.patchEvent); // X

module.exports = router;