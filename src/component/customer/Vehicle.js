import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import './css/Vehicle.css';
import axios from 'axios';
import moment from 'moment';
import Helmet from 'react-helmet';

import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import { formatDate, parseDate } from 'react-day-picker/moment';

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
            from: undefined,
            to: undefined,
            vehicleId : ''
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.bookVehicle = this.bookVehicle.bind(this);
        this.myFunction = this.myFunction.bind(this);
        this.vehicleBook = this.vehicleBook.bind(this);
        this.handleFromChange = this.handleFromChange.bind(this);
        this.handleToChange = this.handleToChange.bind(this);
    }
    showFromMonth() {
        const { from, to } = this.state;
        if (!from) {
          return;
        }
        if (moment(to).diff(moment(from), 'months') < 2) {
          this.to.getDayPicker().showMonth(from);
        }
    }
    handleFromChange(from) {
    // Change the from date and focus the "to" input field
    this.setState({ from });
    }
    handleToChange(to) {
    this.setState({ to }, this.showFromMonth);
    }

    onChange(e){
        this.setState({[e.target.name]:e.target.value})
    }
    
    onSubmit(e){
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

    bookVehicle(e,vehicleId){
        e.preventDefault()
        console.log(this.state.vehicleId+" bookvehicle inside");
        // this.props.history.push({
        //     pathname: '/Vehicle/vehiclebooking',
        //     state: {vehicleId:this.state.vehicleId}
        // })
        this.props.history.push({
            pathname: '/login',
            state: {vehicleId:this.state.vehicleId}
        })
           
    }
    myFunction() {
        this.setState({
            checked: !this.state.checked
        })
    } 
    vehicleBook(){
        console.log(this.state.size);
        axios.get('http://localhost:4000/vehicle/search/'+this.state.size+'/'+this.state.picklocation) //check vehicle only or vehicle with driver
        .then(response => {
            console.log("didmount")
            let vehicles = response.data.map((vehicle) => {
                this.setState({vehicleId : vehicle._id}) //get selected vehicle id to send vehicle booking page
                
                console.log(this.state.vehicleId+"response");
                return (
                    <div key={vehicle._id}>
                        <div className="card d-block" id="vehiclecard">
                            <img className="card-img-top" src={'http://localhost:4000/uploads/'+vehicle.vehicleImage} alt="Vehicle Avatar: "/><br/>
                            <div className="card-body">
                                <span> Vehicle Owner: <span>{vehicle.vehicleOwner}</span></span><br/>
                                <span> Vehicle Model: <span>{vehicle.vehicleModel}</span></span><br/>
                                <span> Location: <span>{vehicle.locations}</span></span><br/>
                                {/* <Link to="/customer/vehiclebooking"><button>Book Now</button></Link> */}
                                <button type ="submit" className="btn btn-primary" onClick={(e) => {this.bookVehicle(e, this.state.vehicleId)}}>Book Now</button>
                                
                                {/* <p class="card-text"></p> */}
                            </div>
                        </div><br/>
                    </div>
                )
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
        const { from, to } = this.state;
        const modifiers = { start: from, end: to };
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
                                        <h2>Find your ideal Vehicle to travel</h2><br/>
                                        <div className ="form-group">
                                            <input placeholder="Pick-up Location" className="form-control" name="picklocation" onChange={this.onChange} type="text" value={this.state.picklocation}/><br/>
                                        </div>
                                        <div className="col-lg-6">
                                            <input type="checkbox" id="myCheck"  checked={this.state.checked} onChange={this.myFunction}/>Drop-off from different location
                                        </div><br/>
                                        {content}
                                        {/* <div className ="form-group">
                                            <input placeholder="Drop-off Location" className="form-control" name="droplocation" onChange={this.onChange} type="text" value={this.state.droplocation}/><br/>
                                        </div> */}
                                        {/* <div className="row">
                                            <div className="col-lg-6">
                                                <input placeholder="Pick-up Date" className="form-control" id="startDate" name="start" onChange={this.onChange} type="date" value={this.state.pickdate}/>  
                                            </div> 
                                            <div className="col-lg-6">
                                                <input placeholder="Drop-off Date" className="form-control" id="endDate" name="end" onChange={this.onChange} type="date" value={this.state.dropdate}/>
                                            </div>
                                        </div><br/> */}
                                        <div className="InputFromTo">
                                            <label>PickUp Date</label>{' '}  *****    {' '}<label>Dropoff Date</label><br/>
                                            <DayPickerInput onChange={this.onChange} value={from} placeholder="From" format="LL" formatDate={formatDate} parseDate={parseDate} dayPickerProps={{
                                                selectedDays: [from, { from, to }],
                                                disabledDays: { after: to },
                                                toMonth: to,
                                                modifiers,
                                                numberOfMonths: 2,
                                                onDayClick: () => this.to.getInput().focus(),
                                            }}
                                            onDayChange={this.handleFromChange} />{' '}—{' '}
                                            <span className="InputFromTo-to">
                                                
                                                <DayPickerInput onChange={this.onChange} ref={el => (this.to = el)} value={to} placeholder="To" format="LL" formatDate={formatDate} parseDate={parseDate} dayPickerProps={{
                                                    selectedDays: [from, { from, to }],
                                                    disabledDays: { before: from },
                                                    modifiers,
                                                    month: from,
                                                    fromMonth: from,
                                                    numberOfMonths: 2,
                                                    }}
                                                    onDayChange={this.handleToChange} />
                                            </span>
                                            <Helmet>
                                                        <style>{`
                                                .InputFromTo .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
                                                    background-color: #f0f8ff !important;
                                                    color: #4a90e2;
                                                }
                                                .InputFromTo .DayPicker-Day {
                                                    border-radius: 0 !important;
                                                }
                                                .InputFromTo .DayPicker-Day--start {
                                                    border-top-left-radius: 50% !important;
                                                    border-bottom-left-radius: 50% !important;
                                                }
                                                .InputFromTo .DayPicker-Day--end {
                                                    border-top-right-radius: 50% !important;
                                                    border-bottom-right-radius: 50% !important;
                                                }
                                                .InputFromTo .DayPickerInput-Overlay {
                                                    width: 550px;
                                                }
                                                .InputFromTo-to .DayPickerInput-Overlay {
                                                    margin-left: -198px;
                                                }
                                                `}</style>
                                                        </Helmet>
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
                <Footer/>
            </div>
        );
    }
}

export default Vehicle;