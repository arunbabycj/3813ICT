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
const dbName = 'mydb';

// Use connect method to connect to the server
MongoClient.connect(url, { useNewUrlParser: true }, function(err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to server");

    const db = client.db(dbName);
    require('./create.js')(app, db);
    require('./read.js')(app, db);
    require('./add.js')(app, db);
    require('./update.js')(app, db);
    require('./remove.js')(app, db);

});

app.use('/', router);

app.listen(3000, () => console.log('Express server running on port 3000'));
