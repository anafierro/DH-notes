const {check} = require('express-validator');

module.exports = [
    check('email')
    .notEmpty()
    .isEmail()
    .withMessage("Ingresar un email válido")
]