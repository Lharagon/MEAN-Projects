$(document).ready(function () {
    var socket = io.connet();

    $('form').submit(function () {
        var data = {
            first: 
        }
        socket.emit('posting_form', formdata);

        socket.on('update_massage', function(message) {
            $()
        })

        socket.on('random_number', function(ramNum) {
            $('#emmission').append("<p")
        })

        return false;
    })

    
    

})