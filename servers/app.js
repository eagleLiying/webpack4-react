// 引入模块
var express = require('express');
var path = require('path');
var ejs = require('ejs');
var mongoose = require('mongoose')
var routes = require('./action/index')
// https://github.com/expressjs/cors
var cors = require('cors')
var bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost:27017/messages', () => {
    console.log("数据库 Messages 连接成功🎉 🎉 🎉 🎉 🎉");
})


var app = express();

// 跨域
app.use(cors())

// body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// api
app.use("/api", routes);

// 新增接口路由
// app.get('/api/:module', function (req, res, next) {
//     var c_path = req.params.module;
//     var Action = require('./action/' + c_path);
//     Action.execute(req, res);
// });

 
// 对所有(/)URL或路由返回index.html 
app.get('/', function (req, res) {
    res.render('index');
});
 
// 设置views路径和模板
app.set('views', '../src/');
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);
 
// app.use配置
// app.use('/client/static', express.static(path.join(__dirname, 'client/static')));
 
// 启动一个服务，监听从8888端口进入的所有连接请求
var server = app.listen(8888, function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log('==============================');
    console.log('监听端口号:', port);
}); 
