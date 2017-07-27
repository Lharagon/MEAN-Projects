var express = require("express");
var app = express();

// let's handle the base route "/" and respond with "Hello Express"
app.get('/', function(request, response) {
  response.send("<h1>Hello Express</h1>");
})
// notice that the function is app.get(...) why do you think the function is called get?
app.use(express.static(__dirname + "/static"));
app.set('views',__dirname + '/views');
app.set('view engine', 'ejs');

app.get("/users", function (request, response){
    // hard-coded user data
    var users_array = [
        {name: "Michael", email: "michael@codingdojo.com"}, 
        {name: "Jay", email: "jay@codingdojo.com"}, 
        {name: "Brendan", email: "brendan@codingdojo.com"}, 
        {name: "Andrew", email: "andrew@codingdojo.com"}
    ];
    response.render('users', {users: users_array});
})
// Tell the express app to listen on port 8000
app.listen(8000, function() {
  console.log("listening on port 8000");
})