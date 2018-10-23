const createMessage = require('./createMessage');
const deleteMessage = require('./deleteMessage');
const getMessages = require('./getMessages');
const getMessage = require('./getMessage');

const api = [
    // post
    createMessage,
    deleteMessage,

    // get
    getMessages,
    getMessage,
]

module.exports = api;