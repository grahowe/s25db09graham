var express = require('express');
const instrument_controllers = require('../controllers/instruments');
var router = express.Router();

const secured = (req, res, next) => {
    if(req.user){
        return next();
    }
    res.redirect("/login");
}

router.get('/', instrument_controllers.instrument_view_all_Page);

router.get('/create', instrument_controllers.instrument_create_Page);
router.get('/detail', instrument_controllers.instrument_detail); // To view instrument details
router.get('/instruments/delete/:id', secured, instrument_controllers.instrument_delete_Page); // To delete an instrument
router.get('/instruments/update/:id', secured, instrument_controllers.instrument_update_Page); // To update an instrument
router.get('/instruments/detail/:id', instrument_controllers.instrument_detail)
router.post('/create', instrument_controllers.instrument_create_post); // To create an instrument

router.delete('/instruments/delete/:id', instrument_controllers.instrument_delete_Page); // Delete specific instrument

module.exports = router;
