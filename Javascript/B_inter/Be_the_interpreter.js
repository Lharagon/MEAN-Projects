PROBLEM I

var first_variable;

function firstFunc() {
  first_variable = "Not anymore!!!";
  console.log(first_variable);
}

first_variable = "Yipee I was first";
console.log(first_variable);
console.log(first_variable);

//will print "Yipee I was first" since function was never called

PROBLEM II

var food;
function eat() {
	var food;
  	food = "half-chicken";
  	console.log(food);	//prints "half-chicken"
  	food = "gone";      
  	console.log(food);	//prints "gone"
}

eat();
console.log(food) //undefined

PROBLEM III

var new_word;
function lastFunc() {
  new_word = "old";
}

new_word = "NEW!";
console.log(new_word); // Will print "NEW!"