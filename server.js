var express = require("express");
var app = express();
var path = require("path");

var HTTP_PORT = process.env.PORT || 8080;

function onHttpStart() {
  console.log("Express http server listening on: " + HTTP_PORT);
}

app.get("/", function(req,res){
    res.send("<a href='/index'>Go to the home page</a>");
});

app.get("/index", function(req,res){
    res.sendFile(path.join(__dirname,"/view/index.html"));
});

app.get("/roomlisting", function(req,res){
    res.sendFile(path.join(__dirname,"/view/roomlisting.html"));
});

app.get("/login", function(req,res){
    res.sendFile(path.join(__dirname,"/view/login.html"));
});

app.get("/signup", function(req,res){
    res.sendFile(path.join(__dirname,"/view/signup.html"));
});

app.get("/dashboard", function(req,res){
    res.sendFile(path.join(__dirname,"/view/dashboard.html"));
});

app.use((req, res) => {
    res.status(404).send("Page Not Found");
  });

app.listen(HTTP_PORT, onHttpStart);