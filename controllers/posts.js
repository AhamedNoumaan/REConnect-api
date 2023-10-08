const mongoose = require('mongoose');
const postModel = require('../models/posts');

async function getPosts(req, res, next) {

    try {
        const posts = await postModel.find();
        res.json(posts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

async function createPost(req, res, next) {
    const post = new postModel({
        title: req.body.title,
        body: req.body.body,
    });

    try {
        const newPost = await post.save();
        res.status(201).json(newPost);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}


module.exports = {
    getPosts,
    createPost
}