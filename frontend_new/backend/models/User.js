const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
  name: {
    type: String,
  },
  address: {
    type: String,
   
  },
 
  nationality: {
    type: String,
   
  },
  gender: {
     type: String,
     
   },

  email: {
    type: String,
   
    unique: true,
  },
  password: {
    type: String,
   
  },
});
  const User = mongoose.model('user', UserSchema);
  module.exports = User;