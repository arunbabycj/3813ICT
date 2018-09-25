var express = require('express');
var app = express();
var http = require('http');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var originemail = "bob@email.com";
var originpassword = "hello";

http.createServer(app).listen(3000);
console.log('Server started');

app.get('/',function(req,res){
	res.sendFile(__dirname + "/index.html");
});

app.get("/getData",function(req,res){
	res.send('<h1>Hello World</h1>');
});

app.get('/newpage.html',function(req,res){
	res.sendFile(__dirname + "/newpage.html");

});

app.post('/api/login',function(req,res){
  if (!req.body) {
    return res.sendStatus(400)
  }
  var customer = {};
	customer.email = req.body.email;
	customer.password = req.body.password;
	if (req.body.email == "abc@com.au" && req.body.password =="123"){
    customer.valid = true;
  }else{
    customer.valid = false;
  }
	res.send(customer);
});
