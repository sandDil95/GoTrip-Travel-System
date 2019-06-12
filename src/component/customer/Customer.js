import React, { Component } from 'react';
import { BrowserRouter as Router , Route } from 'react-router-dom';
import Aboutus from './Aboutus';
import Home from './Home';
import Vehicle from './Vehicle';
import Package from './Package';
import Tailor from './Tailor';
import VehicleBooking from './VehicleBooking';
import HotelBooking from './HotelBooking';
// import Register from './Register';
import Register from '../customer/Register_c';
import Register1 from '../customer/Register_c.1';
import Login from './Login';
import Login1 from './Login.1';
import SupRegister from '../supplier/Register';
import SupLogin from '../supplier/Login';
import Supplier from '../supplier/Supplier';
import WildLife from './WildLife';
import beach from './beach';

class Customer extends Component {
    render(){
        return(
            <Router>
                <div className=" d-flex h-100 flex-column">
                    {/* <Header/> */}
                    <section>
                        <Route path="/" exact component={Home}/>
                        <Route path="/Vehicle" exact component={Vehicle}/>
                        <Route path="/Travel-Packages" exact component={Package}/>
                        <Route path="/Tailor-Made-Tour" exact component={Tailor}/>
                        <Route path="/Vehicle/vehiclebooking" exact component={VehicleBooking}/>
                        <Route path="/Hotel/hotelbooking" exact component={HotelBooking}/>
                        <Route path="/Aboutus" exact component={Aboutus}/>
                        <Route path="/login" exact component={Login}/>
                        <Route path="/h-login" exact component={Login1}/>
                        <Route path="/register" exact component={Register}/>
                        <Route path="/h-register" exact component={Register1}/>
                        <Route path="/supplier-login" exact component={SupLogin}/>
                        <Route path="/supplier-register" exact component={SupRegister}/>
                        <Route path="/supplier" exact component={Supplier}/>
                        <Route path="/WildLife" exact component={WildLife}/>
                        <Route path="/beach" exact component={beach}/>
                        {/* <Route path="/customer/login" exact component={Login}/>
                        <Route path="/customer/register" exact component={Register}/> */}
                    </section>
                    {/* <Footer/> */}
                </div>
            </Router>
        )
    }
}
export default Customer;