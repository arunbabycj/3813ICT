import Issue from './models/Issue';

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
