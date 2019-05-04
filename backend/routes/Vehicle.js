const express = require("express");
//const path = require('path');
const vehicle = express.Router();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// const bodyParser = require('body-parser');
// const crypto = require('crypto');
// const multer = require('multer');
// const GridFsStorage = require('multer-gridfs-storage');
// const Grid = require('gridfs-stream');
// const methodOverride = require('method-override');
// const mongoose = require('mongoose');



const VehicleRegister = require("../models/VehicleRegister");


//const vehicle = express.Router();
vehicle.use(cors())

//vehicle.use(bodyParser.json());
//vehicle.use(methodOverride('_method'));
process.env.SECRET_KEY = 'secret'

//Mongo URI

//const mongoURI =  'mongodb://localhost:27017/goTrip'

//Create mongo connection

// conn = mongoose.createConnection(mongoURI);

//Init gfs

// let gfs;
// conn.once('open' , ()=>{
//     //Init stream
//     gfs = Grid(conn.db , mongoose.mongo);
//     gfs.collection('uploads');
// })

//image upload

//Create storage engine

// const storage = new GridFsStorage({
//     url:mongoURI,
//     file:(req , file)=>{
//         return new Promise((resolve , reject)=>{
//             crypto.randomBytes(16 ,(err ,buf)=>{
//                 if(err){
//                     return reject(err);
//                 }
//                 const filename = buf.toString('hex') + path.extname(file.originalname);
//                 const fileInfo ={
//                     filename:filename ,
//                     bucketName:'uploads'
//                 };
//                 resolve(fileInfo);
//             });
//         })
//     }
// });

// const upload =multer({storage});


vehicle.post('/vehicleregister' , (req , res)=>{
    const today = new Date()
    // var oVehicle = req.body.size;
    // if(oVehicle==='driver'){
    //     var oVehicle=false;
    //     console.log(oVehicle);
    // }else{
    //     var oVehicle=true;
    //     console.log(oVehicle);
    // }
    console.log(req.body.oVehicle);
    const userData = {
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        address:req.body.address,
        email:req.body.email,
        contactNo:req.body.contactNo,
        oVehicle:req.body.oVehicle,
        // size:req.body.size,
        // withDriver:req.body.withDriver,
        // withoutDriver:req.body.withoutDriver,
       // vehicle_photo:req.body.vehicle_photo,
        vehicle_model:req.body.vehicle_model,
        supplier_name:req.body.supplier_name,
        vehicle_no:req.body.vehicle_no,
        begingdate:req.body.begingdate,
        endingdate:req.body.endingdate,
        location:req.body.location,
        sheet_num:req.body.sheet_num,
        pay_per_onekm:req.body.pay_per_onekm,
        //profile_image:req.body.profile_image,
        password:req.body.password,
        created:today
    }

    VehicleRegister.findOne({
        
        email:req.body.email
    })
    .then(user =>{
        if(!user){
            bcrypt.hash(req.body.password , 10 ,(err , hash)=>{
                userData.password = hash
                VehicleRegister.create(userData)
                .then(user => {
                    res.json({status:user.email + 'registered!'})
                })
                .catch(err => {
                    res.send('error :' + err)
                })
            })
        }
        else{
            res.json({error:'VehicleRegister already exists'})
        }
    })
    .catch(err => {
        res.send('error:' +err)
    })
})

// vehicle.post('/imageupload' , (req , res)=>{
//     const today = new Date()
//     const userData = {
        
//         vehicle_photo:req.body.vehicle_photo,
//         profile_image:req.body.profile_image,
        
//         created:today
//     }
//     .then(user =>{
//         if(!user){
            
//                 VehicleRegister.create(userData)
//                 .then(user => {
//                     res.json({status:user.vehicle_photo + 'Submited!'})
//                 })
//                 .catch(err => {
//                     res.send('error :' + err)
//                 })
            
//         }
//         else{
//             res.json({error:'ImageUpload already exists'})
//         }
//     })
//     .catch(err => {
//         res.send('error:' +err)
//     })

    
    
// })

