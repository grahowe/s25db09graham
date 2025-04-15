var express = require('express');
const instrument_controllers = require('../controllers/instruments');
var router = express.Router();

router.get('/instruments', instrument_controllers.instrument_list);

router.get('/delete', instrument_controllers.instrument_delete_Page);
router.get('/update', instrument_controllers.instrument_update_Page);
router.get('/create', instrument_controllers.instrument_create_Page);
router.get('/detail', instrument_controllers.instrument_view_one_Page);
router.get('/instruments/:id', instrument_controllers.instrument_detail);
router.post('/instruments/:id', instrument_controllers.instrument_create_post);
router.put('/instruments/:id', instrument_controllers.instrument_update_put);

module.exports = router;
