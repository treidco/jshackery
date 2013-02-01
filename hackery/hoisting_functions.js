//ALERT - antipattern

function foo(){
	console.log("global foo");
}

function bar(){
	console.log("global bar");
}

function hoistMe(){
	console.log(typeof foo);
	console.log(typeof bar);

	foo();
	// bar(); //undefined is not a function

	//function declaration gets hoisted
	function foo(){
		console.log("local foo");
	}

	//only the declaration of bar is hoisted, 
	//it is still defined later... (still overrides global)
	var bar = function(){
		console.log("local bar");
	}
}

hoistMe();