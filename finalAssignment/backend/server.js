const express = require('express');
const app = express();
const router = express.Router();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'chatapp';

// Use connect method to connect to the server
MongoClient.connect(url, { useNewUrlParser: true }, function(err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to server");

    const db = client.db(dbName);
    db.dropDatabase();
    db.users.drop();
    //require('./register.js')(app,db);
    db.createCollection("users", function(err, res) {
      if (err) throw err;
      console.log("Collection created!");
    });

    var myobj = [
      { username: 'john', password:"hello",},
      { username: 'bob', password:"good",},
      { username: 'nathan', password:"how"}
    ];

    db.collection("users").insertMany(myobj, function(err, res) {
      if (err) throw err;
      console.log("data added");
      //console.log(res);
    });

    app.post('/users/check', (req, res) => {
      var user = req.body.username;
      var pwd = req.body.password
      console.log(user, pwd)
        db.collection("users").find({"username":user, "password":pwd}).toArray(function(err, res) {
          if (res == "")
            console.log('Could not load Document');
          else {
            if (err)
                res.status(400).send('Update failed');
            else
              res.json('Update done');
          }
      });
  });

});

app.use('/', router);

app.listen(3000, () => console.log('Express server running on port 3000'));
