// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const genresController = require('../controllers/genresController');

router.get('/detail/:id', genresController.detail);

module.exports = router;