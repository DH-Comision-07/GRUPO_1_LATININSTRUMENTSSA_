const express = require("express");
const usersController= require("../controllers/usersController");
const multer = require('../middlewares/multerMiddUser');
const router = express.Router();
const validator = require('../middlewares/validatorMidd');

router.get("/login", usersController.login);
router.post("/login", usersController.login);
router.get("/register", usersController.register);
router.post("/register", multer.upload.single('image'),validator.validations,usersController.processRegister);

module.exports = router;
