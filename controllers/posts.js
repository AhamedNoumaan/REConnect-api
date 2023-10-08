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

async function getPostsByID(req, res, next) {

    try {
        const posts = await postModel.findById(req.params.id);
        res.json(posts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = {
    getPosts,
    getPostsByID
   
}