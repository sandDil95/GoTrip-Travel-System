var express = require("express")
var cors =  require("cors")
var bodyParser = require("body-parser")
var app = express()
var mongoose = require("mongoose")
const morgan = require('morgan');
var port = process.env.PORT || 4000

app.use(morgan('dev'));
app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended:false }))

//app.use('/uploads',express.static('uploads'));


const mongoURI = 'mongodb://localhost:27017/goTrip'

mongoose
    .connect(mongoURI , {useNewUrlParser:true})
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err))

//Init gfs

// let gfs;
// conn.once('open' , ()=>{
//     //Init stream
//     gfs = Grid(conn.db , mongoose.mongo);
//     gfs.collection('uploads');
// })

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
//var Vehicle = require('./routes/Vehicle.js');

var Vehicle = require('./routes/Vehicle');
var Hotel = require('./routes/Hotel');
var Users = require('../backend/routes/Users');
var Customer = require('../backend/routes/Customer');
var IndividualBookingRoutes = require('./routes/IndividualBooking');
var hotelSearch = require('../backend/routes/HotelSearch');
var vehicleSearch = require('../backend/routes/VehicleSearch');
var NotifyEndTrip = require('../backend/routes/NotifyEndTrip');

// Initialize CORS middleware
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

app.use('/vehicleReg' , Vehicle);
app.use('/hotelReg' ,Hotel);
//app.use('/imageUp' ,Vehicle);
app.use('/vehicleLog' ,Vehicle);
//app.use('/hotelLog' ,Hotel);
app.use('/user' , Users);
app.use('/customer',Customer);
app.use('/individual-booking',IndividualBookingRoutes);
app.use('/hotel',hotelSearch);
app.use('/vehicle',vehicleSearch);
//app.use('/sendNotify' ,NotifyEndTrip);

app.get('/',function(req,res){
    res.send('Hello from Server');
})


app.listen(port , () =>{
    console.log("Server is running on port :" +port)
})