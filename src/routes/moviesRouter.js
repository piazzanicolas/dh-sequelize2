// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const moviesController = require('../controllers/moviesController');

router.get('/', moviesController.root);

router.get('/detail/:id', moviesController.detail);

router.get('/new', moviesController.news);

router.get('/recommended', moviesController.recommend);

router.get('/search', moviesController.search);

router.get('/create', moviesController.create);
router.post('/create', moviesController.save);

router.get('/edit/:id',  moviesController.edit);
router.patch('/edit/:id',  moviesController.update);

router.delete('/:id', moviesController.destroy);

module.exports = router;