import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './css/Individual.css';
// import hotelimage from '../../assets/hotel.jpg';
import vehicleImage from '../../assets/vehicle.png';
import driverImage from '../../assets/vehicledriver.jpg';
import hotelImage from '../../assets/hotell.jpg';
import axios from 'axios';


class Individual extends Component {
    constructor(props){
        super(props);
        this.state = {
            pickupPlace:'',
            arrivalDate:'',
            adults:'',
            child:'',
            duration:'',
            budget:'',
            redirect: false,
            formError : {
                pickupPlace:'',
                arrivalDate:'',
                adults:'',
                child:'',
                duration:'',
                budget:'',
            }
        }
        this.handlePlaceChange = this.handlePlaceChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleAdultChange = this.handleAdultChange.bind(this);
        this.handleChildChange = this.handleChildChange.bind(this);
        this.handleDurationChange = this.handleDurationChange.bind(this);
        this.handleBudgetChange = this.handleBudgetChange.bind(this);
        this.addPlace = this.addPlace.bind(this);
    }

    handlePlaceChange(e){
        this.setState({ pickupPlace:e.target.value })
    }
    handleDateChange(e){
        this.setState({ arrivalDate: e.target.value })
    }
    handleAdultChange(e){
        this.setState({ adults: e.target.value }) 
    }
    handleChildChange(e){
        this.setState({ child: e.target.value })
    }
    handleDurationChange(e){
        this.setState({ duration: e.target.value })
    }
    handleBudgetChange(e){
        this.setState({ budget: e.target.value })
    } 
    addPlace(e){
        e.preventDefault();
        const placeAdd = {
            pickupPlace : this.state.pickupPlace,
            arrivalDate : this.state.arrivalDate,
            adults : this.state.adults,
            child: this.state.child,
            duration: this.state.duration,
            budget : this.state.budget,
        }
            console.log(placeAdd);
            axios.post('http://localhost:4000/individual-booking/vehicle-booking/add',placeAdd)
                .then(res => {
                    alert("Successfull Booking")
                    console.log(res);
                    this.setState({ redirect: this.state.redirect === false })
                })
                .catch(err => { console.log(err) });
        
        
    }

