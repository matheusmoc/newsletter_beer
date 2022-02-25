<h1>EXPRESS + NODE.JS + BOOTSTRAP<h1>

##INSTALL##

<pre>$ mkdir myapp</pre>
<pre>$ cd myapp</pre>
<pre>npm init</pre>
<pre>npm install express --save</pre>
<pre>npm install express</pre>
<pre>nodemon app.js</pre>


<p>Examination of the post in the request body</p>
<pre>npm install body-parser</pre> 

<p>make http calls</p>
<pre>npm install resquest</pre> 

##API DOC##
<h3>
<a href='https://mailchimp.com/pt-br/help/about-api-keys/'>Mailchimp</a>
</h3>

##EXPRESS CONFIG##

<pre>
var express = require('express');
var app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.send('hello world');
});
</pre>

##SERVER CONFIG##

<pre>
app.listen(3000, () => {
    console.log("server up");
})
</pre>