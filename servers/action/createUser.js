var express = require('express');
var router = express.Router();
var Users = require('../models/users')

router.post('/createUser', (req, res, next) => {
	let newItem = req.body;
	Users.create(newItem, (err) => {
		if (err) {
			console.log("创建用户失败！");
			throw Error(err)
		}else {
			console.log("创建用户成功！")
			Users.find({}, (err, users) => {
				if (err) {
					console.log("查询失败！");
					throw Error(err)
				}else {
					console.log(users);
					res.json(users);
				}
			});
		}
	})
})

module.exports = router;
