var express = require('express');
var router = express.Router();
var formidable = require('formidable');
var path = require('path');

const UPLOAD_DIR = path.join(__dirname, '../public/uploaded/');

// API calls
router.get('/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});
router.post('/world', (req, res) => {
  console.log(req.body);
  res.send({
    message: `This is what you sent me: ${req.body.post}`
  });
});

router.post('/v1/upload', (req, res) => {
  const form = new formidable.IncomingForm();
  const files = [];
  const fields = [];

  form.on('fileBegin', function (name, file) {
    file.path = `${UPLOAD_DIR}${file.name}`;
  });

  form.on('file', function(field, file) {
    console.log("incoming file: " + file.name);
    const file_url = '/uploaded/' + file.name;
    files.push({file_url, file});
  })
  form.on('end', function() {
    console.log('done');
    res.send({
      totalFiles: files.length,
      files: files,
    })
  });
  form.parse(req);
});
module.exports = router;
