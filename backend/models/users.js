const mongoose = require('mongoose');
const usersschema=new mongoose.Schema(
    {
    name:{
        type:String,
        required:[true,'name is required'],
        trim:true,
    },
    email:{
        type:String,
        required:[true,'email is required'],
        unique:true,
    },
    password: {
  type: String,
  required: [ 'Password is required'],

        
    },
    age:{
        type:Number,
        required:[true, 'age is required'],
    },
    role:{
        type:String,
        enum:['user','admin'],
        default:'user',
    }
    },
    {
 timestamps:true,
   
    },
);
const users=mongoose.model('users',usersschema);
module.exports=users;