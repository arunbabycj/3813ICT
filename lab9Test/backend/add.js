module.exports = function(app, db){
  app.post('/issues/add', (req, res) => {
    var myobj = {name: req.body.name,
                price:req.body.price,
                description: req.body.description,
                type: req.body.type};

    db.collection("products").insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("data added");
      //console.log(res);
    });
  });
}
