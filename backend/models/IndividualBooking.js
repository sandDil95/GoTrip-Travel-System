const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let VehicleBooking = new Schema({
    // id: mongoose.Schema.Types.ObjectId,
    pickupPlace:{
        type:String,
        required: true,
    },
    arrivalDate:{
        type:Date,
        required: true,
    },
    adults:{
        type: Number,
        required:true
    },
    child:{
        type:Number,
        require:true
    },
    duration:{
        type:Number,
        required:true
    },
    budget:{
        type:Number,
        require: true,
    }
});

module.exports = mongoose.model('VehicleBooking',VehicleBooking);