var express = require('express');
var router = express.Router();

//Controller
const usersController = require('../controllers/userController');

//Middlewares
const validations = require('../middlewares/registerMiddleware');

// Formulario de registro
router.get('/register', usersController.register);

// Procesar registro
router.post('/register', validations, usersController.processRegister);

module.exports = router;
