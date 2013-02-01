var Browser = require('zombie');
var assert = require('assert');

browser = new Browser();

browser.on("error", function(error){
	console.error(error);
});

browser.visit("http://localhost:3001/", function(e, browser){
	console.log("HTTP status: " + browser.statusCode);
	console.log("HTTP errors: " + browser.errors);
});