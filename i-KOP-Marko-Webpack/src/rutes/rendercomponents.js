/*
* @Author: 28906
* @Date:   2017-10-21 20:09:39
* @Last Modified by:   28906
* @Last Modified time: 2017-10-21 21:00:36
* @Description: 要渲染的组件
*/

const website = require('../components/oidc-website/');
const error = require('../components/404/');
const loginPage = require('../components/site-login/');

class renderComp{
	renderHome(){
		document.querySelector('#root').innerHTML = website.renderToString({});
	}

	render404(){
		document.querySelector('#root').innerHTML = error.renderToString({});
	}

	renderLogin(){
		document.querySelector('#root').innerHTML = loginPage.renderToString({});
	}
}

export default new renderComp()


