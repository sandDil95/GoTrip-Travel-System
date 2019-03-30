const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let TailorPackage = new Schema({
    // id: mongoose.Schema.Types.ObjectId,
    name:{
        type:String,
        required: true,
    },
    email:{
        type:String,
        required: true,
    },
    pno:{
        type: Number,
        required:true
    },
    arrivalDate:{
        type:Date,
        require:true
    },
    pickupPlace:{
        type:String,
        required:true
    },
    additional:{
        type:String,
        require: true,
    }
});

module.exports = mongoose.model('TailorPackage',TailorPackage);