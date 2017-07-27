x = [3,5,"Dojo", "rocks", "Michael", "Sensei"]

for (var i = 0; i < x.length; i++){
	console.log(x[i]);
}

x.push(100)

x.push(["hello", "world", "JavaScript is Fun"]);

console.log(x);
var sum = 0;
for (var i = 1; i <= 500; i++) {
	sum += i;
}
console.log(sum)

var Narray = [1, 5, 90, 25, -3, 0]

var min = Narray[0]
for (var i = 0; i < Narray.length; i++) {
	if (Narray[i] < min) {
		min = Narray[i];
	}
}
console.log(min)
var Asum = 0;
for (var i = 0; i < Narray.length; i++) {
	Asum += Narray[i];
}
console.log(Asum/Narray.length)

var newNinja = {
 name: 'Jessica',
 profession: 'coder',
 favorite_language: 'JavaScript', //like that's even a question!
 dojo: 'Dallas'
}

for (var key in newNinja) {
	console.log(key + " : " + newNinja[key]);
}