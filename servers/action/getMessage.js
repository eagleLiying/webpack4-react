var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var Messages = require('../models/messages')

router.post('/getMessage', (req, res) => {
    const id = req.body.id;
    const param = {
        "_id": mongoose.Types.ObjectId(id)
    }
    Messages.find(param, (err, message) => {
        if (err) {
            console.log("查询单个消息失败！");
            throw Error(err);
        }else {
            console.log("查询单个消息成功！", message);
            res.json(message[0]);
        }
    });
})

module.exports = router;
