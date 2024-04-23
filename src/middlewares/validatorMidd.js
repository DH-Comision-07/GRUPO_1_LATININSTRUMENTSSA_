const { body } = require('express-validator');
const path =require('path')
const validations = [
    body('name').notEmpty().withMessage('Escribe un nombre válido'),
    body('email').notEmpty().withMessage('Escribe un email').bail().isEmail().withMessage('Debes escribir un formato de correo válido'),
    body('password').notEmpty().withMessage('Escribe un una contraseña válida'),
    body('image').custom((value, { req }) => {
        let file = req.file;
        let acceptedExtensions = ['.jpg', '.png', '.gif'];

        if (!file) {
            throw new Error('Tienes que subir una imagen')
        } else {
            let fileExtension = path.extname(file.originalname)
            if (!acceptedExtensions.includes(fileExtension)) {
                throw new Error(`Las extensiones de imagen eprmitidas son ${acceptedExtensions.join(', ')}`)
            }
        }
        return true;
    })
];


module.exports = { validations: validations };