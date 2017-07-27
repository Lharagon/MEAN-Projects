function runningLogger(){
	console.log("I am running!")
}

function multiplyByTen(val) {
	return val * 10
}

multiplyByTen(5);

function stringReturnOne() {
	return "This is for one";
}

function stringReturnTwo() {
	return "This is for two";
}

function caller(func) {
	if (typeof func === 'function') {
		func()
	}
}

function myDoubleConsoleLog(arg1, arg2) {
	if (typeof arg1 === 'function' && typeof arg2 === 'function') {
		console.log(arg1())
		console.log(arg2())
	}
}

function caller2(arg) {
	console.log('starting');
	setTimeout(function(){if(typeof arg === 'function') { arg()}}, 2000);
	console.log('ending?');
	return 'interesting';
}

caller2(myDoubleConsoleLog(stringReturnOne, stringReturnTwo));