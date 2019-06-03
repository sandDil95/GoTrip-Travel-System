import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';

class VehicleBooking extends Component {
    constructor(props){
        super(props);
        this.state={
            vehicleId:props.location.state.vehicleId,
            picklocation: props.location.state.picklocation,
            droplocation:props.location.state.droplocation,
            start:props.location.state.start,
            end:props.location.state.end,
            email:props.location.state.email
        }
        // this.onSubmit = this.onSubmit.bind(this);
        this.reserved = this.reserved.bind(this);
    }
    // onSubmit(e){
    //     e.preventDefault();
    //     alert("Successfully Reserved your booking")
    // }
    componentDidMount(){
        // this.setState({
        //     vehicleId : this.props.location.state.vehicleId
        // })
        // this.state.vehicleId = this.props.location.state.vehicleId;
        // this.state.email = this.props.location.state.email;
        console.log(this.state.picklocation+" :picklocation");
        console.log(this.state.email+" :email");
        console.log(this.state.vehicleId+" : vehicleid");
        console.log(this.state.start+" : start");
        axios.get('http://localhost:4000/vehicle/vehiclebooking/'+this.state.vehicleId+"/"+this.state.email)
        .then(response => {
            console.log(response);
            let vehicleBooking = response.data.map((booking)=>{
                if(booking.onlyVehicle === true){
                    return(
                        <div key={this.state.vehicleId}>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div class="card">
                                        <img  src={'http://localhost:4000/uploads/'+booking.vehicleImage} alt="Vehicle Avatar: "/><br/>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <h2><span>{booking.vehicleModel}</span></h2><br/><br/>
                                    <span>Pick-Up From: <span>{booking.locations}</span></span><br/><br/>
                                    <span>Drop-Off From: <span>{this.state.droplocation}</span></span><br/><br/>
                                    <span>Pick-Up Date: <span>{this.state.start}</span></span><br/><br/>
                                    <span>Drop-Off Date: <span>{this.state.end}</span></span><br/><br/>
                                    <span>About: <span>Supply vehicle without driver</span></span><br/><br/>
                                    <span>Description: <span>{booking.description}</span></span><br/><br/>
                                </div>
                            </div>    
                            {/* <img id="im"  src={'http://localhost:4000/uploads/'+booking.vehicleImage} alt="Vehicle Avatar: "/><br/>
                            <span>Vehicle Owner: <span>{booking.vehicleOwner}</span></span><br/>
                            <span>Vehicle Model: <span>{booking.vehicleModel}</span></span><br/>
                            <span>PickUp From: <span>{booking.locations}</span></span><br/>
                            <span>About: <span>Supply vehicle without driver</span></span><br/>
                            <span>Description: <span>{booking.description}</span></span><br/> */}
                        </div>
                    )
                }else if(booking.onlyVehicle === false){
                    return(
                        <div key={this.state.vehicleId}>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div class="card">
                                        <img  src={'http://localhost:4000/uploads/'+booking.vehicleImage} alt="Vehicle Avatar: "/>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <h2>Vehicle Model: <span>{booking.vehicleModel}</span></h2><br/><br/>
                                    <span>Pick-Up From: <span>{booking.locations}</span></span><br/><br/>
                                    <span>Drop-Off From: <span>{this.state.droplocation}</span></span><br/><br/>
                                    <span>Pick-Up Date: <span>{this.state.start}</span></span><br/><br/>
                                    <span>Drop-Off From: <span>{this.state.end}</span></span><br/><br/>
                                    <span>About: <span>Supply a vehicle with a Driver </span></span><br/><br/>
                                    <span>Description: <span>{booking.description}</span></span><br/><br/><br/><br/>
                                </div>
                            </div>    
                            {/* <img id="im"  src={'http://localhost:4000/uploads/'+booking.vehicleImage} alt="Vehicle Avatar: "/><br/>
                            <span>Vehicle Owner: <span>{booking.vehicleOwner}</span></span><br/>
                            <span>Vehicle Model: <span>{booking.vehicleModel}</span></span><br/>
                            <span>PickUp From: <span>{booking.vehicleOwner}</span></span><br/>
                            <span>About: <span>Supply a vehicle with a Driver </span></span><br/>
                            <span>Description: <span>{booking.description}</span></span><br/><br/><br/> */}
                        </div>
                    )
                }else{
                    return ''
                }
                // else{
                //     return(
                //         <div key={booking.fullname}>
                //             <h3>About You:</h3>
                //             <span>Full Name:<span>{booking.fullname}</span></span>
                //         </div>
                //     )
                // }
                
            })
            this.setState({vehicleBooking:vehicleBooking});
            console.log("state",vehicleBooking)
        })
    }
    vehicleBook(){
        console.log(this.state.size);
        // axios.get('http://localhost:4000/vehicle/search/'+this.state.size+'/'+this.state.picklocation+'/'+this.state.start+'/'+this.state.end) //check vehicle only or vehicle with driver
        axios.get('http://localhost:4000/vehicle/search/'+this.state.size+'/'+this.state.picklocation) //check vehicle only or vehicle with driver
        .then(response => {
            console.log("didmount")
            let vehicles = response.data.map((vehicle) => {
                this.setState({vehicleId : vehicle._id}) //get selected vehicle id to send vehicle booking page
                console.log(this.state.vehicleId+"response");
                return (
                    <div key={vehicle._id}>
                        <div className="card d-block" id="vehiclecard">
                            <img className="card-img-top" src={'http://localhost:4000/uploads/'+vehicle.vehicleImage} alt="Vehicle Avatar: "/><br/>
                            <div className="card-body">
                                <span> Vehicle Owner: <span>{vehicle.vehicleOwner}</span></span><br/>
                                <span> Vehicle Model: <span>{vehicle.vehicleModel}</span></span><br/>
                                <span> Location: <span>{vehicle.locations}</span></span><br/>
                                {/* <Link to="/customer/vehiclebooking"><button>Book Now</button></Link> */}
                                <button type ="submit" className="btn btn-primary" onClick={(e) => {this.bookVehicle(e, this.state.vehicleId)}}>Book Now</button>
                                
                                {/* <p class="card-text"></p> */}
                            </div>
                        </div><br/>
                    </div>
                )
            },error=>{
                alert("Not found")
            })
            this.setState({ vehicles : vehicles });
            console.log("state",vehicles)
            // this.setState({ booking:response.data })
        })
        .catch(function(error){
            console.log("error");
        })
    }
    reserved(e){
        e.preventDefault();
        const bookingdetails = {
            vehicleId: this.state.vehicleId,
            picklocation: this.state.picklocation,
            droplocation:this.state.droplocation,
            start:this.state.start,
            end:this.state.end,
            email:this.state.email
        }
        axios.post('http://localhost:4000/vehicle/reserved/',bookingdetails)
        .then(response=>{
            alert("Successfully booked")
            // this.props.history.push({
            //     pathname: '/Vehicle/vehiclebooking',
            //     state: {
            //         vehicleId:this.state.vehicleId,
            //         droplocation:this.state.droplocation,
            //         picklocation:this.state.picklocation,
            //         email:this.state.email,
            //         start:this.state.start,
            //         end: this.state.end,
            //     }
            // })
        },error=>{
            alert("failed")
            // if (error instanceof HttpErrorResponse){
            // if(error.response.status===401){
            //     alert("Incorrect Password!!!")
            // }else if(error.response.status===404){
            //     alert("Unauthorized Access")
            // }
            // }
        })
    }
    render(){
        return(
            <div>
                <Header/>
                <div id="contentbodyy">
                    <div className="row">
                        <div className="col-sm-2"></div>
                        <div className="col-sm-8">
                            <form className = "form-container" >
                                <br/><br/>
                                {/* <h2>Reservation</h2><br/> */}
                                {this.state.vehicleBooking}
                                <div className="row">
                                    <div className="col-sm-6"></div>
                                    <div className="col-sm-6">
                                        <span><button type ="submit" onClick={this.reserved} className="btn btn-primary">Reserve</button></span>
                                    </div>
                                </div>    
                            </form>
                        </div>
                        <div className="col-sm-2"></div>
                    </div>
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/>
                </div>
                <Footer/>
            </div>
        )
    }
}
export default VehicleBooking;