//import mongoose from 'mongoose';
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
module.exports = function(connection){
  return {
    Issue: connection.model('Issue', new mongoose.Schema({
      name:String,
      price:Number,
      type:String,
      description:String
    }))
  };
}

// let Issue = new Schema({
//     name: {
//         type: String
//     },
//     price: {
//         type: Number
//     },
//     type: {
//         type: String
//     },
//     description: {
//         type: String
//     }
// 
// });

//export default mongoose.model('Issue', Issue);

// module.exports = function(conn) { // inject connection
//     return {
//         User: conn.model('User', new mongoose.Schema({
//             username: String,
//             password: String,
//         })
//     };
// }
