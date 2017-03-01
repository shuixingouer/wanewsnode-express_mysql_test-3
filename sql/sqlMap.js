// sql”Ôæ‰
var sqlMap = {
    // ”√ªß
    channel:{
        list:'select * from channel',
        num:'select a.title,a.publish_time,b.object_id,b.channel_id ,d.file_id,c.image_src_url from object_detail a, channel_object_rel b, object_images_rel c, image d where a.id = b.object_id and c.object_id=b.object_id and d.id=c.image_id and channel_id=? limit ?,10'
    },
    static:{
        detail:'select a.*,b.channel_id from object_detail a, channel_object_rel b, where a.id = b.object_id and object_id=?'
    }
}
module.exports = sqlMap;
