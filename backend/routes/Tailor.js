const express = require('express');
const tailorPackageRoutes = express.Router(); //initialize app

const Tailor = require('../models/Tailor');

tailorPackageRoutes.get('/',(req,res)=>{
    let package = Tailor.find({},function(err,package){
        if(err){
            console.log(err);
            res.json({msg:"failed"})
        }else{
            res.json(bookings);
        }
    })
})

tailorPackageRoutes.post('/tailor-package/booking',(req,res)=>{
    let tailorBooking = new Tailor({
        name : req.body.name, 
        email : req.body.email,
        pno : req.body.pno,
        arrivalDate : req.body.arrivalDate,
        pickupPlace : req.body.pickupPlace,
        additional : req.body.additional
    })
    tailorBooking
        .save()
        .then(result => {
            res.status(201).json({
                message: 'Successfully created package' 
            })
        })
        .catch(err =>{
            console.log(err);
            res.status(500).json({
                error:err
            })
        });
})

module.exports = tailorPackageRoutes;