const mongoose = require('mongoose');
const MessagesSchema = require('../schema/messages');
const MessagesBox = mongoose.model('MessagesBox', MessagesSchema);

module.exports = MessagesBox;