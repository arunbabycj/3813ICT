import Issue from './models/Issue';

module.exports = function(app){
  app.get('/products', (req, res) => {
      Issue.find((err, issues) => {
          if (err)
              console.log(err);
          else
              res.json(issues);
      });
  });

  app.get('/products/:id', (req, res) => {
    Issue.findById(req.params.id, (err, issue) => {
        if (err)
            console.log(err);
        else
            res.json(issue);
    })
  });

}
