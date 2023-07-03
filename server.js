const express = require('express');

const app = express();

app.get("/", function(req, res){
//   console.log(req);
   res.send("<h1>hello</h1>");
})
// '/' implies home route
// req implies request
// res implies response

app.get("/contact",function (req, res){
    res.send("Contact me : parishri@gmail.com");
})

app.get("/about",function (req, res){
    res.send("<h1>This server is owned by Parishri Shah</h1>I am learning Web Development");
})

app.get("/hobbies",function (req, res){
    res.send("Playing Badminton");
})

app.listen(3000, function(){
    console.log("Server started on port 3000");
});