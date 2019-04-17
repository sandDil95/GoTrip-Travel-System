import React, {Component} from 'react';
import './css/Header.css';
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
                    <div className="navbar-brand" >
                        <img className="imglogo" src={imglogo} alt=""/>
                    </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <nav id="navbarCollapse" className="nav nav-masthead">
                        <ul className="navbar-nav mr-auto">
                            {/* <li className="nav-item active">
                                <a className="nav-link" href="#">
                                    Home
                                    <span className="sr-only">(current)</span>
                                </a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Booking</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Packages</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#">About Us</a>
                            </li> */}
                        </ul>
                    </nav>
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Register
                        </button>
                        <div className="dropdown-menu " aria-labelledby="dropdownMenu2">
                            <button className="dropdown-item" type="button">Customer</button>
                            <button className="dropdown-item" type="button">Supplier</button>

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