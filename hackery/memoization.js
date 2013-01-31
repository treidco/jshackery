var sleep = require("sleep"),
    output = " else",
    cache = [];

var doSomething = function (data) {
	
	if (cache[data]) {
	    return cache[data];	
	}

	//expensive operation
	sleep.sleep(1);

	return cache[data] = data + output;

    };

var test = function (input) {
	
	var start = new Date().getTime(),
	    ret,
	    end,
	    time;

	ret = doSomething(input);
	
	end = new Date().getTime();
	time = end - start;
	console.log("Time: " + time + ", Value: " + ret);

    };

test("something"); //Time: 1001, Value: something else
test("other"); //Time: 1001, Value: other else
test("something"); //Time: 0, Value: something else
