// sql”Ôæ‰
var sqlMap = {
    // ”√ªß
    channel:{
        list:'select * from channel',
        num:'select a.title,a.publish_time,b.channel_id ,d.file_id,c.image_src_url from object_detail a, channel_object_rel b, object_images_rel c, image d where a.id = b.object_id and c.object_id=b.object_id and d.id=c.image_id and channel_id=? limit 0,10'
    }
}
module.exports = sqlMap;
