import jsbridge from './jsbridge'
import device from './device'

export default {
    APP_KEY: 'a1de79e04e95321005cf493fc14cdf0bd0b53be8',

    config(config) {
        this.APP_KEY = config.appKey;
    },

    upload(err, options) {
        this.getDeviceToken((deviceToken) => {
            this.doSend(deviceToken, err, options);
        })
    },

    getDeviceToken(callback) {
        jsbridge.getData({
            type: 'deviceInfo'
        }, function(data) {
            let deviceToken = data.deviceToken || 'devicetoken-' + new Date().getTime()
            callback(data.deviceToken);
        });
    },

    doSend(deviceToken, err, options) {
        try {
            let date = new Date()
            let baseUrl = 'https://ingrach.icity24.cn/i?'
            baseUrl += 'app_key=' + this.APP_KEY + '&'
            baseUrl += 'timestamp=' + date.getTime() + '&'
            baseUrl += 'hour=' + date.getHours() + '&dow=' + date.getDay() + '&tz=480&'
            baseUrl += 'device_id=' + deviceToken + '&'
            baseUrl += 'crash='
            let crash = {
                _os: device.getOSType(),
                _app_version: jsbridge.getVersion(),
                _error: JSON.stringify({
                    err_url: options ? options.url : '',
                    err: err
                })
            }
            $.ajax({
                async: true,
                type: 'GET',
                url: baseUrl + JSON.stringify(crash),
                success: function(data) {},
                error: function(err) {}
            });
        } catch(err) {}
    }
}