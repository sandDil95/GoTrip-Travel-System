import React, {Component} from 'react';
import './css/Footer.css';

class Footer extends Component{
    render(){
        return(
            <footer className="mastfoot mt-auto">
                <div className="inner">
                        <ul>Contact Us: <br/>
                        <li>Fixed : +94112222222  </li>
                        <li>Mobile : +94702323233</li></ul>
                        <ul>Email Address : gotrip@gmail.com</ul>
                </div>
            </footer>
        )
    }
}
export default Footer;