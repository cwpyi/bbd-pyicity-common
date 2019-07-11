import iajax from './iajax'

export default {

    /**
     * 发送打印的调试信息
     */
    send: function(domain, message) {
        iajax.http({
            url: domain + '/icity/micro/app/core/trace',
            data: {
                msg: message
            }
        }, function(data){}, function(err){
            return true;
        })
    },

    /**
     * 是否禁止走客户端网络请求
     */
    isForbidNative: function() {
        var state = sessionStorage.getItem('isForbidNative');
        return state == 1;
    }

}