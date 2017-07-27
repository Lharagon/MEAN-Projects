function VehicleConstructor (name, wheels, passangers) {
	vehicle = {};
	vehicle.name = name;
	vehicle.wheels = wheels;
	vehicle.passangers = passangers;
	vehicle.makeNoise = function () {
		console.log("Rrmmmmm");
	}

	return vehicle;
}

var Bike = VehicleConstructor('bike', 2, 1);
Bike.makeNoise = function () {
	console.log("ring ring!");
}

var Sedan = VehicleConstructor('sedan', 4, 5);
Sedan.makeNoise = function () {
	console.log("Honk Honk!");
}

var Bus = VehicleConstructor('bus', 8, 0);

Bus.pickUp = function (nums) {
	Bus.passangers += nums;
}

Bike.makeNoise();
Bus.makeNoise();
Bus.pickUp(7);
console.log(Bus.passangers);
Bus.pickUp(89);
console.log(Bus.passangers);