const express = require('express');
const router = express.Router();
const comicController = require('../controllers/comicController');

// Route to get all comics
router.get('/', comicController.getComics);

// Route to create a new comic
router.post('/', comicController.createComic);

// Route to get a comic by ID
router.get('/:id', comicController.getComicById);

// Route to update a comic
router.put('/:id', comicController.updateComic);

// Route to delete a comic
router.delete('/:id', comicController.deleteComic);

module.exports = router;
