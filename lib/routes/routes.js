const express = require('express');
const router = express.Router();
const multer = require('multer');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, (file.originalname = file.originalname));
  },
});

const upload = multer({ storage: storage });

router.post('/upload', upload.single('file'), function (req, res, next) {
  console.log(req.file);
  console.log(req.body);
  res.redirect('/');
  res.end();
});

module.exports = router;
