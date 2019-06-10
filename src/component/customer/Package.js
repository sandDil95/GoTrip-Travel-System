import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import './css/Package.css';

import yala from '../../assets/yala.jpg';
import beach from '../../assets/beach.jpg';
import kandy from '../../assets/kandy.jpg';
import galle from '../../assets/galle.jpg';
import colombo from '../../assets/colombo.jpg';
import {BrowserRouter as Router,Routes,Link} from "react-router-dom";



class Package extends Component {
    render(){
        return(
            <div>
                <Header/>
                <main className="inner cover lead" role="main">

              
                 <div class="card-deck">
                    <div class="card-pkg ">
                        <div class="card-body " id="package">
                            <img class="card-img-top" src={yala}  alt="Card image" ></img><br/><br/>
                            <h4 class="card-title"><font class="font-weight-bold">TRAVEL </font> WILD LIFE & ECO</h4>
                            <button type="submit" onClick={this.onwild} class="btn btn-primary">
                            <Link to="/WildLife" class="btn btn-primary" >INQUIER</Link></button>
                        </div>
                    </div>
                    <div class="card-pkg ">
                        <div class="card-body ">
                            <img class="card-img-top" src={beach} alt="Card image"></img><br/><br/>
                            <h4 class="card-title"><font class="font-weight-bold">TOUR  </font>  TO AMAZING BEACH</h4>
                            <p class="card-text"></p>
                            <button type="submit" onClick={this.beach} class="btn btn-primary">
                            <Link to="/beach" class="btn btn-primary" >INQUIER</Link></button>


                        </div>
                    </div>
                    <div className="card-pkg ">
                        <div className="card-body ">
                            <img className="card-img-top" src={colombo} alt=""/>
                            <h4 className="card-title">Colombo City Tour</h4>
                            <p className="card-text">The Colombo City Tour is Colombo's first ever open deck city tour service launched by Sri Lanka Tourism Development Authority and Ebert Silva Holidays (Pvt) Ltd.</p>
                            <button className="btn btn-primary">Book now>></button>
                        </div>
                   </div>
                   <div className="card-pkg ">
                        <div className="card-body ">
                             <img className="card-img-top" src={yala} alt=""/>
                            <h4 className="card-title">Yala National Park</h4>
                            <p className="card-text">This is the second largest national park in Sri Lanka.Yala is home to Asian elephants, leopards and variety of beautiful endemic birds.</p>
                            <button class="btn btn-primary">Book now>></button>
                        </div>
                    </div>
                    <div className="card-pkg ">
                        <div className="card-body ">
                             <img className="card-img-top" src={kandy} alt=""/>
                            <h4 className="card-title">Kandy</h4>
                            <p className="card-text">The name Kandy was given to the city of Kanda Uda Rata by the British. Its present day Sri Lankan name is Maha Nuwara while the historical name is Senkadagalapura. Kandy history and heritage city of Kandy. </p>
                            <button class="btn btn-primary">Book now>></button>
                        </div>
                    </div>
                    <div className="card-pkg ">
                        <div className="card-body ">
                            <img className="card-img-top" src={galle} alt=""/>
                            <h4 className="card-title">Galle Fort</h4>
                            <p className="card-text">The Galle Fort, also known as the Dutch Fort or the "Ramparts of Galle", is a historical, archaeological and architectural heritage monument.</p>
                            <button className="btn btn-primary">Book now>></button>
                        </div>
                    </div>
                 </div>

  
         <br/><br/><br/>
                    
                  
                  
                    {/* <br/><br/><br/><br/><br/><br/>
                    
                    <br/><br/><br/>
                    <br/><br/><br/>
                    <br/>
                    <br/><br/>
                    <br/><br/><br/>
                    <br/><br/><br/><br/>
                    <br/><br/><br/><br/>
                    <br/><br/><br/>
                    <br/><br/><br/> */}
                    {/* <br/><br/><br/>
                    <br/><br/><br/>
                    <br/><br/><br/>
                    <br/><br/><br/>
                    <br/><br/><br/>
                    <br/><br/><br/>
                    <br/><br/>
                    <br/><br/><br/> */}



                </main>
                <Footer/>
            </div>
        )
    }
}
export default Package;