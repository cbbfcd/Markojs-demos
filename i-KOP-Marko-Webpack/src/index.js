/*
* @Author: 28906
* @Date:   2017-10-21 13:33:26
* @Last Modified by:   28906
* @Last Modified time: 2017-10-21 21:59:45
* @Description: ''
*/

import renderComps from './rutes/rendercomponents.js';


let routes = {
	'/': renderComps.renderHome,
	'/login': renderComps.renderLogin
}

let config = {
	notfound: renderComps.render404,
	async: true,
	strict: false
}

let router = new Router(routes).init();



