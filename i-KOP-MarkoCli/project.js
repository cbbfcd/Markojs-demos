/*
* @Author: 28906
* @Date:   2017-10-09 15:59:56
* @Last Modified by:   28906
* @Last Modified time: 2017-10-16 17:11:28
* @Description: 项目设置
*/

// 判断是否是生产环境
const isProduction  = process.env.NODE_ENV === 'production';

module.exports = require("marko-starter").projectConfig({
  name: "xz-oidc",
  version: '1.0.17',
  minify: isProduction,
  minifyCss: isProduction,
  minifyJs: isProduction,
  fingerPrintsEnabled: isProduction
});
