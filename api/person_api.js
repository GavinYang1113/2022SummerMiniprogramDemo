import axios from "@/api/https"; // 导入http中创建的axios实例
import base from "@/api/base";

const person_api = {
	getIdentityStr(params) {
		return axios.post(`${base.baseURL}/test/`, params);
	},

}


export default person_api;
