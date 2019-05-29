import React, { Component } from 'react';
import { BrowserRouter as Router , Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import About from './About';

import HotelRegister from './HotelRegister';
import VehicleRegister from './VehicleRegister';
import Login from './Login';
import Notify from './NotifyEndTrip';

import VehicleReg from './VehicleReg';

import Register from './Register';

import Profile from './Profile'


class Supplier extends Component {
  render() {
    return (
        <Router>
            <div className=" d-flex h-100 flex-column">
              <Header/>
              <section>
                <Route path="/supplier" exact component={Home}/>
                <Route path="/supplier/vehiclereg" exact component={VehicleReg}/>
                <Route path="/supplier/About-Us" exact component={About}/>
                <Route path = "/supplier/hotel-registration" exact component={HotelRegister}/>
                <Route path = "/supplier/vehicle-registration" exact component={VehicleRegister}/>
                <Route path ="/supplier/login" exact component ={Login}/>
                <Route path = "/supplier/send-email" exact component = {Notify} />
                <Route path="/supplier/profile" exact component={Profile}/>

              </section>
              <Footer/>
            </div>
        </Router>
    );
  }
}

export default Supplier;
