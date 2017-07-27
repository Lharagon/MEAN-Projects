var personConstructor = function(name) {
	this.name = name,
	this.distance_traveled = 0,
	this.say_name = function() {
		console.log(this.name);
	},
	this.say_something = function(something) {
		console.log(this.name + ' says ' + something);
	},
	this.walk = function() {
		console.log(this.name + ' is walking.');
		this.distance_traveled += 3;
	},
	this.run = function() {
		console.log(this.name + ' is running.');
		this.distance_traveled += 10;
	},
	this.crawl = function () {
		console.log(this.name + ' is crawling.');
		this.distance_traveled += 1;
	}

}

var me = new personConstructor("Billy")

me.say_name();
me.say_something("This is great.");
me.walk();
me.run();
me.crawl();
console.log(me.distance_traveled);

function ninjaConstructor (name, cohort) {
	ninja = {};
	ninja.name = name;
	ninja.cohort = cohort;
	ninja.belt_level = "yellow-belt";
}






