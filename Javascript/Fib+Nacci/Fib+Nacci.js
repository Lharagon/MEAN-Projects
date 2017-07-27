function fib() {
  var number = 0;
  var added;
  var total;
  function nacci() {
  	if (total) {
  		console.log(total);
    	number = added;
    	added = total;
    	total = number + total;
  	} else {
    	added = 1;
    	console.log(added);
    	total = number + added;
    }
  }
  return nacci
}
var fibCounter = fib();
fibCounter() // should console.log "1"
fibCounter() // should console.log "1"
fibCounter() // should console.log "2"
fibCounter() // should console.log "3"
fibCounter() // should console.log "5"
fibCounter() // should console.log "8"