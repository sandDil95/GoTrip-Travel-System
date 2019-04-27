const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Vehicle = new Schema({
    _id:mongoose.Schema.Types.ObjectId,
    vehicleOwner:{
        type:String,
        required:true
    },
    locations:{
        type:String,
        required: true,
    },
    onlyVehicle:{
        type:Boolean,
        required:true
    },
    vehicleModel:{
        type:String,
        required:true
    },
    vehicleImage:{
        type:String,
        required:true
    },
    booking:{
        type:Boolean,
        required:true
    }
})

module.exports = mongoose.model('Vehicle',Vehicle);