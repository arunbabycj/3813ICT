import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Issue = new Schema({
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
