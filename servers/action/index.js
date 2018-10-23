const createMessage = require('./createMessage');
const getMessages = require('./getMessages');

const api = [
    // post
    createMessage,

    // get
    getMessages,
]

module.exports = api;