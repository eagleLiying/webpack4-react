var express = require('express');
var router = express.Router();
var Users = require('../models/users')

router.post('/login', (req, res) => {
	let userItem = req.body;
	Users.findOne(userItem, (err, userRes) => {
		if (err) {
			console.log("登录失败！");
			throw Error(err)
		}else {
			const user = userRes;
			if(user && user.id) {
				console.log("登录成功！")
				res.json(userRes);
			}else {
				console.log("没有当前用户！")
				return {
					error: "没有当前用户"
				};
			}
		}
	})
})

module.exports = router;
