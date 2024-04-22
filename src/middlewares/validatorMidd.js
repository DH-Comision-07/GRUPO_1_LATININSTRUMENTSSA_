const {body} = require('express-validator');
const validations = [
body('name').notEmpty().withMessage('escribi un nombre'),
body('email').notEmpty().withMessage('escribi un email'),
body('password').notEmpty().withMessage('escribi un pass'),
];


module.exports = {validations:validations};