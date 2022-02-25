
const express = require('express');
const https = require('https'); //api
const bodyParser = require('body-parser');
const request = require('request');

const app = express();
app.use(express.static("public")); // use local file css and static images (static folder)
app.use(bodyParser.urlencoded({ extended: true })) 
// respond with "hello world" when a GET request is made to the homepage

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/singnup.html');
});

app.post('/', (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const theEmail = req.body.theEmail;
  const responseDisplay = res.send("<p>Your name and email is: " + firstName + ' ' +lastName + ' - '+theEmail+'<p>');
});

app.listen(3000, () => {
    console.log("server up");
});