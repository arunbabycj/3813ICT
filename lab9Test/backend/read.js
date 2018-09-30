module.exports = function(app, db){

  app.get('/issues', (req, res) => {
    db.collection("products").find({}).toArray(function(err, issues) {
      if (err)
          console.log(err);
      else
          res.json(issues);
    });
  });

  app.get('/issues/:id', (req, res) => {
    var ObjectId = require('mongodb').ObjectId;
    var id = req.params.id;
    var o_id = new ObjectId(id);
      db.collection("products").find({"_id":o_id}).toArray(function(err, issue) {
          if (err)
              console.log(err);
          else
          //console.log(issue);
              res.json(issue);
      });
  });

}
