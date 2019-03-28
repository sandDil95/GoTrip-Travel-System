const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let TailorPackage = new Schema({
    // id: mongoose.Schema.Types.ObjectId,
    name:{
        type:String,
        required: true,
    },
    email:{
        type:email,
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
        type:text,
        required:true
    },
    additional:{
        type:text,
        require: true,
    }
});

module.exports = mongoose.model('TailorPackage',TailorPackage);