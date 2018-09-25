import mongoose from 'mongoose';
const MongoClient = require('mongodb').MongoClient;

const Schema = mongoose.Schema;
//const Schema = MongoClient.Schema;

let Issue = new Schema({
    title: {
        type: String
    },
    responsible: {
        type: String
    },
    description: {
        type: String
    },
    severity: {
        type: String
    },
    status: {
        type: String,
        default: 'Open'
    }
});

let items = ({
    name: {
      type: String
    },
    price:{
      type: String
    },
    type: {
      type: String
    },
    description: {
      type: String
    }
});

export default mongoose.model('Issue', Issue);
//export default MongoClient.model('Issue', Issue);
