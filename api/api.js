var models = require('../conf/db');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var $sql = require('../sql/sqlMap');
// 连接数据库
var conn = mysql.createConnection(models.mysql);
conn.connect();
var jsonWrite = function(res, ret) {
    if(typeof ret === 'undefined') {
        res.json({
            code: '1',
            msg: '操作失败'
        });
    } else {
        res.json(ret);
    }
};

// 增加频道接口
router.post('/channel/list', (req, res) => {
    var strChannelList = $sql.channel.list;
    conn.query(strChannelList, function(err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            jsonWrite(res, result);
        }
    })
});
// 增加频道接口
router.post('/channel/:id' , (req, res) => {
    var strChannelId = $sql.channel.num;
    param = req.body.id;
    //console.log(param);
    var num=0;
    conn.query(strChannelId, [param,num], function(err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            jsonWrite(res, result);
            //console.log(1);
        }
    })
});
// 增加静态内容详情接口
router.post('/static/detail/:id' , (req, res) => {
    var strStaticDetail = $sql.channel.num;
    param = req.body.id;
    //console.log(param);
    conn.query(strStaticDetail, [param], function(err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            jsonWrite(res, result);
            console.log(1);
        }
    })
});
module.exports = router;
