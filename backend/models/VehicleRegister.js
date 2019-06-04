const mongoose = require("mongoose")
const Schema = mongoose.Schema

let UserSchema = new Schema({
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
    oVehicle:{
        type:String,
        required:true
    },
    // withDriver:{
    //     type:Boolean,
    //     required:true
    // },
    // withoutDriver:{
    //     type:Boolean,
    //     required:false
    // },
    // vehicle_photo:{
    //     type:String,
    //     required:true
    // },
    vehicle_model:{
        type:String,
        required:true
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
    location:{
        type:String,
        required:true
    },
    sheet_num:{
        type:Number,
        required:false
    },
    pay_per_onekm:{
        type:Number,
        required:false
    },
    // profile_image:{
    //     type:String,
    //     required:true
    // },
    password:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports = VehicleRegister = mongoose.model('vehicle' , UserSchema)