var express = require('express');
var router = express.Router();
var Messages = require('../models/messages')
var Mongoose = require('mongoose');

router.post('/deletMessage', (req, res, next) => {
	const id = req.body.id;
    const param = {
        "_id": Mongoose.Types.ObjectId(id)
    }
	Messages.deleteOne(param, (err) => {
		if (err) {
			console.log("删除单条消息失败！");
			throw Error(err)
		}else {
			console.log("删除单条消息成功！")
			Messages.find({}, (err, messages) => {
				if (err) {
					console.log("查询失败！");
					throw Error(err)
				}else {
					console.log(messages);
					res.json(messages);
				}
			});
		}
	})
})

module.exports = router;
