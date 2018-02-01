// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var fs = require("fs");


var friendsArr;
fs.readFile('app/data/friends.js', 'utf8', function(err, data) {
    // read in data on friends, and parse as an object
    if (err) {
        return console.log(err);
    }
    friendsArr = JSON.parse(data);
});

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "app/public/home.html"));
});

app.get("/survey.html", function(req, res) {
    res.sendFile(path.join(__dirname, "app/public/survey.html"));
});


app.get("/api/friends", function(req, res) {
    res.json(friendsArr);
});

// Starts the server to begin listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});

app.post("/api/new", function(req, res) {
    var newFriend = req.body;
    console.log(newFriend);
    friendsArr.push(newFriend);
    // setup JSON to push to file
    res.json(newFriend);
    var friendsJSON = JSON.stringify(friendsArr);
    fs.writeFile('app/data/friends.js', friendsJSON, 'utf8');
});