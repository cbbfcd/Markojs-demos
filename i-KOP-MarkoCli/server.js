/*
* @Author: 28906
* @Date:   2017-10-09 15:59:56
* @Last Modified by:   28906
* @Last Modified time: 2017-10-16 17:04:41
* @Description: 服务设置
*/
require("./project").server({
  httpPort: process.env.PORT || 8080 
});
