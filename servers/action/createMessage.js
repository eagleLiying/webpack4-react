var express = require('express');
var router = express.Router();
var Messages = require('../models/messages')

// 添加todo
router.post('/addMessages', (req, res, next) => {
    console.log("我进来了")
	let newItem = req.body;
	Messages.create(newItem, (err) => {
		if (err) {
			console.log(err);
		}else {
			Messages.find({}, (err, todoList) => {
				if (err) {
					console.log(err);
				}else {
					res.json(todoList);
				}
			});
		}
	})
})

module.exports = router;
