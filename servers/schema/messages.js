const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Messages = new Schema({
	message: {
		type: String, 
		required: true
	},
}, { collection: 'messages' });

module.exports = Messages;