import React, {Component} from 'react';
import './css/Footer.css';

class Footer extends Component{
    render(){
        return(
            <footer>
                <div className="inner">
                
                <div className="row">
                <div class="col-sm-3">
                    <h5>What Can Do</h5>
                    <br></br>
                    Book Tour Package
                <br></br>
               Book Vehicle
                <br></br>
                Book Hotel
                <br></br>
               Create Your Tour
                </div>
                
                <div class="col-sm-3">
                    <h5>Contact Us</h5>
                    <br></br>
                    Mobile: +112367874
                <br></br>
                E-mail: gotrip.lk@gmail.com
                <br></br>
                Fb: GoTrip
                <br></br>
                Insta: GoTrip34
                </div>
                <div class="col-sm-3">
                    <h5>Where We In</h5>
                    <br></br>
                    116, Script Complex,
                <br></br>
               Nawala Road,
                <br></br>
                Nugegoda,
                <br></br>
                Sri Lanka
                </div>

                <div class="col-sm-3">
                    <h5>Our Team</h5>
                    <br></br>
                    Sanduni Dilhara
                <br></br>
               Asangi Sathsarani
                <br></br>
                Gaweshi Dias
                <br></br>
                Nadeesha Shihani
                </div>
                    
                </div>
                <br></br>
                <br></br>
                <h6 class="text-center"> © 2019 All Rights Reserved by GoTrip Team.</h6>
                </div>
            </footer>
        )
    }
}
export default Footer;