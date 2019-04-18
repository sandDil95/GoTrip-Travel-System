const express = require("express");
const path = require('path');
const bodyParser = require('body-parser');
const crypto = require('crypto');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const users = express.Router();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const User = require("../models/User");


users.use(cors())

users.use(bodyParser.json());
users.use(methodOverride('_method'));
process.env.SECRET_KEY = 'secret'

//Mongo URI

const mongoURI =  'mongodb://localhost:27017/goTrip'

//Create mongo connection

const conn = mongoose.createConnection(mongoURI);

//Init gfs

let gfs;
conn.once('open' , ()=>{
    //Init stream
    gfs = Grid(conn.db , mongoose.mongo);
    gfs.collection('uploads');
})

//image upload

//Create storage engine

const storage = new GridFsStorage({
    url:mongoURI,
    file:(req , file)=>{
        return new Promise((resolve , reject)=>{
            crypto.randomBytes(16 ,(err ,buf)=>{
                if(err){
                    return reject(err);
                }
                const filename = buf.toString('hex') + path.extname(file.originalname);
                const fileInfo ={
                    filename:filename ,
                    bucketName:'uploads'
                };
                resolve(fileInfo);
            });
        })
    }
});

const upload =multer({storage});


users.post('/register' , (req , res)=>{
    const today = new Date()
    const userData = {
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        address:req.body.address,
        email:req.body.email,
        contactNo:req.body.contactNo,
        password:req.body.password,
        file:req.body.file,
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

users.post('/login' ,(req , res)=>{
    User.findOne({
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
                    file:user.file
                }
                let token = jwt.sign(payload , process.env.SECRET_KEY ,{
                    expiresIn:1440
                })
                res.send(token)
            }else{
                res.json({error:"User does not exist"})
            }
        }else{
            res.json({error:"User does not exist"})
        }
    })
    .catch(err =>{
        res.send('error:' +err)
    })
})

users.post('/login' , (req , res)=>{
    User.findOne({
        email:req.body.email
    })
    .then(user=>{
        if(user){
            if(bcrypt.compareSync(req.body.password , user.password)){
                const payload = {
                    _id:user._id,
                    first_name:user.first_name,
                    last_name:user.last_name,
                    address:user.address,
                    email:user.email,
                    contactNo:user.contactNo,
                    file:user.file
                }
                let token = jwt.sign(payload , process.env.SECRET_KEY ,{
                    expiresIn:1440
                })
                res.send(token)
            }else{
                res.json({error:"User does not exist"})
            }
        }else{
            res.json({error:"User does not exist"})
        }
    })
    .catch(err =>{
        res.send('error: ' +err)
    })

})

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

//route GET
//desc loads form
users.get('/', (req ,res)=>{
    gfs.files.find().toArray((err , files)=>{
        //check if file
        if(!files || files.length === 0){
           res.render('index' ,{files:false});
        }else{
            files.map(file =>{
                if(file.contentType === 'image/jpeg' || file.contentType === 'image/png'){
                    file.isImage = true;
                }else{
                    file.isImage = false;
                }
            });
            res.render('index' ,{files:files});
        }
        
    });
});

//route POST/upload
//desc Uploads file to DB

users.post('/upload' , upload.single('file') , (req ,res)=>{
    // res.json({file: req.file});
    res.redirect('/');

    

});

//route get/files
//desc display all files in json

users.get('/files' ,(req ,res)=>{
    gfs.files.find().toArray((err , files)=>{
        //check if file
        if(!files || files.length === 0){
            return res.status(404).json({
                err:'No file exit'
            });
        }
        return res.json(files);
    });
});

//route get/files/:filename
//desc display single file object

users.get('/files/:filename' ,(req ,res)=>{
    gfs.files.findOne({filename: req.params.filename} ,(err , file)=>{
        //check if file
        if(!file || file.length === 0){
            return res.status(404).json({
                err:'No file exit'
            });
        }
        return res.json(file);
    });
})

//route get/image/:filename
//desc display image

users.get('/image/:filename' ,(req ,res)=>{
    gfs.files.findOne({filename: req.params.filename} ,(err , file)=>{
        //check if file
        if(!file || file.length === 0){
            return res.status(404).json({
                err:'No file exit'
            });
        }
        //check if image
        if(file.contentType === 'image/jpeg' || file.contentType === 'img/png'){
            //Read output to browser
            const readstream = gfs.createReadStream(file.filename);
            readstream.pipe(res);
        }else{
            res.status(404).json({
                err:'Not an image'
            });
        }
    });
});

//route  delete /files/:id
// desc delete file

users.delete('/files/:id' ,(req ,res)=>{
    gfs.remove({_id:req.params.id , root:'upload'},(err ,gridStore)=>{
        if(err){
            return res.status(404).json({err: err});
        }
        res.redirect('/');
    });
})


module.exports = users
