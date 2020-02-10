// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const actorsController = require('../controllers/actorsController');

router.get('/detail/:id', actorsController.detail);

module.exports = router;