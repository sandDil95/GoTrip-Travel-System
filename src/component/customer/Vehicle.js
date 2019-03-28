import React, { Component } from 'react';
import './css/Vehicle.css';
// import vehi from '../../assets/vehi.jpg';

class Vehicle extends Component {
    render(){
        return(
            // <div>
            //     <img src={vehi} alt="test" class="img-responsive"/>
            //     <div class="carousel-caption">
            //         <form>
            //             <input type="text" placeholder="Enter your Name"/><br/>
            //             <input type="text" plsceholder="Enter your Email"/><br/>
            //             <input type="submit" value="Submit"/>
            //         </form>
            //     </div>
            // </div>
            <div className="container-fluid bg">
                <div className="row">
                    <div clasName="col-md-4 col-sm-4 col-xs-12"></div>
                    <div className="col-md-4 col-sm-4 col-xs-12">
                        <form className="form-container">
                            <h2>Vehicle Booking Form</h2>
                            <div className="form-group">
                                <label for="inputName">Name</label>
                                <input type="text" class="form-control" id="inputName" placeholder="Enter your name"/>
                            </div>
                            <div className="form-group">
                                <label for="inputEmail">Email</label>
                                <input type="email" class="form-control" id="inputEmail" placeholder="Enter your email"/>
                            </div>
                            <div className="form-group">
                                <label for="inputNic">NIC</label>
                                <input type="text" class="form-control" id="inputNic" placeholder="Enter your NIC"/>
                            </div>
                            <button type="submit" class="btn btn-primary btn-block">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Vehicle;