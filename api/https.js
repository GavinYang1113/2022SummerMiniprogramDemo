import Vue from 'vue'
import axios from 'axios'
import base from 'base'
// create an axios instance
const service = axios.create({
	baseURL: base.baseURL, // url = base url + request url
	//withCredentials: true, // send cookies when cross-domain requests 注意：withCredentials和后端配置的cross跨域不可同时使用
	timeout: 6000, // request timeout
	crossDomain: true
})

// 设置post请求头
service.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// request拦截器,在请求之前做一些处理
service.interceptors.request.use(
	config => {
		// if (store.state.token) {
		//     // 给请求头添加user-token
		//     config.headers["user-token"] = store.state.token;
		// }
		// console.log('请求拦截成功')
		return config;
	},
	error => {
		console.log(error); // for debug
		return Promise.reject(error);
	}
);

export default service;
