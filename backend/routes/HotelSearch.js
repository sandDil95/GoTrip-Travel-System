const express = require('express');
const hotelSearchRoutes = express.Router();
const vehicleSearchRoutes = express.Router();

const Hotel = require('../models/Hotel');
const Vehicle = require('../models/Hotel');
const Supplier = require('../models/User');
// var city = "";

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

hotelSearchRoutes.post('/add',upload.single('hotelImage'),(req,res)=>{
    console.log(req.file);
    Supplier.find({email:req.body.email},function(err,result){ 
        console.log(result); 
        console.log(result[0]._id); 
        if(result.length>=1){
            const hotelDetails = new Hotel({
                sId: result[0]._id,
                hotelName: req.body.hotelName,
                contactNo: req.body.contactNo,
                address: req.body.address,
                place: req.body.place,
                hotelType:req.body.hotelType,
                single_room_num:req.body.single_room_num,
                single_room_payment:req.body.single_room_payment,
                double_room_num:req.body.double_room_num,
                double_room_payment:req.body.double_room_payment,
                triple_room_num:req.body.triple_room_num,
                triple_room_payment:req.body.triple_room_payment,
                quad_room_num:req.body.quad_room_num,
                quad_room_payment:req.body.quad_room_payment,
                hotelImage : '',
                // hotelImage : name,
                booking : false
            })
            hotelDetails.save()
            .then(doc => {
                console.log(doc);
                res.status(201).json({
                    message: 'Hotel Added' 
                })
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    error:err
                })
            });
        }else{
            res.status(404).json({status: 'not found'});
        }
    })
})

hotelSearchRoutes.get('/search/:city',function(req,res,next){
    var searchedcity = req.params.city;
    console.log(searchedcity+"hgbj");
    Hotel.find({place:searchedcity},function(err,result){ //search searching city hotel available or not
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

// vehicleSearchRoutes.get('/username/:email',function(req,res,next){
//     var email = req.params.email;
//     console.log(email+" *****");
//     Vehicle.find({email: email},function(err,result){ //search searching city hotel available or not
//         if(err){
//             console.log(err);
//             res.status(500).json({status: 'failure'});
//         }
//         if(result.length>=1){

//             console.log(result); 
//             res.status(200).json(result)
//         }else{
//             res.status(404).json({status: 'not found'});
//         }
//     })
// })

module.exports = hotelSearchRoutes;