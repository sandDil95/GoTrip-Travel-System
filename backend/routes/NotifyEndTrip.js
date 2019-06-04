const express = require("express");
//const bodyParser = require('body-parser');
const endtrip = express.Router();
const EndTripDetails = require("../models/EndTripDetails");
// const cors = require("cors");

// endtrip.use(cors())

// endtrip.use(bodyParser.json());
// process.env.SECRET_KEY = 'secret'


endtrip.post('/sendemail' , (req , res)=>{
    //const today = new Date()
    const endTripDetails = new EndTripDetails({
            first_name:req.body.first_name,
            last_name:req.body.last_name,
            supplier_name:req.body.supplier_name,
            vehicle_no:req.body.vehicle_no,
            begingdate:req.body.begingdate,
            endingdate:req.body.endingdate,
            travled_place:req.body.travled_place,
            total_distanse:req.body.total_distanse,
            guide_fee:req.body.guide_fee,
            parcking_fee:req.body.parcking_fee,
            entry_ticket:req.body.entry_ticket,
            highway_ticket:req.body.highway_ticket,
            other_fee:req.body.other_fee,
    })

    endTripDetails.save()
    .then(result => {
        console.log(result);
        res.status(201).json({
            message: 'End Trip Details Added' 
        })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error:err
        })
    });
})