const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017');

const connection = mongoose.connection;

const corsOptions = {
  origin: 'http://localhost:4200', // Angular server address and port
  optionsSuccessStatus: 200 //
};

// Set up CORS (Cross Site)
app.use(cors(corsOptions));

connection.once('open', () => {
   console.log('MongoDB database connection established successfully!');
   require('./add.js')(app);
   require('./create.js')(app);
   require('./add.js')(app);
   require('./remove.js')(app);
   require('./update.js')(app);
   require('./read.js')(app);
});

app.listen(3000, () => console.log('Express server running on port 3000'));
