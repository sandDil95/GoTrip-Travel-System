const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Hotel = new Schema({
    // id: mongoose.Schema.Types.ObjectId,
    hotelName:{
        type:String,
        required: true,
    },
    contactNo:{
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
        required:true
    },
    double_room_num:{
        type:Number,
        required:true
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