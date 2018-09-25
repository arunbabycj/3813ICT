module.exports = function(app, db){

  var myquery = {'description':'lemon'};
  db.collection("products").deleteOne(myquery, function(err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
  });
  // try {
  //   db.collection("products").deleteOne( myquery);
  // } catch (e) {
  //   print(e);
  // }
}
