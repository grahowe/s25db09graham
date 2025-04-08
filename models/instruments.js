const mongoose = require("mongoose");
const instrumentSchema = mongoose.Schema({
	name: String,
	type: String,
	year: Number
});

module.exports = mongoose.model("Instrument", instrumentSchema);
