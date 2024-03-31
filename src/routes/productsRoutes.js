const express = require("express");
const multerMidd = require("../middlewares/multerMidd");
const productsController = require("../controllers/productsController");
const router = express.Router();

router.get("/detail/:id", productsController.Detail);
router.get("/create", productsController.Create);
router.post("/create", multerMidd.upload.single("imagen"), productsController.Store);
router.get("/edit/:id", productsController.Edit);
router.put("/edit/:id", productsController.Update);

module.exports = router;
