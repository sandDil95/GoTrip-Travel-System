import React, { Component } from 'react';
import img5 from '../../assets/img5.jpg';
import axios from 'axios';
// import { timingSafeEqual } from 'crypto';

class Tailor extends Component {
    constructor(props){
        super(props);
        this.state ={
            name:'',
            email:'',
            pno:'',
            arrivalDate:'',
            pickupPlace:'',
            additional:'',
        }
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePnoChange = this.handlePnoChange.bind(this);
        this.handleArrivalDateChange = this.handleArrivalDateChange.bind(this);
        this.handlePickupPlaceChange = this.handlePickupPlaceChange.bind(this);
        this.handleAdditionalChange = this.handleAdditionalChange.bind(this);
        this.createPackage = this.createPackage.bind(this);
    }
    handleNameChange(e){
        this.setState({ name: e.target.value })
    }
    handleEmailChange(e){
        this.setState({ email: e.target.value })
    }
    handlePnoChange(e){
        this.setState({ pno: e.target.value })
    }
    handleArrivalDateChange(e){
        this.setState({ arrivalDate: e.target.value })
    }
    handlePickupPlaceChange(e){
        this.setState({ pickupPlace: e.target.value })
    }
    handleAdditionalChange(e){
        this.setState({ additional: e.target.value })
    }
    createPackage(e){
        e.preventDefault(e);
        const createPackage = {
            name : this.state.name,
            email : this.state.email,
            pno : this.state.pno,
            arrivalDate : this.state.arrivalDate,
            pickupPlace : this.state.pickupPlace,
            additional : this.state.additional,
        }
        axios.post('http://localhost:4000/tailor/tailor-package/booking',createPackage)
            .then(res => {
                alert("Successfull Booking")
                console.log(res);
                // this.setState({ redirect: this.state.redirect === false })
            })
            .catch(err => { console.log(err) });
    }
    render(){
        return(
            <main className="inner cover lead" role="main">
               <img src={img5} />
               <br></br>
              <div class="container">
              <div class="span12">
              <br></br>
              
              <h1>                         Plan Your Own Trip</h1>
              </div>
              </div>
              <br></br>
              <div class="container">
              <div class="span12">

              <p> Whether you want to modify a tour package on our website or have an itinerary built from scratch, the local travel consultants at Ceylon Island Travel can create your ideal trip. In addition to the benefits of all our tours - booking handpicked hotels, transportation, excursions and more - customized tours offer a personalized experience. You decide where to visit, how long to spend and what type of accommodation suits you best. Let us know what we can do for you by completing the form below. Please provide as many details as possible, even estimates are helpful.</p>
              </div>
              </div>
              <br></br>
              <div class="container">
              <form onSubmit={this.createPackage} >
              <div class="form-group">
              <label for="inputName">Full Name</label>
              <input type="text" class="form-control" id="inputName" onChange={this.handleNameChange} name="name" value={this.state.name} placeholder=""></input>
              </div>

              <div class="form-group">
              <label for="InputEmail">Email Address</label>
              <input type="email" class="form-control" id="InputEmail" onChange={this.handleEmailChange} name="email" value={this.state.email} aria-describedby="emailHelp" placeholder="Please Enter Valid email"></input>
              <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>

              <div class="form-group">
              <label for="inputNum">Phone Number</label>
              <input type="text" class="form-control" id="inputNum" onChange={this.handlePnoChange} name="pno" value={this.state.pno} placeholder=""></input>
              </div>

              <div class="form-group">
              <label for="inputarival">Arrival Date</label>
              <input type="text" class="form-control" id="inputarival" onChange={this.handleArrivalDateChange} name="arrivalDate" value={this.state.arrivalDate} placeholder="dd/mm/yyyy"></input>
              </div>

              <div class="form-group">
              <label for="inputPickup">Pickup Place</label>
              <input type="text" class="form-control" id="inputPickup" onChange={this.handlePickupPlaceChange} name="pickupPlace" value={this.state.pickupPlace} placeholder=""></input>
              </div>

              {/* <div class="form-group">
              <label for="place">Interesting Place To Visit</label>
              <select class="form-control" id="place">
              <option>Anuradhapura</option>
              <option>Galle</option>
              <option>Jappna</option>
              <option>Nuwaraeliya</option>
              <option>Hambantota</option>
              </select>
              </div> */}

              {/* <div class="form-group">
              <label for="duration">Tour Duration (Days)</label>
              <select class="form-control" id="duration">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
              <option>11</option>
              <option>12</option>
              <option>13</option>
              <option>14</option>
              <option>15</option>
              </select>
              </div> */}

              {/* <div class="form-group">
              <label for="people">No of People</label>
              <select class="form-control" id="people">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
              <option>11</option>
              <option>12</option>
              <option>13</option>
              <option>14</option>
              <option>15</option>
              </select>
              </div> */}

              {/* <div class="form-group">
              <label for="room">Preferred  Accommodation</label>
              <select class="form-control" id="room">
              <option>AC</option>
              <option>Non AC</option>
              </select>
              </div> */}

              <div class="form-group">
              <label for="additional">Any Additional Information</label>
              <textarea class="form-control" id="additional" onChange={this.handleAdditionalChange} name="additional" value={this.state.additional} rows="3"></textarea>
              </div>
              
              <button type="submit" class="btn btn-primary">Send</button>

              </form>
              <br></br>
              </div>
             
                
            </main>
        )
    }
}
export default Tailor;