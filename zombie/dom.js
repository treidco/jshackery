var Browser = require('zombie');
var assert = require('assert');

browser = new Browser();

browser.on("error", function(error){
	console.error(error);
});

browser.visit("http://www.google.com/", function(e, browser){
	console.log("Loaded: " + browser.text("title"));
	console.log("HTTP status: " + browser.statusCode);
	console.log("HTTP errors: " + browser.errors);

	console.log("HTML: " + browser.queryAll("#gbqfba"));
	
});