var express = require('express');
var router = express.Router();
var Messages = require('../models/messages')

// 添加todo
router.post('/createMessage', (req, res, next) => {
    console.log("我进来了")
	let newItem = req.body;
    console.log(newItem)
	Messages.create(newItem, (err) => {
		if (err) {
			console.log("创建失败！");
			throw Error(err)
		}else {
			console.log("创建成功！")
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
