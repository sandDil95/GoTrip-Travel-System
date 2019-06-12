const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let bookedVehicles = new Schema({
    // _id:mongoose.Schema.Types.ObjectId,
    vehicleId:{
        type:String,
    },
    customerId:{
        type:String,
    },
    picklocation:{
        type:String,
        required:true
    },
    droplocation:{
        type:String,
        required:true
    },
    start:{
        type:Date,
        required:true
    },
    end:{
        type:Date,
        required:true
    },
})

module.exports = mongoose.model('BookedVehicles',bookedVehicles);