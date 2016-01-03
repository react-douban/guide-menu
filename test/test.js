var React = require("react");
var ReactDom = require("react-dom")
var GuideMenuApp = React.createFactory(require("../index"));

var guideMenu = [
	{"key": "home", "name": "首页", "href": "/", "active": true},
	{"key": "bookRepo", "name": "书库列表", "href": "/bookRepo"},
	{"key": "myInfo", "name": "我的信息", "href": "/my/info"},
	{"key": "mySecurity", "name": "我的安全", "href": "/my/security"},
	{"key": "mybookRepo", "name": "我的书库", "href": "/my/bookRepo"}
];

var markup = ReactDom.renderToString(
	GuideMenuApp({
		guideMenu: guideMenu 
	})
);

console.log(markup);