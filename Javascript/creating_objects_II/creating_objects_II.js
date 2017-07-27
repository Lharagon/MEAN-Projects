function Vehicle (name, wheels, passangers, speed) {
	var distance_travelled = 0;
	var updateDistanceTravelled = function() {
		distance_travelled += speed;
		console.log(this.speed);
	}

	this.name = name;
	this.wheels = wheels;
	this.passangers = passangers;
	this.speed = speed;
	this.makeNoise = function () {
		console.log("Rrmmmmm");
	}
	
	this.move = function () {
		updateDistanceTravelled();
		this.makeNoise();
	}

	this.checkMiles = function() {
		console.log("Big time " + distance_travelled)
	}
}

var Bike = new Vehicle('bike', 2, 1, 70);
Bike.makeNoise = function () {
	console.log("ring ring!");
}

var Sedan = new Vehicle('sedan', 4, 5, 39);
Sedan.makeNoise = function () {
	console.log("Honk Honk!");
}

var Bus = new Vehicle('bus', 8, 0, 11);

Bus.pickUp = function (nums) {
	this.passangers += nums;
}

Bike.makeNoise();
Bus.makeNoise();
Bus.pickUp(7);
console.log(Bus.passangers);
Bus.pickUp(89);
console.log(Bus.passangers);
Bus.checkMiles();
Bus.move();
Bus.checkMiles();
