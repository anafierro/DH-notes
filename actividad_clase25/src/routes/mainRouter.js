const express = require('express');
const mainController = require('../controllers/mainController');

const router = express.Router();
const authorized = require('../middlewares/authorized')

router.get('/', mainController.index);

router.get('/js', mainController.js);

router.get('/css', mainController.css);

router.get('/html', mainController.html);

router.get('/admin',authorized, mainController.admin);

module.exports = router;