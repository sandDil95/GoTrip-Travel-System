const express = require('express');
const vehiclebookingRoutes = express.Router(); //initialize app

const VehicleBooking = require('../models/IndividualBooking');

vehiclebookingRoutes.get('/vehicle-booking',(req,res)=>{
    let bookings = VehicleBooking.find({},function(err,bookings){
        if(err){
            console.log(err);
            res.json({msg:"failed"})
        }else{
            res.json(bookings);
        }
    })
})

vehiclebookingRoutes.post('/vehicle-booking/add',(req,res)=>{
    let vehiclebooking = new VehicleBooking({
        pickupPlace : req.body.pickupPlace, 
        arrivalDate : req.body.arrivalDate,
        adults : req.body.adults,
        child : req.body.child,
        duration : req.body.duration,
        budget : req.body.budget
    })
    vehiclebooking
        .save()
        .then(result => {
            res.status(201).json({
                message: 'Vehicle Booked' 
            })
        })
        .catch(err =>{
            console.log(err);
            res.status(500).json({
                error:err
            })
        });
})

module.exports = vehiclebookingRoutes;