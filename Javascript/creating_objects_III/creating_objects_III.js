function Vehicle (name, wheels, passangers, speed, vin) {
	var distance_travelled = 0;
	var updateDistanceTravelled = function() {
		distance_travelled += speed;
		console.log(this.speed);
	}

	this.name = name;
	this.wheels = wheels;
	this.passangers = passangers;
	this.speed = speed;
	this.vin = vin;
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

var vinGen = function () {
	var alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var numbers = "0123456789";
	var vin = ""
	for (var i = 0; i < 14; i++) {
		var flip = Math.floor(Math.random() * 2)
		if (flip === 1) {
			vin += alpha[Math.floor(Math.random() * 26)]
		}
		vin += numbers[Math.floor(Math.random() * 10)]
	}
	return vin;
}

var Car = new Vehicle('car', 4, 3, 15, vinGen());

console.log(Car.vin)
console.log(Car.vin)
console.log(Car.vin)
console.log(Car.vin)
console.log(Car.vin)