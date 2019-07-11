import $ from 'n-zepto'
import './jsbridge'
import log from './log'
import toast from './toast'
import loading from './loading'
import device from './device'
import debug from './debug'
import error from './error'

export default {
	/**
	 * http
	 */
	http: function(param, successCB, failureCB, isHideLoading) {
		var user = iCityBridge.getUserInfo();
		var header = {
			access_token: user.token,
			version: user.version,
			build: user.build,
			cityCode: user.city
		};

		if(param.headers){
			this.merge(header, param.headers);
		}

		var flag = (param.options && param.options.isHideLoading) || isHideLoading;
		var isSupportHttp = iCityBridge.isICity() && user.version >= '3.2.0';
		var isOfficialSupport = user.version >= '3.2.1';
		if(isSupportHttp && (param.useCache || isOfficialSupport) 
			&& !param.forbidNative && !debug.isForbidNative()) {
			this.primaryNativeCache(param, successCB, failureCB, flag);
		} else {
			this.primaryHttp(header, param, successCB, failureCB, flag);
		}
	},

	/**
	 * JS网络请求接口
	 */
	primaryHttp: function(header, params, successCB, failureCB, isHideLoading) {
		log.d("ajax request url=" + params.url);
		if(!isHideLoading) {
			this.showLoading();
		}

		console.log("request startTime: ", new Date().toLocaleString());
		var ctx = this;
		$.ajax({
			async: true,
			type: params.type?params.type:'post',
            url: params.url,
            timeout: params.timeout,
            headers: header,
			dataType: params.dataType?params.dataType:'json',
			data: params.data?params.data:'',
			success: function(data) {
				console.log("request endTime: ", new Date().toLocaleString());
                if(!isHideLoading) {
                    ctx.hideLoading();
                }
				ctx.handleLogicState(params, data, successCB, failureCB);
			},
			error: function(err, textStatus, errorThrown) {
				console.log("request endTime: ", new Date().toLocaleString());
                if(!isHideLoading) {
                    ctx.hideLoading();
                }
                ctx.handleError(err, failureCB);
                console.log('>>>>>>', textStatus, errorThrown)
                error.upload({ status: err.status, textStatus: textStatus, thrown: errorThrown }, { url: params.url });
			}
		});
	},

	/**
	 * 客户端网络请求接口
	 */
	primaryNativeCache: function(params, successCB, failureCB, isHideLoading) {
		log.print(">>>>>>>>>>>>>>>>>>>>>native request url=" + params.url);
		if(!isHideLoading) {
			this.showLoading();
		}
		
		console.log(">>>>>>>>>>>>>>>>>>>>>request startTime: ", new Date().toLocaleString());
		log.print(params);
		var ctx = this;
		iCityBridge.http({
			url: params.url,
			type: params.type ? params.type : 'post',
			headers: params.headers,
			body: params.data,
			options: params.options,
			useCache: params.useCache
		}, function(data) {
			console.log(">>>>>>>>>>>>>>>>>>>>>request endTime: ", new Date().toLocaleString());
            log.print(data);
            if(!isHideLoading) {
                ctx.hideLoading();
            }
			ctx.handleLogicState(params, data, successCB, failureCB);
		}, function(err) {
			console.log(">>>>>>>>>>>>>>>>>>>>>request endTime: ", new Date().toLocaleString());
            log.print(err);
            if(!isHideLoading) {
                ctx.hideLoading();
            }
            ctx.handleError(err, failureCB);
            error.upload(err, { url: params.url });
		});
	},

	/**
	 * 处理逻辑状态
	 */
	handleLogicState: function(params, data, successCB, failureCB) {
		if(data.state == 1 || data.code == '0000') {
			data.result = data.result || data.data;
			successCB(data);
			return ;
		}

		 //兼容老平台数据格式
		data.error = data.error || data.message;

		if(failureCB && failureCB(data)) {
			return ;
		}

		if(params.options && params.options.useMsgToast) {
			toast.show(data.message);
			return ;
		}

		if(icityConfig) {
			var options = params.options ? params.options : undefined;
			var errorMsg = icityConfig.getErrorMsg(data.code, options);
			toast.show(errorMsg);
		} else {
			toast.show("错误码超出范围，我们正在紧急修复～");
		}
	},

	/**
	 * 处理网络请求异常
	 */
	handleError: function(error, failureCB) {
		if(failureCB && failureCB(error)) {
			return ;
		}
		if(error) {
			var errorMsg = icityConfig.getHttpErrorMsg(error.status);
			toast.show(errorMsg);
		}
	},

	/**
	 * show loading
	 */
	showLoading: function() {
		if(iCityBridge.isSupportNativeLoading()) {
			iCityBridge.showLoading();
		} else {
			loading.show();
		}
	},

	/**
	 * hide loading
	 */
	hideLoading: function() {
		if(iCityBridge.isSupportNativeLoading()) {
			iCityBridge.hideLoading();
		} else {
			loading.hide();
		}
	},

	/**
	 * sort
	 */
	charSort: function(obj) {
		var tmp={};
		Object.keys(obj).sort().forEach(function(k){
			tmp[k]=obj[k]
		});
		return tmp;
	},

	merge: function(o, n) {
		if(Object && Object.assign) {
			Object.assign(o, n);
		} else {
			for (var p in n){
				if(n.hasOwnProperty(p) && (!o.hasOwnProperty(p) ))
					o[p]=n[p];
			}
		}
	}
};