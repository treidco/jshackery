var Q = require("q");

function promiseMeSomething(){
	console.log("hello");
}

var prom = promiseMeSomething()
.then(function (value){
	console.log(value);
}, function (reason){
	console.log(reason);
})