    render(){
        return(
            <main className="inner cover lead" role="main">
            {/* <div class="container">
                <div class="jumbotron">
                    <h1>Bootstrap Tutorial</h1>
                    <p>Bootstrap is the most popular HTML, CSS, and JS framework for developing
                    responsive, mobile-first projects on the web.</p>
                </div>
                <p>This is some text.</p>
                <p>This is another text.</p>
            </div> */}
            <div className="jumbotron">
                <h2>Reserve the Vehicles , Drivers and hotel accommodations on Your Desire</h2>
                <p>We benefits You with reserving <b>Vehicles</b>, <b>Drivers with Vehicle</b> and <b>Hotel Accomodations</b> separately along with the payment facilities. </p>
                <br/><br/>
                <div className="row">
                    {/* individually vehicle booking */}
                    <div className="card">
                        <span>
                            <img className="card-img-top" align="middle" src={vehicleImage} alt="Avatar" id="avatar"></img>
                        </span>
                        <div >
                            <h4 className="card-title"><b>Vehicle</b></h4>
                            <p>Supply Vehicle on customer desire</p><br/>
                            <button className="btn btn-primary" data-target="#vehicle" data-toggle="modal" data-whatever="@vehicle">Click >>></button>
                            <div className="modal fade" id="vehicle">
                                <div className="modal-dialog modal-dialog-centered modal-lg">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h2 className="modal-title">Vehicle Booking Form</h2>
                                            <button type="button" className="vehicleClass" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                        </div>
                                        <div className="modal-body">
                                            <form onSubmit={this.addPlace} method="place">
                                                <div className="form-group">
                                                    <label htmlFor="place" className="col-form-label">Pickup Place:</label>
                                                    <input type="text" className="form-control" onChange={this.handlePlaceChange} name="pickupPlace" value={this.state.pickupPlace} placeholder="Enter Pickup place"/>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="arrivaldate" className="col-form-label">Arrival Date:</label>
                                                    <input type="date" className="form-control" onChange={this.handleDateChange} name="arrivalDate" value={this.state.arrivalDate} />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="adults" className="col-form-label">No of Adults:</label>
                                                    <input type="number" className="form-control" onChange={this.handleAdultChange} name="adults" value={this.state.adults} placeholder="Enter count of adults"/>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="child" className="col-form-label">No of child:</label>
                                                    <input type="number" className="form-control" onChange={this.handleChildChange} name="pickupChild" value={this.state.child} placeholder="Enter count of children"/>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="duration" className="col-form-label">Tour Duration:</label>
                                                    <input type="number" className="form-control" onChange={this.handleDurationChange} name="duration" value={this.state.duration} placeholder="Enter count of days"/>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="budget" className="col-form-label">Approximate Budget:</label>
                                                    <input type="number" className="form-control" onChange={this.handleBudgetChange} name="budget" value={this.state.budget} placeholder="Approximate budget for tour"/>
                                                </div>
                                                {/* <div className="form-group">
                                                    <label htmlFor="budget" className="col-form-label">Approximate Budget:</label>
                                                    <input type="number"  className="form-control" onChange={this.handleBudgetChange} name="budget" value={this.state.budget} placeholder="Approximate budget for tour"/>
                                                </div> */}
                                                <button type="submit"  className="btn btn-primary btn-block">Submit</button>
                                            </form>
                                            { this.state.redirect && (
                                                <Redirect to={'/places'}/>
                                            ) }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div><br/>
                    </div>
                    
                    {/* individually vehicle with driver booking */}
                    <div className="card">
                        <span>
                            <img src={driverImage} alt="Avatar" align="middle" id="avatar"></img>
                        </span>
                        <div>
                        <br/><br/>
                            <h4 className="card-title"><b>Vehicle with Driver</b></h4>
                            <p>Supply Vehicle with Driver on customer desire</p>
                            <button className="btn btn-primary" data-target="#vehicleDriver" data-toggle="modal" data-whatever="@vehicleDriver">Click >>></button>
                            <div className="modal fade" id="vehicleDriver">
                                <div className="modal-dialog modal-dialog-centered modal-lg">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h2 className="modal-title">Vehicle Booking Form</h2>
                                            <button type="button" className="vehicleDriverClass" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                        </div>
                                        <div className="modal-body">
                                            <form >
                                                <div className="form-group">
                                                    <label htmlFor="inputName" className="col-form-label">Name</label>
                                                    <input type="text" className="form-control" id="inputName" placeholder="Enter your name"/>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="inputEmail" className="col-form-label">Email</label>
                                                    <input type="email" className="form-control" id="inputEmail" placeholder="Enter your email"/>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="inputNic" className="col-form-label">NIC</label>
                                                    <input type="text" className="form-control" id="inputNIC" placeholder="Enter your NIC"/>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="inputPassword" className="col-form-label">Password</label>
                                                    <input type="password" className="form-control" id="inputPassword" placeholder="Enter your Password"/>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="submit" className="btn btn-primary btn-block">Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div><br/>
                    </div>
                    
                    {/* individually hotel accomadation booking */}
                    <div className="card">
                        <span>
                            <img src={hotelImage} alt="Avatar" align="middle" id="avatar"></img>
                        </span>
                        <div>
                            <h4 className="card-title"><b>Hotel Accomadations</b></h4>
                            <p>Supply Hotel Accomadations on customer desire</p>
                            <button className="btn btn-primary" data-target="#hotel" data-toggle="modal" data-whatever="@hotel">Click >>></button>
                            <div className="modal fade" id="hotel">
                                <div className="modal-dialog modal-dialog-centered modal-lg">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h2 className="modal-title">Hotel Accomadations Booking Form</h2>
                                            <button type="button" className="hotelClass" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                        </div>
                                        <div className="modal-body">
                                            <form>
                                                <div className="form-group">
                                                    <label htmlFor="inputName" className="col-form-label">Name</label>
                                                    <input type="text" className="form-control" id="inputName" placeholder="Enter your name"/>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="inputEmail" className="col-form-label">Email</label>
                                                    <input type="email" className="form-control" id="inputEmail" placeholder="Enter your email"/>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="inputNic" className="col-form-label">NIC</label>
                                                    <input type="text" className="form-control" id="inputNIC" placeholder="Enter your NIC"/>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="inputPassword" className="col-form-label">Password</label>
                                                    <input type="password" className="form-control" id="inputPassword" placeholder="Enter your Password"/>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="submit" className="btn btn-primary btn-block">Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div><br/>
                    </div>
                    
                </div>
            </div>
            
                
            </main>
        )
    }
}
export default Individual;