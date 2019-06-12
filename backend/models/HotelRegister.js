const mongoose = require("mongoose")
const Schema = mongoose.Schema

let Hotel = new Schema({
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
    // hotel_photo:{
    //     type:String,
    //     required:true
    // },
    begingdate:{
        type:Date,
        required:true
    },
    endingdate:{
        type:Date,
        required:true
    },
    single_room_num:{
        type:Number,
        required:true
    },
    double_room_num:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports = HotelRegister = mongoose.model('hotel' , Hotel)