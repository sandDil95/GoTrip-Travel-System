import React, {Component} from 'react';
import './css/Header.css';

import {BrowserRouter as  Router, Route,Link ,withRouter} from "react-router-dom";
import imglogo from '../../assets/logo.png';




class Header extends Component{
    logOut(e){
        e.preventDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push('/')
    }
    render(){
        const loginRegLink = (
            <ul className ="navbar-nav">
                <li className = "nav-item">
                    <Link to="/supplier/vehicle-registration" className ="nav-link">
                        Register of Vehicle
                    </Link>
                </li>
                <li className = "nav-item">
                    <Link to="/supplier/hotel-registration" className ="nav-link">
                        Register of Accomadations
                    </Link>
                </li>
                <li className = "nav-item">
                    <Link to="/supplier/login" className ="nav-link">
                        Login
                    </Link>
                </li>
                
            </ul>
        )
        const userLink = (
            <ul className ="navbar-nav">
                <li className = "nav-item">
                    <Link to="/profile" className ="nav-link">
                        User
                    </Link>
                </li>
                <li className = "nav-item">
                    <Link to="/supplier/send-email" className ="nav-link">
                        Report-Genaration
                    </Link>
                </li>
                <li className = "nav-item">
                    <a href="" onClick = {this.logOut.bind(this)} className ="nav-link">
                        Logout
                    </a>
                </li>
            </ul>
        )
        
        return(
            
            <div>
                <nav className="navbar navbar-expand-lg">
                    <div className="navbar-brand">
                        <img className="imglogo" src={imglogo} alt=""/>
                    </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <nav id="navbarCollapse" className="nav nav-masthead">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link to="/supplier" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item active">
                                <Link to="/supplier/About-Us" className="nav-link">About Us</Link>
                            </li>
                            
                            {/* <li className="nav-item active">

                                <Link to="/supplier/Register" className="nav-link">Register</Link>

                                <Link to="/profile" className="nav-link">Profile</Link>

                            </li>
                            <li className="nav-item active">
                                <Link to="/supplier/hotel-registration" className="nav-link">Register of Accomadation</Link>
                            </li>
                            <li className="nav-item active">
                                <Link to="/supplier/vehicle-registration" className="nav-link">Register of Vehicle</Link>
                            </li>
                            <li className="nav-item active">
                                <Link to="/supplier/login" className="nav-link">Login</Link>
                            </li>
                            <li className = "nav-item">
                                <a href="" onClick = {this.logOut.bind(this)} className ="nav-link">
                                    Logout
                                </a>
                            </li> */}
                            
                            
                        </ul>
                        {localStorage.usertoken ?  userLink:loginRegLink}
                       

                            
                

                    </nav>
                   
                </nav>

           </div>

            

            

        )
    }
}
export default withRouter(Header) ;