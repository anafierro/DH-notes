const { body } = require('express-validator');

const validations = [
    body('name').notEmpty().withMessage('Tienes que escribir un nombre'),
    body('color').notEmpty().withMessage('Tienes que elegir un color'),
    body('email').notEmpty().withMessage('Tienes que escribir un correo electrónico'),
    body('age').isNumeric().withMessage('Tienes que escribir un número')
]

module.exports = validations; 