module.exports = function(app, db){

  var myquery = {'description':'chocolate'};
  var newvalues = { $set: {type: "shake", description: "chocolate shake" } };
  db.collection("products").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
    //console.log(res);
  });

  db.collection("products").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log("data available after updation");
    console.log(result);
  });
}
