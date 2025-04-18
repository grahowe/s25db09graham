var express = require('express');
const instrument_controllers = require('../controllers/instruments');
var router = express.Router();

router.get('/', instrument_controllers.instrument_view_all_Page);

router.get('/delete', instrument_controllers.instrument_delete_Page);
router.get('/update', instrument_controllers.instrument_update_Page);
router.get('/create', instrument_controllers.instrument_create_Page);
router.get('/detail', instrument_controllers.instrument_view_one_Page);

module.exports = router;
