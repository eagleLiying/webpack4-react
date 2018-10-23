var express = require('express');
var router = express.Router();
var Messages = require('../models/messages')

// 添加todo
router.get('/getMessages', (req, res) => {
    const id = req.body.id;
    const param = {
        "_id": ObjectId(id)
    }
    Messages.find(param, (err, message) => {
        if (err) {
            console.log("查询失败！");
            throw Error(error);
        }else {
            console.log("查询成功！");
            res.json(message);
        }
    });
})

module.exports = router;
