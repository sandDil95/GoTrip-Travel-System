import React, {Component} from 'react';
import './css/Header.css';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import imglogo from '../../assets/logo.png';

class Header extends Component{
    render(){
        return(
            
            <header>
                <nav className="navbar navbar-expand-lg fixed-top">
                    <a className="navbar-brand" href="#">
                        <img className="imglogo" src={imglogo}/>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <nav id="navbarCollapse" className="nav nav-masthead justify-content-center">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link to="/supplier" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item active">
                                <Link to="/supplier/About-Us" className="nav-link">About Us</Link>
                            </li>
                            <li className="nav-item active">
<<<<<<< HEAD
                                <Link to="/supplier/Register" className="nav-link">Register</Link>
=======
                                <Link to="/supplier/View-Profile" className="nav-link">Profile</Link>
>>>>>>> c56e5071fa0f8e03521be43b96e5c1c36c05046b
                            </li>
                            
                        </ul>
                    </nav>
                    
                </nav>
            </header>
        )
    }
}
export default Header;