import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';

class VehicleBooking extends Component {
    constructor(props){
        super(props);
        this.state={
            vehicleId:'',
            email:''
        }
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(e){
        e.preventDefault();
        alert("Successfully Reserved your booking")
    }
    componentDidMount(){
        // this.setState({
        //     vehicleId : this.props.location.state.vehicleId
        // })
        this.state.vehicleId = this.props.location.state.vehicleId;
        this.state.email = this.props.location.state.email;
        console.log(this.state.email+" :email");
        console.log(this.state.vehicleId+" : vehicleid");
        axios.get('http://localhost:4000/vehicle/vehiclebooking/'+this.state.vehicleId+"/"+this.state.email)
        .then(response => {
            console.log(response);
            let vehicleBooking = response.data.map((booking)=>{
                if(booking.onlyVehicle === true){
                    return(
                        <div>
                            <img  src={'http://localhost:4000/uploads/'+booking.vehicleImage} alt="Vehicle Avatar: "/><br/>
                            <span>Vehicle Owner: <span>{booking.vehicleOwner}</span></span><br/>
                            <span>Vehicle Model: <span>{booking.vehicleModel}</span></span><br/>
                            <span>PickUp From: <span>{booking.locations}</span></span><br/>
                            <span>About: <span>Supply vehicle without driver</span></span><br/>
                            <span>Description: <span>{booking.description}</span></span><br/>
                        </div>
                    )
                }else if(booking.onlyVehicle === false){
                    return(
                        <div>
                            <img  src={'http://localhost:4000/uploads/'+booking.vehicleImage} alt="Vehicle Avatar: "/><br/>
                            <span>Vehicle Owner: <span>{booking.vehicleOwner}</span></span><br/>
                            <span>Vehicle Model: <span>{booking.vehicleModel}</span></span><br/>
                            <span>PickUp From: <span>{booking.vehicleOwner}</span></span><br/>
                            <span>About: <span>Supply a vehicle with a Driver </span></span><br/>
                            <span>Description: <span>{booking.description}</span></span><br/><br/><br/>
                        </div>
                    )
                }else{
                    return(
                        <div>
                            <h3>About You:</h3>
                            <span>Full Name:<span>{booking.fullname}</span></span>
                        </div>
                    )
                }
                
            })
            this.setState({vehicleBooking:vehicleBooking});
            console.log("state",vehicleBooking)
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
                            <form className = "form-container" onSubmit={this.onSubmit}>
                                <br/><br/>
                                <h2>Require Booking Details of Vehicle</h2><br/>
                                {this.state.vehicleBooking}
                                <span><button type ="submit" className="btn btn-primary">Reserve</button></span>
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