import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import './css/pkg-beach.css';
import pinnawala from '../../assets/pinnawala.jpg';
import sigiriya from '../../assets/sigiriya.jpg';
import dambulla from '../../assets/dambulla.jpg';
import nuwaraeli from '../../assets/nuwaraeli.jpg';
import udawalawa from '../../assets/udawalawa.jpg';


class WildLife extends Component {
    render(){
        return(
            <div>
                <Header/>
                <main className="inner cover lead" role="main">
               
                <div id="jumb_b"class="jumbotron jumbotron-fluid"  >
                  
                <div id="pkg-detail" className="card">
                     <div class="card-body" >BEACH TOUR</div>
                </div>
                </div>
             
               
                <div id="description" class="card">
                    <div id="desc"class="card-body"><font class="font-weight-bold">TOUR </font>TO AMAZING BEACH<br/>
                         <p>Sri Lanka is a small Island in Indian ocean hold’s word’s important treasures and this is home to many endemic species with over 7 national parks and forests, mountain rages across the country, here you can get the chance to see our natural riches, endemic wildlife – the most famous being the Udawalawa national park. Sanki Leisure 
                               will make you an unforgettable experience with Sri Lanka wild life & eco tour.</p>
                    </div> 
                </div>
                
                <br/> <br/> <br/>
                
                < div id="description" class="card">
                    <div id="desc"class="card-body">
                     <div class="row">
                         <div class="col-sm-4" align="left">
                            <img class="card-img-top" src={pinnawala}  alt="" />
                         </div>
                         <div id="desc" class="col-sm-8"align="left">
                            <span class="badge badge-secondary"> DAY 01</span><br/><br/>
                            <p class="font-weight-bold"> ARRIVAL  - PINNAWALA - SIGIRIYA</p>  

                            <p>You will be warmly welcomed at your arrival and transferred to your first destination, 
                                Pinnawala to visit Sri Lankan elephants.Then transfer to Sigiriya and rest on the first day after checking in to your hotel
                            </p> 
                        </div>
                    </div>
                    </div>
                </div>


                < div id="description" class="card">
                    <div id="desc"class="card-body">
                     <div class="row">
                         <div class="col-sm-4" align="left">
                            <img class="card-img-top" src={sigiriya}  alt="" />
                         </div>
                         <div id="desc" class="col-sm-8"align="left">
                            <span class="badge badge-secondary"> DAY 02</span><br/><br/>  
                            <p class="font-weight-bold"> SIGIRIYA SIGHTSEEING</p> 

                            <p> You will have a chance to visit world heritage site in Sigiriya. The Sigiriya Rock fortress is located in the heart of the Island between the towns 
                                of Dambulla and Habarana on a massive rocky plateau 370 meters above the sea level.
                            </p> 
                        </div>
                    </div>
                    </div>
                </div>

                < div id="description" class="card">
                    <div id="desc"class="card-body">
                     <div class="row">
                         <div class="col-sm-4" align="left">
                            <img class="card-img-top" src={dambulla}  alt="" />
                         </div>
                         <div id="desc" class="col-sm-8"align="left">
                            <span class="badge badge-secondary"> DAY 03</span><br/> <br/> 
                            <p class="font-weight-bold">SIGIRIYA - DAMBULLA - KANDY </p> 

                            <p>Dambulla will be next attraction site of your Sri Lanka tour. Dambulla rock temple located at an elevation of 1118 feet from the sea level. The temple which has been built by King Walagamba in the 1st Sanctuary B.C 
                                and It is the most impressive of Sri Lanka’s cave temples.
                            </p> 
                        </div>
                    </div>
                    </div>
                </div>

                < div id="description" class="card">
                    <div id="desc"class="card-body">
                     <div class="row">
                         <div class="col-sm-4" align="left">
                            <img class="card-img-top" src={nuwaraeli}  alt="" />
                         </div>
                         <div id="desc" class="col-sm-8"align="left">
                            <span class="badge badge-secondary"> DAY 04</span><br/><br/>
                            <p class="font-weight-bold"> KANDY - NUWARA ELIYA</p>   

                            <p>Nuwara Eliya is a cool resort town located in the central mountains surrounded by amazing views and tea estates. Do a city tour of Nuwara Eliya including tea plantations, 
                                Golf course, Hakgala botanical garden, Hindu temples, and world’s famous Pink post office
                            </p> 
                        </div>
                    </div>
                    </div>
                </div>

                < div id="description" class="card">
                    <div id="desc"class="card-body">
                     <div class="row">
                         <div class="col-sm-4" align="left">
                            <img class="card-img-top" src={udawalawa}  alt="" />
                         </div>
                         <div id="desc" class="col-sm-8"align="left">
                            <span class="badge badge-secondary"> DAY 05</span><br/><br/>
                            <p class="font-weight-bold"> NUWARA ELIYA - UDAWALAWA - COLOMBO</p>   

                            <p>In this you can do a ½ day jeep safari of the Udawalawa National Park. This is a dry zone park which was declared as a national park in 1972. The park falls between the Udawalawa reservoir and the Walawe River and is surrounded by the scenic beauty of the mountain range 
                                that keeps on winding endlessly on the Balangoda, Kalthota and Haputale escarpments.
                            </p> 
                        </div>
                    </div>
                    </div>
                </div>

                
                <br/><br/><br/>

                <div class="botton" align ="center">
                <button type="button" class="btn btn-info ">Book Now</button>
                </div>




                    

                    
                   

                
                     

                <br/><br/><br/>
                <br/><br/><br/>
                
                </main>
               
                <Footer/>
            </div>
        )
    }
}
export default WildLife;