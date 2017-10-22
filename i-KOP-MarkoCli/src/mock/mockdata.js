/*
* @Author: 28906
* @Date:   2017-10-20 16:34:35
* @Last Modified by:   28906
* @Last Modified time: 2017-10-20 17:31:52
* @Description: mock数据
*/
const Mock = require('mockjs');
const isDEV = process.env.NODE_ENV === 'development';

if(isDEV){
	// login
	Mock.mock('/login', 'post', function(options){
		// get params
		let param = JSON.parse(options.body)

		if(param){
			return param.user === 'admin' && param.pwd === 'admin' ? {
				success: true,
				user: 'admin',
				message: '登录成功'
			} : {
				success: false,
				message:'请检查输入'
			}
		}

		return {
			success: false,
			message:'登录失败!'
		}
	})
}

module.exports = Mock