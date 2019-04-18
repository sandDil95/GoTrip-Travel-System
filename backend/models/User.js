const mongoose = require("mongoose")
const Schema = mongoose.Schema

const UserSchema = new Schema({
    first_name:{
        type:String
    },
    last_name:{
        type:String
    },
    address:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    contactNo:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    file:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports = User = mongoose.model('users' , UserSchema)