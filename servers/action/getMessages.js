var express = require('express');
var router = express.Router();
var Messages = require('../models/messages')

router.get('/getMessages', (req, res) => {
    Messages.find({}, (err, message) => {
        if (err) {
            console.log("列表查询失败！");
            throw Error(error);
        }else {
            console.log("列表查询成功！");
            res.json(message);
        }
    });
})

module.exports = router;
