const multer = require("multer");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/img/products");
    },
    filename: (req, file, cb) => {
        cb(null, "img-" + file.originalname);
    },
});

const upload = multer({ storage: storage });

const multerMidd = {
    storage: storage,
    upload: upload,
};

module.exports = multerMidd;
