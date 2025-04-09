var Instrument = require('../models/instruments');

exports.instrument_list = function(req, res) {
	res.send('NOT IMPLEMENTED: Instrument list');
};

exports.instrument_detail = function(req, res) {
	res.send('NOT IMPLEMENTED: Instrument detail: ' + req.params.id);
};

exports.instrument_create_post = async function(req, res) {
	console.log(req.body);
	let document = new Instrument();

	document.name = req.body.name;
	document.type = req.body.type;
	document.year = req.body.year;

	try {
		let result = await document.save();
		res.send(result);
	}
	catch(err) {
		res.status(500);
		res.send(`{"error": ${err}}`);
	}
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
