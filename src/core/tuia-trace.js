export default {
    appName: '',

    /**
     * 安装
     */
    install(appName) {
        if (!appName) {
            return;
        }
        this.appName = appName ? appName + '_' : '';

        const cly = document.createElement('script');
        cly.type = 'text/javascript';
        cly.async = true;
        cly.src = '//yun.tuisnake.com/h5-mami/log.js';
        const s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(cly, s);
    },

    /**
     * 事件
     * @param {*} eventData 埋点数据（可选，多用于区分页面中多个埋点）
     * @param {*} callback 成功触发埋点后的回调函数 （可选，多用于页面跳转前，把跳转语句写到回调函数中）
     */
    event(eventData, callback) {
        if (!window.countLog) {
            return
        }
        const _options = {appName: this.appName};
        if (eventData) {
            _options.data = eventData;
        }
        window.countLog.init(function () {
            typeof callback === 'function' && callback()
        }, _options);
    }
}