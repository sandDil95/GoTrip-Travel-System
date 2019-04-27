import React, { Component } from 'react';
import { BrowserRouter as Router , Route } from 'react-router-dom';
import Home from './Home';
import Vehicle from './Vehicle';
import Package from './Package';
import Tailor from './Tailor';
import VehicleBooking from './VehicleBooking';
import Register from './Register';
import Login from './Login';
import SupRegister from '../supplier/Register';
import SupLogin from '../supplier/Login';
import Supplier from '../supplier/Supplier';

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
                        <Route path="/login" exact component={Login}/>
                        <Route path="/register" exact component={Register}/>
                        <Route path="/supplier-login" exact component={SupLogin}/>
                        <Route path="/supplier-register" exact component={SupRegister}/>
                        <Route path="/supplier" exact component={Supplier}/>
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