$(document).ready(function () {

	$('#onlyButton').click(function() {
		$.get("https://api.github.com/users/Lharagon", function(data) {
			$('#onlyButton').after('<p>' + data.name + '</p>')
			console.log(data.name)

		})
	})






})