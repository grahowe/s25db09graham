var express = require('express');
var router = express.Router();

var api_controller = require('../controllers/api');
var instrument_controller = require('../controllers/instruments');

// GET resource base
router.get('/', api_controller.api);

// POST
router.post('/instruments', instrument_controller.instrument_create_post);

// DELETE
router.delete('/instruments/:id', instrument_controller.instrument_delete);

// PUT
router.put('/instruments/:id', instrument_controller.instrument_update_put);

// GET for only one
router.get('/instruments/:id', instrument_controller.instrument_detail);

// GET for list of all items
router.get('/instruments', instrument_controller.instrument_list);

module.exports = router;
