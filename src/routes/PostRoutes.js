const express = require('express')

const router = express.Router()

const postController = require('../controllers/PostController');

// Retrieve all posts
router.get('/', postController.findAll);

// Create a new employee
router.post('/', postController.create);

// Retrieve a single post with id
router.get('/:id', postController.findById);

// Update a post with id
router.put('/:id', postController.update);

// Delete a employee with id
router.delete('/:id', postController.delete);

module.exports = router