const express = require("express")
const users = express.Router()
const cors = require("cors")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt");


const User = require("../models/User")

users.use(cors())

process.env.SECRET_KEY = 'secret'

users.post('/register' , (req , res)=>{
    const today = new Date()
    const userData = {
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        // address:req.body.address,
        email:req.body.email,
        password:req.body.password,
        created:today
    }

    User.findOne({
        email:req.body.email
    })
    .then(user =>{
        if(!user){
            bcrypt.hash(req.body.password , 10 ,(err , hash)=>{
                userData.password = hash
                User.create(userData)
                .then(user => {
                    res.json({status:user.email + 'registered!'})
                })
                .catch(err => {
                    res.send('error :' + err)
                })
            })
        }
        else{
            res.json({error:'User already exists'})
        }
    })
    .catch(err => {
        res.send('error:' +err)
    })
})
users.post("/login",(req,res,next)=>{
    console.log("ds")
    User.find({email: req.body.email})
    .exec()
    .then(user=>{
        if(user.length<1){ //when email is not in the database
            return res.status(404).json({//not found entered email or invalid email
                message: 'Invalid email'
            })
        }else{ //when entered email matched 
            bcrypt.compare(req.body.password,user[0].password,(err,result)=>{
                if(err){
                    console.log("f")
                    return res.status(401).json({//unauthorized user login(invalid password entered)
                        message: 'failed'
                    });
                }
                if(result){
                    console.log("s")
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
                    })
                }
                res.status(401).json({//unauthorized login
                    message: 'failed'
                });
            })
        }
        
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({//not implemented
            error: err
        });
    });
})

// users.post('/login' ,(req , res)=>{
//     User.findOne({
//         email:req.body.email
//     })
//     .then(user=>{
//         if(user){
//             if(bcrypt.compareSync(req.body.password , user.password)){
//                 const payload ={
//                     _id:user._id,
//                     first_name:user.first_name,
//                     last_name:user.last_name,
//                     address:user.address,
//                     email:user.email
//                 }
//                 let token = jwt.sign(payload , process.env.SECRET_KEY ,{
//                     expiresIn:1440
//                 })
//                 res.send(token)
//             }else{
//                 res.json({error:"User does not exist"})
//             }
//         }else{
//             res.json({error:"User does not exist"})
//         }
//     })
//     .catch(err =>{
//         res.send('error:' +err)
//     })
// })

// users.post('/login' , (req , res)=>{
//     User.findOne({
//         email:req.body.email
//     })
//     .then(user=>{
//         if(user){
//             if(bcrypt.compareSync(req.body.password , user.password)){
//                 const payload = {
//                     _id:user._id,
//                     first_name:user.first_name,
//                     last_name:user.last_name,
//                     address:user.address,
//                     email:user.email
//                 }
//                 let token = jwt.sign(payload , process.env.SECRET_KEY ,{
//                     expiresIn:1440
//                 })
//                 res.send(token)
//             }else{
//                 res.json({error:"User does not exist"})
//             }
//         }else{
//             res.json({error:"User does not exist"})
//         }
//     })
//     .catch(err =>{
//         res.send('error: ' +err)
//     })

// })

// users.get('/supplier',(req,res)=>{
//     var first_name = req.params.first_name;
//     var last_name = req.params.last_name;
//     var email = req.params.email;
//     console.log(vStatus);
     
//     if(vStatus==='driver'){
//         var oVehicle=false;
//         console.log(oVehicle);
//     }else{
//         var oVehicle=true;
//         console.log(oVehicle);
//     }
//     Vehicle.find({onlyVehicle:oVehicle,booking:false,locations:pLocation},function(err,result){
//         if(err){
//             console.log(err);
//             res.status(500).json({status: 'failure'});
//         }
//         if(result.length>=1){
//             console.log(result); 
//             res.status(200).json(result)
//         }else{
//             console.log("gfh")
//             res.status(404).json({status: 'not found'});
//         }
//     })
// })
users.get('/supplier' ,(req , res)=>{
    var decoded = jwt.verify(req.headers['authorization'] ,process.env.SECRET_KEY)

    User.findOne({
        _id:decoded._id
    })
    .then(user=>{
        if(user){
            res.json(user)
        }else{
            res.send("User does not exist")
        }
    })
    .catch(err=>{
        res.send('error: ' +err)
    })
})

module.exports = users
