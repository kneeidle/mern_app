const express = require('express');

const router = express.Router();

const productsController = require('../controllers/products');

router.get('/', productsController.getAllPosts);//

router.post('/', productsController.addPost);//

router.get('/:postId', productsController.getSinglePost);

router.delete('/:postId', productsController.deletePost);//

router.patch('/:postId', productsController.updatePost);

module.exports = router;
