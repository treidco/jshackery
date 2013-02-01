//function declaration
function callMe(func){
	func();
	console.log("name: " + func.name);
}

//function expressions
callMe(function() {
	console.log("anonymous function");
});

callMe(function something(){
	console.log("named function");
});

var anonfn = function(){
	console.log("another anonymous function");
};
callMe(anonfn);

var namedfn = function namedfn(){
	console.log("another named function");
};
callMe(namedfn);

var myobject = {
	afn: function(){
		console.log("afn");
	},

	fn: function fn(){
		console.log("fn");
	}
};
callMe(myobject.afn);
callMe(myobject.fn);