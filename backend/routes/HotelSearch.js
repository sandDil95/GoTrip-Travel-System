const express = require('express');
const hotelSearchRoutes = express.Router();

const Hotel = require('../models/Hotel');
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
    const hotelDetails = new Hotel({
        hotelName: req.body.hotelName,
        email: req.body.email,
        place: req.body.place,
        hotelImage : name,
        booking : false
    })
    hotelDetails.save()
    .then(result => {
        console.log(result);
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

module.exports = hotelSearchRoutes;