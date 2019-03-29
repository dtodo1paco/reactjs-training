var express = require('express');
var router = express.Router();

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

module.exports = router;
