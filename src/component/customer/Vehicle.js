import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import './css/Vehicle.css';
import axios from 'axios';

// import vehi from '../../assets/vehi.jpg';

class Vehicle extends Component {
    constructor(props){
        super(props);
        this.state = {
            picklocation : '',
            droplocation : '',
            size : '',
            avatar : '',
            checked : false,
            start: new Date(),
            end: new Date(),
            vehicleId : '',
            day: '',
            month: '',
            year: '',
            current: '',
            currentplus: '',
            currentdate: new Date().toLocaleString()
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.bookVehicle = this.bookVehicle.bind(this);
        this.myFunction = this.myFunction.bind(this);
        this.vehicleBook = this.vehicleBook.bind(this);
    }
    getDate() {
        const now = new Date();
        
        if(this.state.month<10){
            // eslint-disable-next-line
            this.state.current = now.getFullYear()+'-0'+(now.getMonth()+1)+"-"+now.getDate();
            // eslint-disable-next-line
            this.state.currentplus = now.getFullYear()+'-0'+(now.getMonth()+1)+"-"+(now.getDate()+1);
        }else{
            // eslint-disable-next-line
            this.state.current = now.getFullYear()+'-'+(now.getMonth()+1)+"-"+now.getDate();
            // eslint-disable-next-line
            this.state.currentplus = now.getFullYear()+'-'+(now.getMonth()+1)+"-"+(now.getDate()+1);
        }
        console.log(this.state.current);
    }

    onChange(e){
        this.setState({[e.target.name]:e.target.value})
    }
    componentDidMount() {
        this.getDate();
    }
    onSubmit(e){ //search button click
        e.preventDefault();
        console.log("hjnkjkn");
        if(this.state.picklocation === this.state.droplocation){
            const searchDetails = {
                picklocation : this.state.picklocation,
                droplocation : this.state.picklocation,
                from : this.state.from,
                to : this.state.to,
                size: this.state.size,
            }
            console.log(this.state.droplocation);
            console.log(searchDetails);
            this.vehicleBook();
        }else{
            const searchDetails = {
                picklocation : this.state.picklocation,
                droplocation : this.state.droplocation,
                from : this.state.from,
                to : this.state.to,
                size: this.state.size,
            }
            console.log(this.state.droplocation);
            console.log(searchDetails);
            this.vehicleBook();
        }
    }

    bookVehicle(e){ //click booking vehicle
        const val = e.target.value;
        console.log(val);
        if(this.state.picklocation !== this.state.droplocation){
            console.log("if")
            this.props.history.push({
                pathname: '/login',
                state: { vehicleId:val, picklocation:this.state.picklocation, droplocation:this.state.picklocation, size:this.state.size, start:this.state.start, end:this.state.end }
            })
        }else{
            console.log("else")
            this.props.history.push({
                pathname: '/login',
                state: { vehicleId:val, picklocation:this.state.picklocation, droplocation:this.state.droplocation, start:this.state.start, end:this.state.end }
            })
        }           
    }
    myFunction() {
        this.setState({
            checked: !this.state.checked
        })
    } 
    vehicleBook(){
        console.log(this.state.size);
        // axios.get('http://localhost:4000/vehicle/search/'+this.state.size+'/'+this.state.picklocation+'/'+this.state.start+'/'+this.state.end) //check vehicle only or vehicle with driver
        axios.get('http://localhost:4000/vehicle/search/'+this.state.size+'/'+this.state.picklocation) //check vehicle only or vehicle with driver
        .then(response => {
            console.log("didmount")
            let vehicles = response.data.map((vehicle) => {
                // this.setState({vehicleId : vehicle._id}) //get selected vehicle id to send vehicle booking page
                // console.log(this.state.vehicleId+"response");
                return (
                    <div key={vehicle._id}>
                        <div className="card d-block" id="vehiclecard">
                            <img className="card-img-top" src={'http://localhost:4000/uploads/'+vehicle.vehicleImage} alt="Vehicle Avatar: "/><br/>
                            <div className="card-body" id="detailsvehi">
                                <span> Vehicle Owner: <span>{vehicle.vehicleOwner}</span></span><br/>
                                <span> Vehicle Model: <span>{vehicle.vehicleModel}</span></span><br/>
                                <span> Location: <span>{vehicle.locations}</span></span><br/>
                                {/* <Link to="/customer/vehiclebooking"><button>Book Now</button></Link> */}
                                {/* <button type ="submit" className="btn btn-primary" onClick={(e) => {this.bookVehicle(e, vehicle._id)}}>Book Now</button> */}
                                <button className="btn btn-primary" value={vehicle._id} onClick={(e) => {this.bookVehicle(e)}}>Book Now</button>
                                {/* <p class="card-text"></p> */}
                            </div>
                        </div><br/>
                    </div>
                )
            },error=>{
                alert("Not found")
            })
            this.setState({ vehicles : vehicles });
            console.log("state",vehicles)
            // this.setState({ booking:response.data })
        })
        .catch(function(error){
            console.log("error");
        })
    }

    render(){

        const content = this.state.checked ? <div className ="form-group">
                                                    <input placeholder="Drop-off Location" className="form-control" name="droplocation" onChange={this.onChange} type="text" value={this.state.droplocation}/><br/>
                                             </div> : null;

        return(
            <div>
                <Header/>
                <div id="contentbodyy">
                    <div id="content-bodyyy" className="card">
                        {/* <div id="photovan" className="card"> */}
                            <div className="row">
                                <div className="col-sm-1"></div>
                                <div className="col-lg-6">
                                    <form id="van" className = "form-container" onSubmit={this.onSubmit}> 
                                        <h2><strong>Find your ideal Vehicle to travel</strong></h2><br/>
                                        <div className ="form-group">
                                            <input placeholder="Pick-up Location" className="form-control" name="picklocation" onChange={this.onChange} type="text" value={this.state.picklocation}/>
                                        </div>
                                        <div className ="form-group">
                                            <div className="col-lg-6">
                                                <input type="checkbox" id="myCheck"  checked={this.state.checked} onChange={this.myFunction}/>Drop-off from different location
                                            </div>
                                            {content}
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <label htmlFor="start"><small>Pick-up Date</small></label>
                                                <input type="date" className="form-control" name="start" onChange={this.onChange} value={this.state.start} min={this.state.current}/>
                                            </div> 
                                            <div className="col-lg-6">
                                                <label htmlFor="start"><small>Drop-off Date</small></label>
                                                <input type="date" className="form-control" name="end" onChange={this.onChange} value={this.state.end} min={this.state.currentplus}/>
                                            </div>
                                        </div><br/>  
                                        
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <label className="radio-inline">
                                                    <input type="radio" value="driver" name="size" checked={this.state.size==="driver"} onChange={this.onChange}/>With Driver
                                                </label><span></span>
                                                <label className="radio-inline">
                                                    <input type="radio" value="nodriver" name="size" checked={this.state.size==="nodriver"} onChange={this.onChange}/>Only Vehicle
                                                </label>
                                            </div>
                                            
                                            {/* <div className="col-lg-4">
                                                
                                            </div> */}
                                            <div className="col-lg-6">
                                                <button type ="submit" className="btn btn-primary">Search</button>
                                            </div>
                                            {/* <DayPicker /> */}
                                        </div><br/>
                                    </form>
                                </div>
                                <div className="col-lg-4">
                                    <br/><br/><br/><br/><br/>
                                    {this.state.vehicles}
                                </div>
                            {/* </div> */}
                            
                            {/* <Tabs>
                                <Tab label="Core Courses" onClick={() =>this.handleSelect(0)} />
                                <Tab label="Capstone Requirement" onClick={() => this.handleSelect(1)}/>
                                <Tab label="Computer Science Electives" onClick={() => this.handleSelect(2)}/>
                                <Tab label="Support Courses" onClick={() => this.handleSelect(3)} />
                            </Tabs> */}
                            <div><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/></div>

                        </div><br/><br/><br/><br/>
                    </div>     
                </div>
                {/* <h1 class="text-center">Overheard from Customers</h1> */}
                <br></br>
                <br></br>
                <div className="row">
                                            <div className="col-lg-4">
                                                <h3 className="text-center"><strong>ONLINE PAYMENTS</strong></h3>
                                                 <br></br>
                                            <h5 class="text-center">You can take online payments or pre-payments, we offer more than 70 payment gateways.</h5>
                                            
                                            </div>
                                            <div className="col-lg-4">
                                            <h3 className="text-center"><strong>MULTIPLE LOCATIONS</strong></h3>
                                                <br></br>
                                                <h5 class="text-center">You can set up pick-up/drop-off locations and GoTrip will even find the nearest offer.</h5>
                                               
                                            </div>
                                            <div className="col-lg-4">
                                            <h3 className="text-center"><strong>FLEXIBLE PRICING</strong></h3>
                                            <br></br>
                                            <h5 class="text-center">GoTrip will be able to reflect your pricing model however complex it may be.</h5>
                                            <br></br>
                                            </div>
                                        </div><br/>
                <Footer/>
            </div>
        );
    }
}

export default Vehicle;