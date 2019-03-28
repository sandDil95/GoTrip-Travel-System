var express = require("express")
var cors =  require("cors")
var bodyParser = require("body-parser")
var app = express()
var mongoose = require("mongoose")
var port = process.env.PORT || 4000

app.use(bodyParser.json())
app.use(cors())
app.use(
    bodyParser.urlencoded({
        extended:false
    })
)

const mongoURI = 'mongodb://localhost:27017/goTrip'

mongoose
    .connect(mongoURI , {useNewUrlParser:true})
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err))

var Users = require('../backend/routes/Users')

app.use('/user' , Users)

app.listen(port , () =>{
    console.log("Server is running on port :" +port)
})