// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const moviesController = require('../controllers/moviesController');

/* GET - home page. */
router.get('/', moviesController.root);

router.get('/detail/:id', moviesController.detail);

router.get('/new', moviesController.news);

router.get('/recommended', moviesController.recommend);

router.get('/search', moviesController.search);

module.exports = router;