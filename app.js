const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", function (req, res) {
   res.sendFile(__dirname+"/index.html");   
});

app.listen("3000", function () {
    console.log("Server is running on port 3000");
  });