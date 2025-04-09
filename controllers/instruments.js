var Instrument = require('../models/instruments');

exports.instrument_list = function(req, res) {
	res.send('NOT IMPLEMENTED: Instrument list');
};

exports.instrument_detail = function(req, res) {
	res.send('NOT IMPLEMENTED: Instrument detail: ' + req.params.id);
};

exports.instrument_create_post = function(req, res) {
	res.send('NOT IMPLEMENTED: Instrument create POST');
};

exports.instrument_delete = function(req,res) {
	res.send('NOT IMPLEMENTED: Costume delete DELETE ' + req.params.id);
};

exports.instrument_update_put = function(req, res) {
	res.send('NOT IMPLEMENTED: Instrument update PUT' + req.params.id);
};

exports.instrument_list = async function(req, res) {
	try {
		theInstruments = await Instrument.find();
		res.send(theInstruments);
	}
	catch(err) {
		res.status(500);
		res.send(`{"error": ${err}}`);
	}
};

exports.instrument_view_all_Page = async function(req, res) {
	try {
		theInstruments = await Instrument.find();
		res.render('instruments', {title: 'Instrument Search Results', results: theInstruments});
	}
	catch(err) {
		res.status(500);
		res.send(`{"error": ${err}}`);
	}
};
