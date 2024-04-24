const multer = require("multer");
const path = require ('path');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./public/img/users");
    },
    filename: (req, file, cb) => {
        let fileName = `${Date.now()}_img${path.extname(file.originalname)}`
        cb(null, fileName);
    },
});

const upload = multer({ storage: storage });

const multerMiddUser = {
    storage: storage,
    upload: upload,
};

module.exports = multerMiddUser;
