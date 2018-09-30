import Issue from './models/Issue';

module.exports = function(app){

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
