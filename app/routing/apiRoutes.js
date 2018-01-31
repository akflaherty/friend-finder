// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.post("/api/new", function(req, res) {
    var newFriend = req.body;
    console.log(newFriend);
    friendsArr.push(newFriend);
    res.json(newFriend);
});

app.get("/api/friends", function(req, res) {
    res.json(friendsArr);
});

// Starts the server to begin listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});