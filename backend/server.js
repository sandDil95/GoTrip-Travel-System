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

app.use('/uploads',express.static('uploads'));

// const MongoClient = require(‘mongodb’).MongoClient;
// const uri = "mongodb+srv://sanduni:<password>@cluster0-rygt6.mongodb.net/test?retryWrites=true";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

// mongoose.connect('mongodb+srv://sanduni:sand1234@cluster0-rygt6.mongodb.net/test?retryWrites=true',{ useCreateIndex: true, useNewUrlParser: true, useFindAndModify: false })
// const conn = mongoose.connection;
// conn.on('connected',()=>{
//     console.log('connected to mongodb');
// })

const mongoURI = 'mongodb+srv://sanduni:sand1234@cluster0-rygt6.mongodb.net/test?retryWrites=true'

mongoose
    .connect(mongoURI , {useNewUrlParser:true})
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err))


var Users = require('../backend/routes/Users.js')

var Users = require('../backend/routes/Users');
var Customer = require('../backend/routes/Customer');
var IndividualBookingRoutes = require('./routes/IndividualBooking');
var hotelSearch = require('../backend/routes/HotelSearch');
var vehicleSearch = require('../backend/routes/VehicleSearch');

// Initialize CORS middleware
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

app.use('/user' , Users);
app.use('/customer',Customer);
app.use('/individual-booking',IndividualBookingRoutes);
app.use('/hotel',hotelSearch);
app.use('/vehicle',vehicleSearch);

// app.use((req,res,next) =>{
//     const error = new Error('Not Found');
//     error.status(404);
//     next(error);
// })
// app.use((error,req,res,next)=>{
//     res.status(err.status||500);
//     res.json({
//         error:{
//             message: error.message
//         }
//     })
// })
app.get('/',function(req,res){
    res.send('Hello from Server');
})
app.use('/user' , Users)

app.listen(port , () =>{
    console.log("Server is running on port :" +port)
})