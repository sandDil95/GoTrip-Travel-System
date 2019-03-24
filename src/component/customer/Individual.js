import React, { Component } from 'react';
import './css/Individual.css';
// import hotelimage from '../../assets/hotel.jpg';
import vehicleImage from '../../assets/vehicle.png';
import driverImage from '../../assets/vehicledriver.jpg';
import hotelImage from '../../assets/hotell.jpg';

class Individual extends Component {
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
                    <div className="card">
                        <span>
                            <img className="card-img-top" align="middle" src={vehicleImage} alt="Avatar" id="avatar"></img>
                        </span>
                        <div className="container">
                            <h4 className="card-title"><b>Vehicle</b></h4>
                            <p>Supply Vehicle on customer desire</p><br/>
                            <button href="#" class="btn btn-primary">Click >>></button>
                        </div><br/>
                    </div>
                    
                    <div className="card">
                        <span>
                            <img src={driverImage} alt="Avatar" align="middle" id="avatar"></img>
                        </span>
                        <div className="container">
                        <br/><br/>
                            <h4 className="card-title"><b>Vehicle with Driver</b></h4>
                            <p>Supply Vehicle with Driver on customer desire</p>
                            <button href="#" class="btn btn-primary">Click >>></button>
                        </div><br/>
                    </div>
                    
                    <div className="card">
                        <span>
                            <img src={hotelImage} alt="Avatar" align="middle" id="avatar"></img>
                        </span>
                        <div className="container">
                            <h4 className="card-title"><b>Hotel Accomadations</b></h4>
                            <p>Supply Hotel Accomadations on customer desire</p>
                            <button href="#" class="btn btn-primary">Click >>></button>
                        </div><br/>
                    </div>
                    
                </div>
            </div>
            
                
            </main>
        )
    }
}
export default Individual;