const { validationResult } = require('express-validator');
const userService = {
    validateOne: (fromUser) => {
        const resultValidation = validationResult(fromUser);
        if (resultValidation.errors.length > 0) {
            return  {
                errors: resultValidation.mapped(),
                oldData: fromUser.body
            }
        }

    }    
};

module.exports = userService