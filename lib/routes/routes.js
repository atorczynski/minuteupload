const express = require('express');
const router = express.Router();
const multer = require('multer');
const moment = require('moment');
const upload = multer({ limits: { fileSize: 2000000 }, dest: 'uploads/' });
const fs = require('fs-extra');
const { addImage, getImage } = require('../database');

router.post('/upload', upload.single('file'), async (req, res) => {
  if (req.file === undefined) {
    console.log('no file');
    res.redirect('/');
    res.end();
  } else {
    const expireTime = req.body.deleteAfter;
    const newImg = fs.readFileSync(req.file.path);
    const encImg = newImg.toString('base64');

    const newDocument = {
      name: req.file.filename,
      contentType: req.file.mimetype,
      size: req.file.size,
      img: Buffer(encImg, 'base64'),
      expireAt: moment(Date.now()).add(expireTime, 'minutes')._d,
    };

    addImage(newDocument, async (err, result) => {
      if (err) {
        console.log(err);
        res.redirect("/")
      } else {
        await fs.remove(req.file.path, (err) => {
          if (err) {
            console.log(err);
          }
          res.redirect(`/img/${newDocument.name}`);
          res.end();
        });
      }
    });
  }
});

router.get('/img/:id', async (req, res) => {
  const document = await req.params.id;
  await getImage(document, (err, result) => {
    if (result) {
      res.status(200).send(result)
    } else {
      res.status(404)
      res.end()
    }
  })
});

module.exports = router;
