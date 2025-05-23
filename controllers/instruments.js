var Instrument = require('../models/instruments');

exports.instrument_detail = async function(req, res) {
    const id = req.params.id;  // Use `req.params.id` to get the ID from the URL path
    
    console.log("Fetching instrument details for ID:", id);

    try {
        const instrument = await Instrument.findById(id);
        if (instrument) {
            res.render('instrument/detail', { title: 'Instrument Detail', instrument: instrument });
        } else {
            res.status(404).send('Instrument not found');
        }
    } catch (err) {
        console.log(err);
        res.status(500).send('Error retrieving instrument');
    }
};

exports.instrument_create_post = async function(req, res) {
    console.log(req.body);
    let document = new Instrument();

    document.name = req.body.name;
    document.type = req.body.type;
    document.year = Number(req.body.year);

    try {
        let result = await document.save();
        console.log("Created instrument with ID:", result._id); // Log the instrument ID to ensure it's correct
        
        // Redirect using the correct path and instrument ID
        res.redirect(`/resource/instruments/detail/${result._id}`); // Use path instead of query parameter
    }
    catch(err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};



exports.instrument_delete = async function(req,res) {
	console.log("delete" + req.params.id);
	try {
		result = await Instrument.findByIdAndDelete(req.params.id);
		console.log("Removed " + result);
		res.send(result);
	}
	catch(err) {
		res.status(500);
		res.send(`{"error": Error deleting ${err}}`);
	}
};

exports.instrument_update_put = async function(req, res) {
	console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`);
	try {
		let toUpdate = await Instrument.findById(req.params.id);
		if(req.body.name) toUpdate.name = req.body.name;
		if(req.body.type) toUpdate.type = req.body.type;
		if(req.body.year) toUpdate.year = req.body.year;
		let result = await toUpdate.save();
		console.log("Success " + result);
		res.send(result);
		if(req.body.checkboxsale) toUpdate.sale = true;
		else toUpdate.same = false;

	}
	catch(err) {
		res.status(500);
		res.send(`{"error":${err}:Update for id ${req.params.id} failed`);
	}
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

exports.instrument_view_one_Page = async function(req, res) {
	console.log("Single view for id " + req.query.id);
	try {
		result = await Instrument.findById(req.query.id);
		res.render('instrumentdetail', {title: 'Instrument Detail', toShow: result});
	}
	catch(err) {
		res.status(500);
		res.send(`{"error":'${err}'}`);
	}
};

exports.instrument_create_Page = function(req, res) {
	console.log("create view");
	try {
		res.render('instrumentcreate', {title: 'Instrument Create'});
	}
	catch(err) {
		res.status(500);
		res.send(`{'error': '${err}'}`);
	}
};

exports.instrument_update_Page = async function(req, res) {
	console.log("update view for item " + req.query.id);
	try {
		let result = await Instrument.findById(req.query.id);
		res.render('instrumentupdate', {title: 'Instrument Update', toShow: result});
	}
	catch(err) {
		res.status(500);
		res.send(`{'error': '${err}'}`);
	}
};

exports.instrument_delete_Page = async function(req, res) {
	console.log("Delete view for id " + req.query.id)
	try {
		result = await Instrument.findById(req.query.id)
		res.render('instrumentdelete', {title: 'Instrument Delete', toShow: result});
	}
	catch(err) {
		res.status(500);
		res.send(`{'error': '${err}'}`);
	}
};
