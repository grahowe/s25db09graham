var express = require('express');
const instrument_controllers = require('../controllers/instruments');
var router = express.Router();

router.get('/', instrument_controllers.instrument_view_all_Page);

module.exports = router;
