import './css/show.css'

import url from '../core/url'
import log from '../core/log'
import device from '../core/device'
import iajax from '../core/iajax'
import imock from '../core/imock'
import gps from '../core/gps'
import json from '../core/json'
import ibus from '../core/ibus'
import time from '../core/time'
import app from '../core/app'
import timercb from '../core/assist/timercb'

import loading from '../core/loading'
import toast from '../core/toast'
import iempty from '../core/iempty'
import photopicker from '../core/photopicker'
import authui from '../core/authui'
import loginui from '../core/loginui'

import portingApp from '../porting/app'
import encrypt from '../core/encrypt'
import secret from '../core/secret'
import secretopen from '../core/secretopen'
import debug from '../core/debug'
import trace from '../core/trace'
import error from '../core/error'

$(function() {
    let result = encrypt.encode("15069195578");
    console.log(result);
    console.log(encrypt.decode(result));

    log.on(true);
    var type = url.queryString('type');
    switch(parseInt(type)) {
        case 0:
        // loading.show();
        toast.show("网络加载异常");
        break;
        case 2:
        iempty.show("数据为空");
        break;
        case 3:
        photopicker.show(function(type) {
            log.d("type="+type);
        });
        break;
        case 4:
        authui.show(function() {
            log.d("authui click");
        });
        setTimeout(() => {
            authui.hide();
        }, 10000);
        break;
        case 5:
        loginui.show(function() {
            log.d("loginui click");
        });
        break;
        case 6:
        app.openICityApp();
        break;
        case 7:
            debug.send("Test Hello World");
        break;
        case 8:
            iajax.http({
                url: 'http://www.icity24.com'
            }, (data)=>{

            })
        break;
        case 9:
            let edata = secretopen.aesEncrypt(JSON.stringify({
                appId: '60PzvZkP', //COpfek3e、60PzvZkP
                idCard: '371425199009280075',
                tel: '17852825103',
                name: '孟珂'
            }));
            console.log("<<<<<<<<<", edata);
            console.log("<<<<", secretopen.aesDecrypt('d93c9e08d37779c45c721af504dbba7376d7382cf589a3d8f73424365e25e71b1b797982fcb7e28f4a76d09eb7bd8b3e310d7f95b641e2ca166fd7976bdb2fd051fb70a3a979c87a812c14fb53eaa77eceeb5e6ff0180a2c0446a1da75adbcb0'))
            let s = new secret()
            let data = s.aesEncrypt(JSON.stringify({
                appId: 'COpfek3e',
                idCard: '371425199009280075',
                mobilePhone: '17852825103',
                name: '孟珂'
            }))
            console.log('>>>>>>>>>', data)
            console.log("?????????", s.aesDecrypt('e54396f51b1c5a5f30210557195819105683a02abf06f0caf5a13851b295a450e61c4e0e86afb2e0ba6fb2e964c0ca4945402d1e380488d73b524440e26f073ae8cce1a1228d92a3853fecf423313bf8e12b151e6dcf8126b1810356715fa86f74a08141211dfb22efd0e602644458ee'))
        break;
        case 10:
            trace.install('social')
            trace.startPage('home')
            trace.event('支付', { id: 'Hello World' })
            setTimeout(() => {
                trace.endPage('home', {name:'测试'})
            }, 5000);
        break;
        case 11:
            error.upload({
                data: '111'
            });
        break;
    }
})