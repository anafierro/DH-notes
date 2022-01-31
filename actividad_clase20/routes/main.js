const express = require('express');
const mainController = require('../controllers/mainController');

const router = express.Router();

router.get('/', mainController.home);

router.get('/detalle/:id?', mainController.detalle);

module.exports = router;