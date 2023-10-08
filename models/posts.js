const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Post must have a title"],
            trim: true,
            maxlength: [100, "Post title must be less than 100 characters"]
        },
        body: {
            type: String,
            required: [true, "Post must have a body"],
            trim: true,
            maxlength: [1000, "Post body must be less than 1000 characters"]
        },
        likes:{
            type: Number,
            default: 0,
        },
    },{
        timestamps: true,
    }

);

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
