module.exports = function(app,fs){
//Route to manage user logins
  //app.get('/api/register', (req, res) => {
    app.get('https://localhost:3000/api/register', (req, res) => {
      console.log("inside register");

    }

    app.get('/',(req,res){
    	//res.sendFile(__dirname + "/index.html");
      console.log("inside / ");
    });

    app.get("/getData",function(req,res){
    	console.log('<h1>Hello World</h1>');
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
}
