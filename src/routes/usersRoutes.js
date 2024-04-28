const express = require("express");
const usersController= require("../controllers/usersController");
const multer = require('../middlewares/multerMiddUser');
const router = express.Router();
const validator = require('../middlewares/validatorMidd');
const guestMiddleware = require('../middlewares/guestMiddleware')

router.get("/login", usersController.login);
router.post("/login", validator.validationsLogin,usersController.loginProcess);

router.get("/register",guestMiddleware, usersController.register);
router.post("/register", multer.upload.single('image'),validator.validations,usersController.processRegister);

router.get("/profile", usersController.profile);

module.exports = router;
