import Issue from './models/Issue';

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
