const express = require("express");
const usersController = require("../controllers/usersController");
const multer = require("../middlewares/multerMiddUser");
const validator = require("../middlewares/validatorMidd");
const guestMiddleware = require("../middlewares/guestMiddleware");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/login", usersController.login);
router.post("/login", validator.validationsLogin, usersController.loginProcess);

router.get("/register",guestMiddleware, usersController.register);
router.post("/register", validator.validations,multer.upload.single('image'),usersController.processRegister);

router.get("/profile", authMiddleware, usersController.profile);

router.get("/logout", authMiddleware, usersController.logout);

module.exports = router;
