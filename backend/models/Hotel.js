const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Hotel = new Schema({
    // id: mongoose.Schema.Types.ObjectId,
    hotelName:{
        type:String,
        required: true,
    },
    email:{
        type:String,
        required: true,
    },
    place:{
        type: String,
        required:true
    },
    hotelImage:{
        type:String,
        required:true
    },
    booking:{
        type:Boolean,
        required: true,
    }
});

module.exports = mongoose.model('Hotel',Hotel);