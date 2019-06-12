const mongoose = require("mongoose")
const Schema = mongoose.Schema

let EndTripDetail = new Schema({
    first_name:{
        type:String
    },
    last_name:{
        type:String
    },
    supplier_name:{
        type:String,
        required:true
    },
    vehicle_no:{
        type:String,
        required:true
    },
    begingdate:{
        type:Date,
        required:true
    },
    endingdate:{
        type:Date,
        required:true
    },
    travled_place:{
        type:String,
        required:true
    },
    total_distanse:{
        type:Number,
        required:true
    },
    guide_fee:{
        type:Number,
        required:true
    },
    parcking_fee:{
        type:Number,
        required:true
    },
    entry_ticket:{
        type:Number,
        required:true
    },
    highway_ticket:{
        type:Number,
        required:true
    },
    other_fee:{
        type:Number,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports = EndTripDetails = mongoose.model('endtripdetail' , EndTripDetail)