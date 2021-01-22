const express = require("express");
const bodyParser = require("body-parser");
// const request = require("request");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", (req, res) => {
    var firstName = req.body.fname;
    var lastName = req.body.lname;
    var email = req.body.email;

    console.log(firstName, lastName, email);
});

app.listen(8080, () => {
    console.log("listening on port 8080"); 
});


//aa88ff42495cef384cbbb51a865cc901-us7


//30963d626a