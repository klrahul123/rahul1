const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
 
  email: String,
  password: Number,
  
  
 
 
});

const User = mongoose.model('USERR', UserSchema); 
module.exports= User ;