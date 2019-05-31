import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import './css/Package.css';
import whale from '../../assets/whale.jpg';
import yala from '../../assets/yala.jpg';
import sigiriya from '../../assets/sigiriya.jpg';
import kandy from '../../assets/kandy.jpg';
import galle from '../../assets/galle.jpg';
import colombo from '../../assets/colombo.jpg';
class Package extends Component {
    render(){
        return(
            <div>
                <Header/>
                <main className="inner cover lead" role="main">
              
                 <div class="card-deck">
                    <div class="card-pkg ">
                        <div class="card-body " id="package">
                            <img class="card-img-top" src={whale}  alt="Card image" ></img><br/>
                            <h4 class="card-title">Mirissa whale watching</h4>
                            <p class="card-text">Blue whales are the biggest animal live on the earth and Mirissa is the one of most suitable spot to watch blue whales and other whales too.</p>
                            <a href="#" class="btn btn-primary">Book now>></a>
                        </div>
                    </div>
                    <div class="card-pkg ">
                        <div class="card-body ">
                            <img class="card-img-top" src={sigiriya} alt="Card image"></img><br/>
                            <h4 class="card-title">Sigiriya</h4>
                            <p class="card-text">sigiriya popular as eighth wonder of the world among the tourists and it was the one of Asia's oldest landscaped garden.</p>
                            <a href="#" class="btn btn-primary">Book now>></a>
                        </div>
                    </div>
                    <div class="card-pkg ">
                        <div class="card-body ">
                            <img class="card-img-top" src={colombo} alt="Card image"></img>
                            <h4 class="card-title">Colombo City Tour</h4>
                            <p class="card-text">The Colombo City Tour is Colombo's first ever open deck city tour service launched by Sri Lanka Tourism Development Authority and Ebert Silva Holidays (Pvt) Ltd.</p>
                            <a href="#" class="btn btn-primary">Book now>></a>
                        </div>
                   </div>
                   <div class="card-pkg ">
                        <div class="card-body ">
                             <img class="card-img-top" src={yala} alt="Card image"></img>
                            <h4 class="card-title">Yala National Park</h4>
                            <p class="card-text">This is the second largest national park in Sri Lanka.Yala is home to Asian elephants, leopards and variety of beautiful endemic birds.</p>
                            <a href="#" class="btn btn-primary">Book now>></a>
                        </div>
                    </div>
                    <div class="card-pkg ">
                        <div class="card-body ">
                             <img class="card-img-top" src={kandy} alt="Card image"></img>
                            <h4 class="card-title">Kandy</h4>
                            <p class="card-text">The name Kandy was given to the city of Kanda Uda Rata by the British. Its present day Sri Lankan name is Maha Nuwara while the historical name is Senkadagalapura. Kandy history and heritage city of Kandy. </p>
                            <a href="#" class="btn btn-primary">Book now>></a>
                        </div>
                    </div>
                    <div class="card-pkg ">
                        <div class="card-body ">
                            <img class="card-img-top" src={galle} alt="Card image"></img>
                            <h4 class="card-title">Galle Fort</h4>
                            <p class="card-text">The Galle Fort, also known as the Dutch Fort or the "Ramparts of Galle", is a historical, archaeological and architectural heritage monument.</p>
                            <a href="#" class="btn btn-primary">Book now>></a>
                        </div>
                    </div>
                 </div>
  
         <br/><br/><br/>
                    
                  
                </main>
                <Footer/>
            </div>
        )
    }
}
export default Package;