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
    res.json(newFriend);
});

// !!! HARD CODED TEST DATA
var friendsArr = [{
    "name": "Ahmed",
    "photo": "https://d17fnq9dkz9hgj.cloudfront.net/uploads/2012/11/153558006-tips-healthy-cat-632x475.jpg",
    "scores": ["5","1","4","4","5","1","2","5","4","1"]
}, {
    "name": "Louis T. Delia",
    "photo": "https://pbs.twimg.com/profile_images/639214960049000449/lNCRC-ub.jpg",
    "scores": ["3","3","4","2","2","1","3","2","2","3"]
}];