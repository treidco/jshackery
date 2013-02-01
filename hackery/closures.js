// http://www.javascriptkit.com/javatutors/closures.shtml

// **Example 1
//say hello
function sayHello(name){
	var text = "Hello " + name;
	console.log(text);
}

// **Example 2
//say hello, return, closure
function sayHelloC(name){
	var text = "Hello " + name;
	return function (){
		console.log(text);
	}
}
var hiC = sayHelloC("Jim");

// **Example 3
// more examples
// private variables kept by reference, not copied
function counter(){
	var num = 123;
	var prnum = function(){
		console.log(num);
	}
	num += 1;
	return prnum;
}
var sayNum = counter();

// **Example 4
//globals
function setupGlobals(){
	var num = 456;

	gWriteNum = function(){console.log(num);}
	gIncrementNum = function(){num += 1;}
	gSetNum = function(newNum){num = newNum;}
}
function runGlobalsTests(){
	setupGlobals();
	gWriteNum();
	gIncrementNum();
	gIncrementNum();
	gWriteNum();
	gSetNum(3);
	gWriteNum();
}

// **Example 5
// Defining a function within a list --> Antipattern example
function buildList_AntiPattern(list){
	var result =  [];
	for (var i = list.length - 1; i >= 0; i--) {
		var item = 'item ' + list[i];
		result.push(function(){console.log(item + ' ' + list[i])});
	};
	return result;
}

function testList_AntiPattern(){
	var fnlist = buildList_AntiPattern([1, 2, 3]);
	for (var j = fnlist.length - 1; j >= 0; j--) {
		fnlist[j]();
	};
}

// **Example 5b - fixed Example 5
function buildList(list){
	var result =  [];
	for (var i = list.length - 1; i >= 0; i--) {
		var item = 'item ' + list[i];
		result.push(function(itemX, iX){
			console.log(itemX + ' ' + list[iX])
		}.bind(this, item, i));
	};
	return result;
}

function testList(){
	var fnlist = buildList([1, 2, 3]);
	for (var j = fnlist.length - 1; j >= 0; j--) {
		fnlist[j]();
	};
}

// **Example 6
function sayAlice() {
	var sayAlice = function (){ console.log(alice) }
	var alice = "Hello Alice";
	return sayAlice;
}

// **Example 7
// multiple function calls create 

sayHello("world"); // **Example 1
//hiC(); // **Example 2
//sayNum() // **Example 3
//runGlobalsTests(); // **Example 4
//testList_AntiPattern(); // **Example 5
//testList(); // **Example 5b
//sayAlice()(); // **Example 6
