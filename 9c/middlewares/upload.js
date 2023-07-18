const multer = require("multer");
const path = require("path");
const { basedir } = global;

const tempDir = path.join(basedir, "temp");

const multerConfig = multer.diskStorage({
  destinatin: tempDir,
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = { Storage: multerConfig };

module.exports = upload;