const { validationResult } = require('express-validator');
const userService = {
    validateOne: (body, res) => {
        const resultValidation = validationResult(body);
        if (resultValidation.errors.length > 0) {
            return  {
                errors: resultValidation.mapped()
            }
        }

    }
};

module.exports = userService