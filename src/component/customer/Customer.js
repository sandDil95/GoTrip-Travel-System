import React, { Component } from 'react';
// import { BrowserRouter as Router , Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
// import Login from './component/pages/login';

class Customer extends Component {
  render() {
    return (
          <div className="cover-container d-flex h-100  mx-auto flex-column">
            <Header/>
            <Home/>
            <Footer/>
            {/* <Route path="/" exact component={Todo}/>
            <Route path="/login" component={Login}/>
            <Route path="/create" component={Create}/> */}
          </div>
    );
  }
}

export default Customer;
