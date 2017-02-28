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
            console.log(result);
        }
    })
});
// 增加频道接口
router.post('/channel', (req, res) => {
    var strChannelId = $sql.channel.num;
    var param = req.query || req.params;
    conn.query(strChannelId, [param.channel_id], function(err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            jsonWrite(res, result);
        }
    })
});
module.exports = router;
