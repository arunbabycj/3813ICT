import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import Issue from './models/Issue';

const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/issues');

const connection = mongoose.connection;

connection.once('open', () => {
   console.log('MongoDB database connection established successfully!');
    require('./create.js')(app);
     require('./add.js')(app);
     require('./remove.js')(app);
     require('./update.js')(app);
     require('./read.js')(app);
});
// const MongoClient = require('mongodb').MongoClient;
// const assert = require('assert');
//
// // Connection URL
// const url = 'mongodb://localhost:27017/issues';
//
// // Database Name
// const dbName = 'mydb';
//
// MongoClient.connect(url, { useNewUrlParser: true }, function(err, client) {
//   assert.equal(null, err);
//   console.log("Connected successfully to server");
//
//   const db = client.db(dbName);
//   db.dropDatabase();
//   require('./create.js')(app, db);
//   require('./add.js')(app, db);
//   require('./remove.js')(app, db);
//   require('./update.js')(app, db);
//   require('./read.js')(app, db);
// });

// router.route('/issues').get((req, res) => {
//     Issue.find((err, issues) => {
//         if (err)
//             console.log(err);
//         else
//             res.json(issues);
//     });
// });
//
// router.route('/issues/:id').get((req, res) => {
//     Issue.findById(req.params.id, (err, issue) => {
//         if (err)
//             console.log(err);
//         else
//             res.json(issue);
//     })
// });
//
// // router.route('/issues/add').post((req, res) => {
// //     let issue = new Issue(req.body);
// //     issue.save()
// //         .then(issue => {
// //             res.status(200).json({'issue': 'Added successfully'});
// //         })
// //         .catch(err => {
// //             res.status(400).send('Failed to create new record');
// //         });
// // });
//
// router.route('/issues/update/:id').post((req, res) => {
//     Issue.findById(req.params.id, (err, issue) => {
//         if (!issue)
//             return next(new Error('Could not load Document'));
//         else {
//             issue.title = req.body.title;
//             issue.responsible = req.body.responsible;
//             issue.description = req.body.description;
//             issue.severity = req.body.severity;
//             issue.status = req.body.status;
//
//             issue.save().then(issue => {
//                 res.json('Update done');
//             })
//             .catch(err => {
//                 res.status(400).send('Update failed');
//             });
//         }
//     });
// });
//
// router.route('/issues/delete/:id').get((req, res) => {
//     Issue.findByIdAndRemove({_id: req.params.id}, (err, issue) => {
//         if (err)
//             res.json(err);
//         else
//             res.json('Removed successfully');
//     });
// });

app.use('/', router);

app.listen(3000, () => console.log('Express server running on port 3000'));
