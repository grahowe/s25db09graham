var express = require('express');
const instrument_controllers = require('../controllers/instruments');
var router = express.Router();

router.get('/instruments/:id', instrument_controllers.instrument_detail);
router.post('/instruments/:id', instrument_controllers.instrument_create_post);
router.put('/instruments/:id', instrument_controllers.instrument_update_put);

module.exports = router;
