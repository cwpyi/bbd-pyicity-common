import url from './url'
import trace from './trace'

/**
 * 埋点并跳转到渠道推广下载页面
 * @param eventName
 */
const goToDownloadPage = (eventName)=>{
    setTimeout(()=>{
        window.location.href = "/icity/apps/try/template/download/index.html?code="
            + (url.queryString("code") || '000000')
            + "&userFromType=" + url.queryString("userFromType")
            + "&userFromMark=" + url.queryString("userFromMark");
    },200);
    if(eventName){
        trace.event(eventName);
    }
};

export default {
    goToDownloadPage
}
