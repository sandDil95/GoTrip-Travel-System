const express = require('express');
const customerRoutes = express.Router();
const bcrypt = require('bcrypt');

const Customer = require('../models/Customer');

customerRoutes.post('/register',(req,res,next)=>{
    console.log("customer register")
    const customerDetails = new Customer({
        // id:
        fullname:req.body.fname,
        email:req.body.email,
        password:req.body.password,
    })
    
    Customer.find({email:req.body.email})
    .exec()
    .then(customer => {
        if(customer.length>=1){
            return res.status(409).json({
                message:"This email is already exists"
            })
        }
        customerDetails.save().then(result=>{
            res.status(200).json({
                message:"Successfully registered",
                Register:customerDetails
            })
        })
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    })    
})

customerRoutes.post('/login',(req,res,next)=>{
    Customer.find({email:req.body.email})
    .exec()
    .then(customer=>{ //customer is  not yet signup(unauthorized user login)
        if(customer.length<1){
            return res.status(404).json({
                message:'You are not yet signup'
            })
        }else{
            bcrypt.compare(req.body.password,customer[0].password,(err,result)=>{
                if(err){
                    return res.status(401).json({//invalid
                        message: 'failed'
                    });
                }
                if(result){
                    // const token = jwt.sign(//jwt authentication
                    //     {
                    //         email: user[0].email,
                    //         userId: user[0]._id
                    //     },
                    //     "secret",
                    //     { 
                    //         expiresIn: "1h"
                    //     }
                    // );
                    return res.status(200).json({//valid login
                        message: "Successfully Logged",
                        // token:token
                    })
                }
                res.status(401).json({//invalid password entered
                    message: 'failed'
                });
            })
        }
    })
})

module.exports = customerRoutes