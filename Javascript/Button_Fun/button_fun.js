$(document).ready(function() {
	$('#onlyButton').click(function() {
		
	})
})

function change() {
	var theButton = document.getElementById('onlyButton');
	var currentColor = theButton.style.backgroundColor;
	theButton.style.backgroundColor = 'lightgreen';
	
	theButton.addEventListener("mouseout", function () {
		theButton.style.backgroundColor = currentColor;
	})
	
	theButton.addEventListener("click", function () {
		if (theButton.style.backgroundColor = "lightblue") {
			theButton.style.backgroundColor = "red";
		} else {
			theButton.style.backgroundColor = "lightblue";
		}
		currentColor = theButton.style.backgroundColor;
		})
}