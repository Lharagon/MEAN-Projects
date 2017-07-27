
//	SIMPLE FUNCTIONS

function sums(x, y) {
	var sum = 0;
	for (var i = x; i <= y; i++) {
		sum += i;
	}
	console.log(sum)
}

function mins(arr) {
	min = arr[0]
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] < min) {
			min = arr[i];
		}
	}
	return min;
}

function avgs(arr) {
	var ArrSum = 0;
	for (var i = 0; i < arr.length; i++) {
		ArrSum += arr[i];
	}
	avg = Asum/arr.length
	return avg
}

// ANNONYMOUS FUNCTIONS

var sums = function (x, y) {
	var sum = 0;
	for (var i = x; i <= y; i++) {
		sum += i;
	}
	console.log(sum)
}

var mins = function (arr) {
	function mins(arr) {
	min = arr[0]
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] < min) {
			min = arr[i];
		}
	}
	return min;
}

var avgs = function (arr) {
	var ArrSum = 0;
	for (var i = 0; i < arr.length; i++) {
		ArrSum += arr[i];
	}
	avg = Asum/arr.length
	return avg
}

//METHODS

var person = {
	name : 'Luis',
	distance_traveled : 0,
	say_name : function() {
		console.log(person.name);
	},
	say_something : function(something) {
		console.log(person.name + ' says ' + something);
	},
	walk : function() {
		console.log(person.name + ' is walking.');
		this.distance_traveled += 3;
	},
	run : function() {
		console.log(person.name + ' is running.');
		this.distance_traveled += 10;
	},
	crawl : function () {
		console.log(person.name + ' is crawling.');
		this.distance_traveled += 1;
	}

}

person.say_name();
person.say_something("This is great.");
person.walk();
person.run();
person.crawl();
console.log(person.distance_traveled);
