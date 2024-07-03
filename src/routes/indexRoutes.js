const express = require("express");
const multerMidd = require("../middlewares/multerMidd");
const indexController= require("../controllers/indexController");

const router = express.Router();

router.get("/", multerMidd.upload.single("image"), indexController.home);
router.get("/carrito", indexController.carrito);
router.get("/nosotros", indexController.nosotros);
router.get("/instrumentos", indexController.instrumentos);
router.get("/vinilos", indexController.vinilos);


module.exports = router;
