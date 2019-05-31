import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import './css/Pkg-detail.css';



class WildLife extends Component {
    render(){
        return(
            <div>
                <Header/>
                <main className="inner cover lead" role="main">
               
                <div class="jumbotron jumbotron-fluid">
                <div id="pkg-detail" className="card">
                     <div class="card-body" >TRAVEL WILD LIFE & ECO</div>
                </div>
                </div>
             
               
                 <div >
                    <h1><u>TRAVEL WILDLIFE & ECO</u></h1>
                    <p>!Starting from </p> 
                 </div>
                 <div class="row">
                    <div class="col-sm-4">
                        <div class="card-left">
                        <div class="card-body">Highlights</div>
                        <ul><p>
                         <li>Pinnawala Elephant Orphanage</li>
                         <li> City of Sigiriya </li>   
                         <li>    Dambulla Cave temple </li> 
                         <li>    Spice garden   </li>   
                         <li>   Elephant back ride </li>
                         <li>    Cultural show in Kandy </li>
                                <li>   Scared city of Kandy </li>
                                <li>    Udawalawa National park </li>
                                <li>    Knuckles Mountain Range </li>
                                <li>    Horton Plains </li>   
                                </p></ul>
                         </div>
                    </div>
                    </div>

                
                     

                <br/><br/><br/>
                <br/><br/><br/>
                <br/><br/><br/>
                <br/><br/><br/>
                <br/><br/><br/>
                <br/><br/><br/>
               
             
                </main>
               
                <Footer/>
            </div>
        )
    }
}
export default WildLife;