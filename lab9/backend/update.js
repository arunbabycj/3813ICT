// module.exports = function(app, db){
//
//   var myquery = {'description':'chocolate'};
//   var newvalues = { $set: {type: "shake", description: "chocolate shake" } };
//   db.collection("products").updateOne(myquery, newvalues, function(err, res) {
//     if (err) throw err;
//     console.log("1 document updated");
//     //console.log(res);
//   });
//
//   db.collection("products").find({}).toArray(function(err, result) {
//     if (err) throw err;
//     console.log("data available after updation");
//     console.log(result);
//   });
// }

const Issue = require('./models/Issue');

module.exports = function(app){
  app.post('/products/update/:id', (req, res) => {
    Issue.findById(req.params.id, (err, issue) => {
        if (!issue)
            return next(new Error('Could not load Document'));
        else {
            issue.name = req.body.name;
            issue.price = req.body.price;
            issue.type = req.body.type;
            issue.description = req.body.description;

            issue.save().then(issue => {
                res.json('Update done');
            }).catch(err => {
                res.status(400).send('Update failed');
            });
        }
    });
  });
}
