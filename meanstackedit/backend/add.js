import Issue from './models/Issue';

module.exports = function(app){
//  router.route('/issues/add').post((req, res) => {
  app.post('/issues/add', (req, res) => {
      let issue = new Issue(req.body);
      issue.save()
          .then(issue => {
              res.status(200).json({'issue': 'Added successfully'});
          })
          .catch(err => {
              res.status(400).send('Failed to create new record');
          });
  });

}

// import Issue from './models/Issue';
//
// module.exports = function(app, db){
//
//   // var myobj = [
//   //   { name: 'Chocolate Heaven', price:20, type: 'icecream', description: 'chocolate'},
//   //   { name: 'Tasty Lemon', price:30, type: 'icecream', description: 'lemon'},
//   //   { name: 'Vanilla Dream', price:40, type: 'icecream', description: 'vanilla'}
//   // ];
//
//   app.post('/issues/add', (req, res) => {
//     let issue = new Issue(req.body);
//     db.collection("products").insertOne(issue, function(err, res) {
//       if (err) throw err;
//       console.log("data added");
//       console.log(res);
//     });
//   });
// }
