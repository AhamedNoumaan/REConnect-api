const express = require('express');

const router = express.Router();

const postsController = require('../controllers/posts');

router.get('/', postsController.getPosts);

router.post('/', postsController.createPost);

router.get('/:id', postsController.getPostsByID);

router.patch('/:id', postsController.updatePost);

router.delete('/:id', postsController.deletePost);

router.post('/like/:id',postsController.likePost);

module.exports = router;
