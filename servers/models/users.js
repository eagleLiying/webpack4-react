const mongoose = require('mongoose');
const UsersSchema = require('../schema/users');
const UsersBox = mongoose.model('UsersBox', UsersSchema);

module.exports = UsersBox;