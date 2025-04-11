var express = require('express');
const instrument_controllers = require('../controllers/instruments');
var router = express.Router();

router.get('/instruments/:id', instrument_controllers.instrument_detail);

module.exports = router;
