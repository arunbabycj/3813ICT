// module.exports = function(app, db){
//
//   var myquery = {'description':'lemon'};
//   db.collection("products").deleteOne(myquery, function(err, obj) {
//     if (err) throw err;
//     console.log("1 document deleted");
//   });
//   // try {
//   //   db.collection("products").deleteOne( myquery);
//   // } catch (e) {
//   //   print(e);
//   // }
// }

const Issue = require('./models/Issue');

module.exports = function(app){
  app.get('/products/delete/:id', (req, res) => {
    Issue.findByIdAndRemove({_id: req.params.id}, (err, issue) => {
        if (err)
            res.json(err);
        else
            res.json('Removed successfully');
    });
  });
}
