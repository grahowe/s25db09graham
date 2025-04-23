const mongoose = require("mongoose");
const instrumentSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	type: {
		type: String,
		required: true
	},
	year: {
		type: Number,
		min: [500, 'Year must be after 500 AD'],
		max: [2025, 'Year must be before or equal to 2025'],
		required: true
	}
});

module.exports = mongoose.model("Instrument", instrumentSchema);
