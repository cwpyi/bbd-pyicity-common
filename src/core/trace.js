import jsbridge from './jsbridge'

export default {
    TRACE_DOMAIN: 'https://ingrach.icity24.cn/',
    APP_KEY: 'a1de79e04e95321005cf493fc14cdf0bd0b53be8',
    ACTIVITY_KEY: '7c741d9aa16932bef024a5425c76dd6d1d656555',
    appName: '',
    custId: '',
    cityCode: '',
    completeCallback: undefined,

    config(config) {
        this.APP_KEY = config.appKey;
    },

    init(appName, options) {
        this.install(appName, false, options || {})
    },

    /**
     * 安装
     */
    install(appName, isActivity, options) {
        if(!appName) {
            return ;
        }
        try {
            this.appName = appName ? appName + '_' : '';
            window.Countly = window.Countly || {};
            window.Countly.q = window.Countly.q || [];
            window.Countly.app_key = isActivity === true ? this.ACTIVITY_KEY : this.APP_KEY;
            window.Countly.url = this.TRACE_DOMAIN;
            
            var cly = document.createElement('script'); 
            cly.type = 'text/javascript'; 
            cly.async = true;
            cly.src = 'https://cdn.jsdelivr.net/npm/countly-sdk-web@latest/lib/countly.min.js';
            cly.onload = function(){
                window.Countly.init()
            };
            var s = document.getElementsByTagName('script')[0]; 
            s.parentNode.insertBefore(cly, s);

            this.cityCode = jsbridge.getCityCode();
            jsbridge.getOpenId((data)=>{
                this.custId = data.data.openId;
                options.ready && options.ready()
            })
        } catch(err) {}
    },

    /**
     * 页面开始
     */
    startPage(page) {
        if(Countly && page) {
            try {
                Countly.q.push(['start_event', this.appName+'pagetime_'+page]);
            } catch(err) {}
        }
    },

    /**
     * 页面结束
     */
    endPage(page, value) {
        if(Countly && page) {
            try {
                Countly.q.push(['end_event', {
                    key: this.appName+'pagetime_'+page,
                    segmentation: value
                }])
            } catch(err) {}
        }
    },

    /**
     * 事件
     * @param {*} key 
     * @param {*} value 
     */
    event(key, value) {
        if(Countly) {
            try {
                Countly.q.push(['add_event', {
                    key: this.appName + 'event_' + key, 
                    segmentation: this.createSegmentation(value)
                }]);
            } catch(err) {}
        }
    },

    createSegmentation(value) {
        let result = {
            _custId: this.custId,
            _cityCode: this.cityCode
        };
        for(let key in value){
            result[key] = value[key];
        }
        return result;
    }
}