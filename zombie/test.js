var Browser = require('zombie');
var assert = require('assert');

browser = new Browser();
browser.visit("http://localhost:3001/", function(){
	console.log("Logging: " + browser.text());
});