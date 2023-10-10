const express = require('express');

const router = express.Router();

const postsController = require('../controllers/posts');

router.get('/', postsController.getPosts);

router.post('/', postsController.createPost);

router.get('/:id', postsController.getPost);

router.patch('/:id', postsController.updatePost);

router.delete('/:id', postsController.deletePost);

router.post('/:id/likePost', postsController.likePost);

router.get('/:id', postsController.getLikePost);

module.exports = router;
