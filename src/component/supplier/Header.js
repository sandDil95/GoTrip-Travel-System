import React, {Component} from 'react';
import './css/Header.css';
// eslint-disable-next-line
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import imglogo from '../../assets/logo.png';
// import axios from 'axios';

class Header extends Component{
    
    //   componentDidMount(){
    //     axios.get('http://localhost:4000/hotel/username/'+this.state.email) //check vehicle only or vehicle with driver
    //     .then(response => {
    //         console.log("mount")
    //         let vehicles = response.data.map((vehicle) => {
    //             this.setState({vehicleId : vehicle._id}) //get selected vehicle id to send vehicle booking page
    //             console.log(this.state.vehicleId+"response");
    //             return (
    //                 <div key={vehicle._id}>
    //                     <div className="card d-block" id="vehiclecard">
    //                         <img className="card-img-top" src={'http://localhost:4000/uploads/'+vehicle.vehicleImage} alt="Vehicle Avatar: "/><br/>
    //                         <div className="card-body">
    //                             <span> Vehicle Owner: <span>{vehicle.vehicleOwner}</span></span><br/>
    //                             <span> Vehicle Model: <span>{vehicle.vehicleModel}</span></span><br/>
    //                             <span> Location: <span>{vehicle.locations}</span></span><br/>
    //                             {/* <Link to="/customer/vehiclebooking"><button>Book Now</button></Link> */}
    //                             <button type ="submit" className="btn btn-primary" onClick={(e) => {this.bookVehicle(e, this.state.vehicleId)}}>Book Now</button>
                                
    //                             {/* <p class="card-text"></p> */}
    //                         </div>
    //                     </div><br/>
    //                 </div>
    //             )
    //         },error=>{
    //             alert("Not found")
    //         })
    //         // this.setState({ vehicles : vehicles });
    //         // console.log("state",vehicles)
    //     })    
    //   }
    render(){
        return(
            
            <div>
                <nav className="navbar navbar-expand-lg">
                    <div className="navbar-brand">
                        <img className="imglogo" src={imglogo} alt=""/>
                    </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <nav id="navbarCollapse" className="nav nav-masthead">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link to="/supplier/" className="nav-link">Home</Link>
                            </li>
                            
                            <li className="nav-item active">
                                <Link to="/supplier/About-Us" className="nav-link">About Us</Link>
                            </li>
                            <li className="nav-item active">
                                <Link to="/supplier/vehiclereg" className="nav-link">Vehicle-Registration</Link>
                            </li>
                            <li className="nav-item active">
                                <Link to="/supplier/hotelreg" className="nav-link">Hotel-Registration</Link>
                            </li>
                            <li className="nav-item active">

                                {/* <Link to="/supplier/Register" className="nav-link">Register</Link> */}

                                <Link to="/profile" className="nav-link">Profile</Link>

                            </li>
                            
                        </ul>
                    </nav>
                    
                </nav>
            </div>
        )
    }
}
export default Header;