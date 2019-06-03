const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Vehicle = new Schema({
    // _id:mongoose.Schema.Types.ObjectId,
    sId:{
        type:String,
    },
    vehicleNo:{
        type:String,
        required:true
    },
    contactNo:{
        type:String,
        required:true
    },
    beginingDate:{
        type:Date,
        required:true
    },
    endingDate:{
        type:Date,
        required:true
    },
    locations:{
        type:String,
        required: true,
    },
    seatsNo:{
        type:Number,
        required:false
    },
    onlyVehicle:{
        type:Boolean,
        required:true
    },
    ppkm:{ //pay per kilometer
        type:Number,
        required:false
    },
    vehicleModel:{
        type:String,
        required:true
    },
    vehicleImage:{
        type:String,
        // required:true
    },
    booking:{
        type:Boolean,
        required:true
    }
})

module.exports = mongoose.model('Vehicle',Vehicle);