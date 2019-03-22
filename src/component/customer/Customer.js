import React, { Component } from 'react';
import { BrowserRouter as Router , Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import About from './About';
import Individual from './Individual';
import Package from './Package';
import Tailor from './Tailor';
// import Login from './component/pages/login';

class Customer extends Component {
  render() {
    return (
        <Router>
            <div className=" d-flex h-100 flex-column">
              <Header/>
              <section>
              <Route path="/customer" exact exact component={Home}/>
                <Route path="/customer/About-Us" exact component={About}/>
                <Route path="/customer/Booking" exact component={Individual}/>
                <Route path="/customer/Travel-Packages" exact component={Package}/>
                <Route path="/customer/Tailor-Made-Tour" exact component={Tailor}/>
              </section>
              <Footer/>
            </div>
        </Router>
    );
  }
}

export default Customer;
