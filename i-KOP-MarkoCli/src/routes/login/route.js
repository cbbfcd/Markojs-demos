/*
* @Author: 28906
* @Date:   2017-10-20 15:10:52
* @Last Modified by:   28906
* @Last Modified time: 2017-10-20 15:24:21
* @Description: ''
*/

const temp = require('./index.marko');

exports.path = "/login";

exports.handler = (input, out)=>{
	temp.render({}, out);
}