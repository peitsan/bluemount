var mongoose = require('mongoose');
var ReminderSchema = require('../interface/reminder');
var ReminderContainer = mongoose.model('ReminderContainer', ReminderSchema);

module.exports = ReminderContainer;