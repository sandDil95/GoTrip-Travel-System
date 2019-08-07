import React, { Component } from 'react';
import { BrowserRouter as Router , Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import About from './About';
import VehicleReg from './VehicleReg';
import HotelReg from './HotelReg';
import NotifyEndTrip from './NotifyEndTrip';
import Register from './Register';
import CHome from '../customer/Home';
import Profile from './Profile'


class Supplier extends Component {
  constructor(props){
      super(props);
      this.state = {
          email : props.location.state.email
      }
  }
  componentDidMount(){
      console.log(this.state.email+"            sandxxxxx");
  }
  render() {
    return (
        <Router>
            <div className=" d-flex h-100 flex-column">
              <Header/>
              <section>
                <Route path="/" exact component={CHome}/>
                <Route path="/supplier" exact component={Home}/>

                <Route path="/supplier/vehiclereg" exact component={VehicleReg}/>
                <Route path="/supplier/hotelreg" exact component={HotelReg}/>
                <Route path="/supplier/About-Us" exact component={About}/>
                <Route path="/supplier/NotifyEndTrip" exact component={NotifyEndTrip}/>

                <Route path="/supplier/Register" exact component={Register}/>

                <Route path="/profile" exact component={Profile}/>


                <Route path="/supplier/vehiclereg" exact render={(props) => <VehicleReg email={this.state.email} {...props} />} />
                {/* <Route path="/supplier/vehiclereg" exact component={() => <VehicleReg something={this.state.email}/>} /> */}
                {/* <Route path="/supplier/vehiclereg" exact component={VehicleReg} something={this.state.email}/> */}
                <Route path="/supplier/hotelreg" exact render={(props) => <HotelReg email={this.state.email} {...props} />}/>
                <Route path="/supplier/About-Us" exact render={(props) => <About email={this.state.email} {...props} />}/>
                <Route path="/supplier/Register" exact render={(props) => <Register email={this.state.email} {...props} />} />
                <Route path="/profile" exact render={(props) => <Profile email={this.state.email} {...props} />} />

              </section>
              <Footer/>
            </div>
        </Router>
    );
  }
}

export default Supplier;