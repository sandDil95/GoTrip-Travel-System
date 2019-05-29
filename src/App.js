import React, { Component } from 'react';
import { BrowserRouter as Router , Route } from 'react-router-dom';
import Customer from './component/customer/Customer';
// import Vehicle from './component/customer/Vehicle';


// import Login from './component/supplier/Login';
// import Register from './component/supplier/Register';
// import VehicleBooking from './component/customer/VehicleBooking';
// import Log from './component/customer/Login';
// import Reg from './component/customer/Register';

// import Tailor from './component/customer/Tailor';
// import Individual from './component/customer/Individual';
// import About from './component/customer/About';
// import Package from './component/customer/Package';


class App extends Component {
  render() {
    return (
        <Router>
            
            <div className="cover-container d-flex h-100  mx-auto flex-column">
            

            <Route path="/" exact component={Main}/>
            <Route path="/customer" exact component={Customer}/>
            <Route path="/supplier" exact component={Supplier}/>
            <Route path="/vehicle" exact component={Vehicle}/>
            
            

            <Route path="/" exact component={Customer}/>
            {/* <Route path="/customer" exact component={Customer}/> */}
            {/* <Route path="/supplier" exact component={Supplier}/> */}
            {/* <Route path="/vehicle" exact component={Vehicle}/>
            <Route path ="/login" exact component = {Login}/>
            <Route path ="/register" exact component = {Register}/>
            <Route path="/vehiclebooking" exact component={VehicleBooking}/>
            <Route path="/log" exact component={Log}/>
            <Route path="/reg" exact component={Reg}/> */}

            {/* <Route path="/customer/About-Us" exact component={About}/>
            <Route path="/customer/Booking" exact component={Individual}/>
            <Route path="/customer/Travel-Packages" exact component={Package}/>
            <Route path="/customer/Tailor-Made-Tour" exact component={Tailor}/> */}
          </div>
        </Router>
    );
  }
}

export default App;
