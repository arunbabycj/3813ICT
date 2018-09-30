module.exports = function(app, db){

  db.createCollection("products", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
  });
}
