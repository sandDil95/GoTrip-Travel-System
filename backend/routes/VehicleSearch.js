const express = require('express');
const vehicleSearchRoutes = express.Router();
var ObjectId = require('mongodb').ObjectID;

const mailer = require('../routes/mailer');
const Vehicle = require('../models/Vehicle');
const Customer = require('../models/Customer');
const Supplier = require('../models/User');
const BookedVehicles = require('../models/bookedVehicles');

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
    console.log(req.body.email);
    Supplier.find({email:req.body.email},function(err,result){ 
        console.log(result); 
        console.log(result[0]._id); 
        if(result.length>=1){
            if(req.body.onlyVehicle === "driver"){
                const vehicleDetails = new Vehicle({
                    sId: result[0]._id,
                    // vehicleOwner :'',
                    vehicleNo : req.body.vehicleNo,
                    contactNo : req.body.contactNo,
                    beginingDate : req.body.beginingDate,
                    endingDate : req.body.endingDate,
                    locations : req.body.locations,
                    seatsNo : req.body.seatsNo,
                    onlyVehicle : false,
                    ppkm : req.body.ppkm,
                    vehicleModel : req.body.vehicleModel,
                    // vehicleImage : '',
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
            }else{
                const vehicleDetails = new Vehicle({
                    sId: result[0]._id,
                    vehicleOwner :'',
                    vehicleNo : req.body.vehicleNo,
                    contactNo : req.body.contactNo,
                    beginingDate : req.body.beginingDate,
                    endingDate : req.body.endingDate,
                    seatsNo : req.body.seatsNo,
                    onlyVehicle : true,
                    ppkm : req.body.ppkm,
                    vehicleModel : req.body.vehicleModel,
                    locations : req.body.locations,
                    // vehicleImage : '',
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
            }
        }else{
            res.status(404).json({status: 'not found'});
        }
    })
    
    

    
})

vehicleSearchRoutes.get('/search/:vehicleStatus/:pickupLocation',(req,res)=>{
    var vStatus = req.params.vehicleStatus;
    var pLocation = req.params.pickupLocation;
    console.log(vStatus);
     //vehicle only variable declaration
    if(vStatus==='driver'){
        var oVehicle=false;
        console.log(oVehicle);
    }else{
        var oVehicle=true;
        console.log(oVehicle);
    }
    Vehicle.find({onlyVehicle:oVehicle,booking:false,locations:pLocation},function(err,result){
        if(err){
            console.log(err);
            res.status(500).json({status: 'failure'});
        }
        if(result.length>=1){
            console.log(result); 
            res.status(200).json(result)
        }else{
            console.log("gfh")
            res.status(404).json({status: 'not found'});
        }
    })
})
vehicleSearchRoutes.get('/vehiclebooking/:id/:email',(req,res)=>{
    var id = req.params.id;
    var email = req.params.email;
    console.log("ID: "+id);
    console.log("Email: "+email);
    Vehicle.find({"_id":new ObjectId(id)},function(err,vehi){ //get selected vehicle details for booking
        Customer.find({email:email},function(err,custmr){
            var result = vehi.concat(custmr);
            if(err){
                console.log(err);
                res.status(500).json({status:'failure'});
            }
            if(result.length>=1){
                console.log(result);
                res.status(202).json(result);
            }else{
                res.status(404).json({status:'Not Found'})
            }
        })
    })
})

vehicleSearchRoutes.post('/reserved',(req,res)=>{
    console.log("reserved");
    const html = `Hi there,
        <br/>
        You have booked successfully!
        <br/><br/>
        Booking Details
        <ul>
            <li>picklocation: ${req.body.picklocation}</li>
            <li>droplocation: ${req.body.droplocation}</li>
            <li>start: ${req.body.start}</li>
            <li>end: ${req.body.end}</li>
            <li>email: <b>${req.body.email}</b></li>
        </ul>` ;

        Customer.find({email:req.body.email},function(err,custmr){
            console.log(custmr[0]._id);
            if(custmr.length>=1){
                const booking = new BookedVehicles({
                    vehicleId: req.body.vehicleId,
                    customerId: custmr[0]._id,
                    picklocation :req.body.picklocation,
                    droplocation : req.body.droplocation,
                    start : req.body.start,
                    end : req.body.end,
                    email : req.body.email,
                });
                console.log(booking);
                booking.save((err, doc) => {
                    if (!err){        //sucessfilly booked                    
                        res.status(200).json({
                            message: "Successfully Inserted",
                            Signup : booking
                        })
                        mailer.sendEmail('gotrip.lk@gmail.com', req.body.email, 'Vehicle Reservation', html)
    
                    }else{
                        return res.status(500).json({
                            error: err
                        });
                    }
                });
            }else{
                res.status(404).json({status:'Not Found'})
            }
        })
})

module.exports = vehicleSearchRoutes;