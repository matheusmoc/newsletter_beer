
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

  //const responseDisplay = res.send("<p>Your name and email is: " + firstName + ' ' +lastName + ' - '+theEmail+'<p>');

  const data = {
    members: [{
      email_andress: theEmail,
      status: "subscribed",
      merge_fields: {
        FNAME:firstName,
        LNAME:lastName,
      }
    }]
  }  

//api key 
//51133eaacf68ba10cace1bd8b19f7541-us14

//id list 
//2219a78650

  const toJson = JSON.stringify(data); 
  const url = 'https://us14.api.mailchimp.com/3.0/lists/2219a78650'  //us14 = server 14 
  const options = {
    method: "POST",
    auth: "matheusmoc:51133eaacf68ba10cace1bd8b19f7541-us14", // --user 'anystring:TOKEN
  }

  
  const request = https.request(url, options, (response)=>{      //response from server

    if(response.statusCode === 200){
      res.sendFile(__dirname + "/success.html")
    }else{
      res.sendFile(__dirname + "/failure.html")
    }


    response.on("data", (data)=>{
      console.log(JSON.parse(data));
    })
  })

  request.write(toJson);
  request.end(); 
});

app.post("/failure", (req, res)=>{
  res.redirect("/");
})

app.post("/success", (req, res)=>{
  res.redirect("/");
})







app.listen(process.env.PORT /*HEROKU*/||3000 /*localhost*/, () => {
  console.log("server up");
});