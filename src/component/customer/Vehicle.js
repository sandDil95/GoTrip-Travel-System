import React, { Component } from 'react';
import './css/Vehicle.css';
import axios from 'axios';
// import vehi from '../../assets/vehi.jpg';

class Vehicle extends Component {
    constructor(props){
        super(props);
        this.state = {
            picklocation : '',
            droplocation : '',
            start : '',
            end : '',
            size : '',
            avatar : ''
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
            picklocation : this.state.picklocation,
            droplocation : this.state.droplocation,
            start : this.state.start,
            end: this.state.end,
            size: this.state.size,
            // hotels:[],
        }
        console.log(searchDetails);
        this.componentDidMount();
    }
    componentDidMount(){
        console.log(this.state.size);
        axios.get('http://localhost:4000/vehicle/search/'+this.state.size) //check vehicle only or vehicle with driver
        .then(response => {
            console.log("didmount")
            let vehicles = response.data.map((vehicle) => {
                console.log("response")
                return (
                    <div>
                        <span className="card d-block" id="vehiclecard" key={vehicle.vehicleOwner}>
                            <img className="card-img-top" src={'http://localhost:4000/uploads/'+vehicle.vehicleImage} alt="Vehicle Avatar: "/><br/>
                            <div className="card-body">
                                <span> Vehicle Owner: <span>{vehicle.vehicleOwner}</span></span><br/>
                                <span> Vehicle Model: <span>{vehicle.vehicleModel}</span></span><br/>
                                <button type ="submit" className="btn btn-primary">Book Now</button>
                                {/* <p class="card-text"></p> */}
                            </div>
                        </span><br/>
                    </div>

                    
                    // <ul key={vehicle.vehicleOwner}>
                    //     <li>Vehicle Owner: <span>{vehicle.vehicleOwner}</span></li>
                    //     {/* <li>Email: <span>{hotel.email}</span></li>
                    //     <li>Pickup Location: <span>{hotel.place}</span></li> */}
                    // </ul>
                )
            })
            this.setState({ vehicles : vehicles });
            console.log("state",vehicles)
            // this.setState({ booking:response.data })
        })
        .catch(function(error){
            console.log(error);
        })
    }

    render(){
        return(
            <div id="contentbodyy">
                <div id="content-bodyyy" className="card">
                    {/* <div id="photovan" className="card"> */}
                        <div className="row">
                            <div className="col-sm-1"></div>
                            <div className="col-lg-6">
                                <form id="van" className = "form-container" onSubmit={this.onSubmit}> 
                                    <h2>Find your ideal Vehicle to travel</h2><br/>
                                    <div className ="form-group">
                                        <input placeholder="Pick-up Location" className="form-control" name="picklocation" onChange={this.onChange} type="text" value={this.state.picklocation}/><br/>
                                    </div>
                                    <div className ="form-group">
                                        <input placeholder="Drop-off Location" className="form-control" name="droplocation" onChange={this.onChange} type="text" value={this.state.droplocation}/><br/>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6">
                                        {/* <DatePicker selected={this.state.startDate}  selectsStart 
                                            startDate={this.state.startDate}
                                            endDate={this.state.endDate}
                                            onChange={this.handleChangeStart} className="form-control"
                                        /> */}

                                            <input placeholder="Pick-up Date" className="form-control" name="start" onChange={this.onChange} type="date" value={this.state.pickdate}/>  
                                        </div> 
                                        <div className="col-lg-6">
                                            <input placeholder="Drop-off Date" className="form-control" name="end" onChange={this.onChange} type="date" value={this.state.dropdate}/>
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
                        <div><br/><br/><br/><br/><br/><br/><br/><br/></div>

                    </div><br/><br/>
                </div>     
            </div>
        );
    }
}

export default Vehicle;