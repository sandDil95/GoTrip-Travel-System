import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import './css/Tailor.css';
// import img5 from '../../assets/img5.jpg';

class Tailor extends Component {
    constructor(props){
        super(props);
        this.state = {
            startplace : '',
            tripplace : '',
            startdate: new Date(),
            enddate: new Date(),
            day: '',
            month: '',
            year: '',
            current: '',
            currentplus: '',
            roomsnum : '',
            travellersnum : '',
            currentdate: new Date().toLocaleString()
        }
        // this.onChange = this.onChange.bind(this);
        // this.onSubmit = this.onSubmit.bind(this);
    }
    render(){
        return(
            <div>
                <Header/>
                <div id="contentbody">
                    <div id="content-bod" className="card">
                            <div className="row">
                                <div className="col-sm-1"></div>
                                <div className="col-lg-6">
                                    <form id="tai" className = "form-container" onSubmit={this.onSubmit}> 
                                        <h2><strong>Plan Your Own Trip</strong></h2><br/>
                                        <div className="row">
                                        <div className="col-lg-6">
                                                <label htmlFor="start"><small>Pick-up Date</small></label>
                                                <input type="date" className="form-control" name="startdate" onChange={this.onChange} value={this.state.startdate} min={this.state.current}/>
                                            </div> 
                                            <div className="col-lg-6">
                                                <label htmlFor="start"><small>Drop-off Date</small></label>
                                                <input type="date" className="form-control" name="enddate" onChange={this.onChange} value={this.state.enddate} min={this.state.currentplus}/>
                                            </div>
                                        </div>
                                        <br></br>
                                        <div className="row">
                                        <div className="col-lg-6">
                                                <label htmlFor="picplace"><small>Pick-up Place</small></label>
                                                <input type="text" className="form-control" name="startplace" onChange={this.onChange} value={this.state.startplace} min={this.state.current}/>
                                            </div> 
                                            <div className="col-lg-6">
                                                <label htmlFor="start"><small>Interesting Place to visit</small></label>
                                                <input type="text" className="form-control" name="tripplace" onChange={this.onChange} value={this.state.tripplace} min={this.state.currentplus}/>
                                            </div>
                                        </div>
                                        <br></br>
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <input type="number" className="form-control" placeholder="Rooms" name="roomsnum" onChange={this.onChange} value={this.state.roomsnum}/>
                                            </div>
                                            <div className="col-lg-4">
                                                <input type="number " className="form-control" placeholder="Travellers" name="travellersnum" onChange={this.onChange} value={this.state.travellersnum}/>
                                            </div>
                                            <div className="col-lg-4">
                                                <button type ="submit" className="btn btn-primary">Submit</button>
                                            </div>
                                        </div><br/>
                                        
                                    </form>
                                </div>
                                {/* <div className="col-lg-4">
                                    <br/><br/><br/><br/><br/>
                                    {this.state.hotels}
                                </div> */}
                            </div>
                           
                            <div><br/><br/><br/><br/><br/><br/><br/><br/></div>
                    </div>
                </div>
                <br></br>
                <h1 class="text-center">How Plan Your Own Trip</h1>
                <br></br>
                <p class="text-center">Whether you want to modify a tour package on our website or have an itinerary built from scratch, the local travel consultants at GoTrip can create your ideal trip. In addition to the benefits of all our tours - booking handpicked hotels, transportation, excursions and more - customized tours offer a personalized experience. You decide where to visit, how long to spend and what type of accommodation suits you best. Let us know what we can do for you by completing the form below. Please provide as many details as possible, even estimates are helpful.
</p>
<br></br>
                {/* <div className="row">
                                            <div className="col-lg-4">
                                                <h4 className="text-center"><strong>Hotel Lavina</strong></h4>
                                            
                                            <h5 class="text-center">"The hotel was simple amazing and I couldn't thank GoTrip more for helping out. I've been a customer for awhile and I have to say it's probably my favourite app!"</h5>
                                            <p className="text-center">Mr.Aravinda Yasas</p>
                                            </div>
                                            <div className="col-lg-4">
                                            <h4 className="text-center"><strong>Tango Ressort</strong></h4>
                                            
                                                <h5 class="text-center">"We got a great last minute rate with GoTrip and this room was spacious with a comfortable and warm bed."</h5>
                                               <br></br> 
                                               <br></br><p className="text-center">Mrs.Nayomi Silva</p>
                                            </div>
                                            <div className="col-lg-4">
                                            <h4 className="text-center"><strong>Hotel Sweet Place</strong></h4>
                                            
                                            <h5 class="text-center">"We booked Hotel Eucalyptus through GoTrip after reading a handful of reviews, and it was easily the best decision we made for our trip to Santorini."</h5>
                                            <br></br><p className="text-center">Mr.Kelum Narayana</p>

                                            </div>
                                        </div><br/> */}
                <Footer/>
            </div>
        )
    }
}
export default Tailor;