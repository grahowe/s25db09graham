var express = require('express');
var router = express.Router();

/* GET computation result. */
router.get('/', function(req, res, next) {
  let x = Math.random() * 100;
  let y = Math.sqrt(x).toFixed(2);

  res.send(`sqrt applied to ${x.toFixed(2)} is ${y}`);
});

module.exports = router;
