// sql语句
var sqlMap = {
    // 用户
    channel:{
        list:'select * from channel',
        num:'select a.title,a.created_at,b.object_id,b.channel_id ,d.file_id,c.image_src_url from object_detail a, channel_object_rel b, object_images_rel c, image d where a.id = b.object_id and c.object_id=b.object_id and d.id=c.image_id and channel_id=? limit ?,10'
    },
    static:{
        detail:'select a.*,e.channel_name,b.channel_id,c.image_src_url,c.image_id,d.src_file_id from object_detail a, channel_object_rel b, object_images_rel c, image d,channel e where a.id = b.object_id and c.object_id=b.object_id and d.id=c.image_id and e.id=b.channel_id and b.object_id=?'
    }
}
module.exports = sqlMap;
