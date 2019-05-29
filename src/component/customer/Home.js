import React, {Component} from 'react';
import './css/Home.css';
import Header from './Header';
import Footer from './Footer';
// import DatePicker from 'react-datepicker';
import axios from 'axios';
// import img1 from '../../assets/hotl.jpg';
// import HotelSearch from './HotelSearch';

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            city : '',
            start : '',
            end : '',
            rooms : '',
            travellers : ''
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange(e){
        this.setState({[e.target.name]:e.target.value})
    }
    
    onSubmit(e){
        e.preventDefault();
        console.log("hjnkjkn")
        const searchDetails = {
            city : this.state.city,
            start : this.state.start,
            end: this.state.end,
            rooms: this.state.rooms,
            travellers: this.state.travellers,
            // hotels:[],
        }
        console.log(searchDetails);
        this.componentDidMount();
        // axios.post('http://localhost:4000/hotel/search/hotel-search',searchDetails)
        //     .then(res => {
        //         alert("Successfully Searching")
        //         console.log(res);

        //     })
        //     .catch(err => { console.log(err) })
    }
    componentDidMount(){
        if(this.state.city===''){
            //if there are no details added
        }else{
            console.log(this.state.city); //remove
            axios.get('http://localhost:4000/hotel/search/'+this.state.city)
            .then(response => {
                console.log("didmount")
                let hotels = response.data.map((hotel) => {
                    console.log("response")
                    return (
                            <div key={hotel.hotelName}>
                                <div className="card d-block" id="hotelcard">
                                    <img className="card-img-top" src={'http://localhost:4000/uploads/'+hotel.hotelImage} alt="Hotel Avatar: "/><br/>
                                    <div className="card-body">
                                        <span> Hotel Name: <span>{hotel.hotelName}</span></span><br/>
                                        <span> Location: <span>{hotel.place}</span></span><br/>
                                        <button type ="submit" className="btn btn-primary">Book Now</button>
                                        <button type ="submit" className="btn btn-dark">Details</button>
                                        {/* <p class="card-text"></p> */}
                                    </div>
                                </div><br/> 
                            </div>
                        // <ul >
                        //     <li>Hotel Name: <span>{hotel.hotelName}</span></li>
                        //     {/* <li>Email: <span>{hotel.email}</span></li>
                        //     <li>City: <span>{hotel.place}</span></li> */}
                        // </ul>
                    )
                })
                this.setState({ hotels : hotels });
                console.log("state",hotels)
                // this.setState({ booking:response.data })
            })
            .catch(function(error){
                console.log(error); //remove
            })
        }
        
    }

    // handleSelect = (index) => {
    //     this.setState({selectedIndex: index}, () => {
    //         console.log('Selected tab: ' + this.state.selectedIndex);
    //     })
    // }

    render(){
        return(
            <div>
                <Header/>
                <div id="contentbody">
                    <div id="content-bodyy" className="card">
                        {/* <div id="photofol" className="card"> */}
                            <div className="row">
                                <div className="col-sm-1"></div>
                                <div className="col-lg-6">
                                    <form id="accomadtn" className = "form-container" onSubmit={this.onSubmit}> 
                                        <h2><strong>Find the perfect place to stay</strong></h2><br/>
                                        <div className ="form-group">
                                            <input placeholder="City" className="form-control" name="city" onChange={this.onChange} type="text" value={this.state.city}/><br/>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6">
                                            {/* <DatePicker selected={this.state.startDate}  selectsStart 
                                                startDate={this.state.startDate}
                                                endDate={this.state.endDate}
                                                onChange={this.handleChangeStart} className="form-control"
                                            /> */}

                                                <input placeholder="Check-in" className="form-control" name="start" onChange={this.onChange} type="date" value={this.state.start}/>  
                                            </div> 
                                            <div className="col-lg-6">
                                                <input placeholder="Check-out" className="form-control" name="end" onChange={this.onChange} type="date" value={this.state.end}/>
                                            </div>
                                        </div><br/>
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <input type="number" className="form-control" placeholder="Rooms" name="rooms" onChange={this.onChange} value={this.state.rooms}/>
                                            </div>
                                            <div className="col-lg-4">
                                                <input type="number " className="form-control" placeholder="Travellers" name="travellers" onChange={this.onChange} value={this.state.travellers}/>
                                            </div>
                                            <div className="col-lg-4">
                                                <button type ="submit" className="btn btn-primary">Search</button>
                                            </div>
                                        </div><br/>
                                        
                                    </form>
                                </div>
                                <div className="col-lg-4">
                                    <br/><br/><br/><br/><br/>
                                    {this.state.hotels}
                                </div>
                            </div>
                            
                            {/* <Tabs>
                                <Tab label="Core Courses" onClick={() =>this.handleSelect(0)} />
                                <Tab label="Capstone Requirement" onClick={() => this.handleSelect(1)}/>
                                <Tab label="Computer Science Electives" onClick={() => this.handleSelect(2)}/>
                                <Tab label="Support Courses" onClick={() => this.handleSelect(3)} />
                            </Tabs> */}
                            <div><br/><br/><br/><br/><br/><br/><br/><br/></div>

                        {/* </div> */}
                    </div>
                </div>
                <br></br>
                <h1 class="text-center">Overheard from Customers</h1>
                <br></br>
                <div className="row">
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
                                        </div><br/>
               
                <Footer/>
            </div>
        )
    }
}
export default Home;