const express = require('express');
const vehicleSearchRoutes = express.Router();

const Vehicle = require('../models/Vehicle');

var name;
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,'./uploads');
    },
    filename: function(req,file,cb){
        name = Date.now() +file.originalname;
        cb(null,name);
    }
});

const fileFilter = (req,file,cb)=>{
    //reject a file
    if(file.mimetype==='image/jpeg'||file.mimetype==='image/png'){
        cb(null,true);
    }
    cb(null,false);    
};
const upload = multer({
    storage : storage,
    fileFilter: fileFilter
});


vehicleSearchRoutes.post('/add',upload.single('vehicleImage'),(req,res)=>{
    console.log(req.file);
    const vehicleDetails = new Vehicle({
        vehicleOwner : req.body.vehicleOwner,
        onlyVehicle : req.body.onlyVehicle,
        vehicleModel : req.body.vehicleModel,
        locations : req.body.locations,
        vehicleImage : name,
        booking : false
    })

    vehicleDetails.save()
    .then(result=>{
        console.log(result);
        res.status(201).json({
            message : 'vehicle added'
        })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        })
    })
})

vehicleSearchRoutes.get('/search/:vehicleStatus',(req,res)=>{
    var vStatus = req.params.vehicleStatus;
    console.log(vStatus);
     //vehicle only variable declaration
    if(vStatus==='driver'){
        var oVehicle=false;
        console.log(oVehicle);
    }else{
        var oVehicle=true;
        console.log(oVehicle);
    }
    Vehicle.find({onlyVehicle:oVehicle,booking:false},function(err,result){
        if(err){
            console.log(err);
            res.status(500).json({status: 'failure'});
        }
        if(result.length>=1){
            console.log(result); 
            res.status(200).json(result)
        }else{
            res.status(404).json({status: 'not found'});
        }
    })
})


module.exports = vehicleSearchRoutes;