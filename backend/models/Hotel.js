const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Hotel = new Schema({
    // id: mongoose.Schema.Types.ObjectId,
    sId:{
        type:String,
        required: true,
    },
    hotelName:{
        type:String,
        required: true,
    },
    contactNo:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    place:{
        type: String,
        required:true
    },
    hotelType:{
        type:String,
        required:true
    },
    single_room_num:{
        type:Number,
    },
    single_room_payment:{
        type:Number,
    },
    double_room_num:{
        type:Number,
    },
    double_room_payment:{
        type:Number,
    },
    triple_room_num:{
        type:Number,
    },
    triple_room_payment:{
        type:Number,
    },
    quad_room_num: {
        type:Number,
    },
    quad_room_payment: {
        type:Number,
    },
    hotelImage:{
        type:String,
        //required:true
    },
    booking:{
        type:Boolean,
        //required: true,
    }
});

module.exports = mongoose.model('Hotel',Hotel);