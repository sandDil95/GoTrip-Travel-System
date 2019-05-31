import React, {Component} from 'react';
import './css/Header.css';
// eslint-disable-next-line
import {BrowserRouter as Router,Routes,Link} from "react-router-dom";
import imglogo from '../../assets/logo.png';

class Header extends Component{
    render(){
        return(
            // <header className="masthead mb-auto">
            //     <div className="inner">
            //         <h1>GoTrip</h1>
            //         <nav className="nav nav-masthead justify-content-center">
            //             <a className="nav-link" href="#">Home</a>
            //             <a className="nav-link" href="#">About</a>
            //         </nav>
            //     </div>
            // </header>
            <div>
                <nav className="navbar navbar-expand-lg">
                        <Link to="/" className="nav-link">
                            <div className="navbar-brand active">
                                <img className="imglogo" src={imglogo} alt=""/>
                            </div>
                        </Link>
                    {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button> */}
                    <nav id="navbarCollapse" className="nav nav-masthead ">
                        <ul className="navbar-nav mr-auto">
                        
                            
                            <li className="nav-item active">
                                <Link to="/" className="nav-link">Accomadations</Link>
                            </li>
                            <li className="nav-item active">
                                <Link to="/vehicle" className="nav-link">Vehicles</Link>
                            </li>
                            <li className="nav-item active">
                                <Link to="/Travel-Packages" className="nav-link">Travel-Packages</Link>
                            </li>
                            <li className="nav-item active">
                                <Link to="/Tailor-Made-Tour" className="nav-link">Tailor-Made Tour</Link>
                            </li>
                            <li className="nav-item active">
                                <Link to="/Aboutus" className="nav-link">About Us</Link>
                            </li>
                            
                        </ul>
                    </nav>

                    <div className="dropdown">
                        <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Supplier
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <Link to="/supplier-login" className="nav-link">SignIn</Link>
                            <Link to="/supplier-register" className="nav-link">SignUp</Link>
                        </div>
                    </div>
                    {/* <div className="main-menubar d-flex align-items-center">
                        <div className="main-menubar d-flex align-items-center">
                            <nav className="hide">
                                <a href="#home">Home</a>
                                <a href="#about">About</a>
                            </nav>
                        </div>
                        <div class="menu-bar">
                            <span class="Inr Inr-menu">
                                ::before
                            </span>
                        </div>
                    </div> */}
                </nav>
            </div>
        )
    }
}
export default Header;