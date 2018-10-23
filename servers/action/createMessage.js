var express = require('express');
var router = express.Router();
var Messages = require('../models/messages')

router.post('/createMessage', (req, res, next) => {
	let newItem = req.body;
	Messages.create(newItem, (err) => {
		if (err) {
			console.log("创建消息失败！");
			throw Error(err)
		}else {
			console.log("创建消息成功！")
			Messages.find({}, (err, todoList) => {
				if (err) {
					console.log("查询失败！");
					throw Error(err)
				}else {
					console.log(todoList);
					res.json(todoList);
				}
			});
		}
	})
})

module.exports = router;
