// module.exports = function(app, db, fs){
//
//   db.collection("products").find({}).toArray(function(err, result) {
//     if (err) throw err;
//     console.log("all data available");
//     console.log(result);
//   });
// }

const Issue = require('./models/Issue');

module.exports = function(app){
  app.get('/products', (req, res) => {
      Issue.find((err, issues) => {
          if (err)
              console.log(err);
          else
              res.json(issues);
      });
  });

  app.get('/products/:id', (req, res) => {
    Issue.findById(req.params.id, (err, issue) => {
        if (err)
            console.log(err);
        else
            res.json(issue);
    })
  });

}
