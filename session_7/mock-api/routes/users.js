var express = require('express');
var router = express.Router();

const RESPONSE_1 = {
  "one":"test",
  "items": [
    {"id":1, "name":"item one", "description": "description of item one"},
    {"id":2, "name":"item two", "description": "description of item two"},
    {"id":3, "name":"item three", "description": "description of item three"},
  ],
  "three": {
    "three.1": "test string",
    "number": 3,
  },
};

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(RESPONSE_1);
});

router.post('/', function(req, res, next) {
  console.log("Llegan datoooos de : " + req.connection.remoteAddress);
  console.log("DATOS : " + JSON.stringify(req.body));
  const info = {};
  Object.keys(req.body).map ( key => {
		info [key] = req.body[key]
  })
	const item = {
		id: [req.connection.remoteAddress],
		name: JSON.stringify(info),
	}
RESPONSE_1.items.push(item);
  res.end();
});

module.exports = router;
