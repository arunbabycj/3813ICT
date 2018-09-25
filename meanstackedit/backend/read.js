module.exports = function(app, db, fs){

  db.collection("products").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log("all data available");
    console.log(result);
  });
}
