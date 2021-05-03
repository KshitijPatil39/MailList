const express = require("express");
const bodyParser = require("body-parser");
const hhtps = require("https");

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
})

app.post("/", function(req, res){
    console.log(req.body.fName);
    console.log(req.body.lName);
    console.log(req.body.email);
    if(res.statusCode===200){
        res.sendFile(__dirname + "/success.html");
    }
    else {
        res.sendFile(__dirname + "/failure.html");
    }
    
})

app.post("/failure", function(req, res){
    res.redirect("/");
})



app.listen(3000, function(){
    console.log("Server is running on port 3000");
})