vehicle.post('/login' ,(req , res)=>{
    VehicleRegister.findOne({
        email:req.body.email
    })
    .then(user=>{
        if(user){
            if(bcrypt.compareSync(req.body.password , user.password)){
                const payload ={
                    _id:user._id,
                    first_name:user.first_name,
                    last_name:user.last_name,
                    address:user.address,
                    email:user.email,
                    contactNo:user.contactNo,
                    oVehicle:user.oVehicle,
                    // withDriver:user.withDriver,
                    // withoutDriver:user.withoutDriver,
                    //vehicle_photo:user.vehicle_photo,
                    vehicle_model:user.vehicle_model,
                    supplier_name:user.supplier_name,
                    vehicle_no:user.vehicle_no,
                    begingdate:user.begingdate,
                    endingdate:user.endingdate,
                    location:user.location,
                    sheet_num:user.sheet_num,
                    pay_per_onekm:user.pay_per_onekm,
                    //profile_image:user.profile_image,
                                
                }
                let token = jwt.sign(payload , process.env.SECRET_KEY ,{
                    expiresIn:1440
                })
                res.send(token)
            }else{
                res.json({error:"VehicleRegister does not exist"})
            }
        }else{
            res.json({error:"VehicleRegister does not exist"})
        }
    })
    .catch(err =>{
        res.send('error:' +err)
    })
})



vehicle.get('/profile' ,(req , res)=>{
    var decoded = jwt.verify(req.headers['authorization'] ,process.env.SECRET_KEY)

    VehicleRegister.findOne({
        _id:decoded._id
    })
    .then(user=>{
        if(user){
            res.json(user)
        }else{
            res.send("VehicleRegister does not exist")
        }
    })
    .catch(err=>{
        res.send('error: ' +err)
    })
})

//route GET
//desc loads form
// vehicle.get('/', (req ,res)=>{
//     gfs.files.find().toArray((err , files)=>{
//         //check if file
//         if(!files || files.length === 0){
//            res.render('index' ,{files:false});
//         }else{
//             files.map(file =>{
//                 if(file.contentType === 'image/jpeg' || file.contentType === 'image/png'){
//                     file.isImage = true;
//                 }else{
//                     file.isImage = false;
//                 }
//             });
//             res.render('index' ,{files:files});
//         }
        
//     });
// });

//route POST/upload
//desc Uploads file to DB

// vehicle.post('/upload' , upload.single('file') , (req ,res)=>{
//     // res.json({file: req.file});
//     res.redirect('/');

    

// });

//route get/files
//desc display all files in json

// vehicle.get('/files' ,(req ,res)=>{
//     gfs.files.find().toArray((err , files)=>{
//         //check if file
//         if(!files || files.length === 0){
//             return res.status(404).json({
//                 err:'No file exit'
//             });
//         }
//         return res.json(files);
//     });
// });

//route get/files/:filename
//desc display single file object

// vehicle.get('/files/:filename' ,(req ,res)=>{
//     gfs.files.findOne({filename: req.params.filename} ,(err , file)=>{
//         //check if file
//         if(!file || file.length === 0){
//             return res.status(404).json({
//                 err:'No file exit'
//             });
//         }
//         return res.json(file);
//     });
// })

//route get/image/:filename
//desc display image

// vehicle.get('/image/:filename' ,(req ,res)=>{
//     gfs.files.findOne({filename: req.params.filename} ,(err , file)=>{
//         //check if file
//         if(!file || file.length === 0){
//             return res.status(404).json({
//                 err:'No file exit'
//             });
//         }
//         //check if image
//         if(file.contentType === 'image/jpeg' || file.contentType === 'img/png'){
//             //Read output to browser
//             const readstream = gfs.createReadStream(file.filename);
//             readstream.pipe(res);
//         }else{
//             res.status(404).json({
//                 err:'Not an image'
//             });
//         }
//     });
// });

//route  delete /files/:id
// desc delete file

// vehicle.delete('/files/:id' ,(req ,res)=>{
//     gfs.remove({_id:req.params.id , root:'upload'},(err ,gridStore)=>{
//         if(err){
//             return res.status(404).json({err: err});
//         }
//         res.redirect('/');
//     });
// })


module.exports = vehicle
