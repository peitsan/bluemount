var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Reminder = new Schema({
	content: {
		type: String,
		required: true
	},
	date: {
		type: String,
		required: true
	}
}, { collection: 'reminder' });

module.exports = Reminder;