import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import './css/Tailor.css';
// import img5 from '../../assets/img5.jpg';

class Tailor extends Component {
    render(){
        return(
            <div>
                <Header/>
                <div id="tailorbody">
                    
                    <div className="container">
                        <div className="span12">
                            <h1>Plan Your Own Trip</h1><br/>
                            <p> Whether you want to modify a tour package on our website or have an itinerary built from scratch, the local travel consultants at Ceylon Island Travel can create your ideal trip. In addition to the benefits of all our tours - booking handpicked hotels, transportation, excursions and more - customized tours offer a personalized experience. You decide where to visit, how long to spend and what type of accommodation suits you best. Let us know what we can do for you by completing the form below. Please provide as many details as possible, even estimates are helpful.</p>
                            <form>
                                <div className="form-group">
                                    <label htmlFor="inputName">Full Name</label>
                                    <input type="text" className="form-control" id="inputName" placeholder=""/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="InputEmail">Email Address</label>
                                    <input type="email" className="form-control" id="InputEmail" aria-describedby="emailHelp" placeholder="Please Enter Valid email"></input>
                                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inputNum">Phone Number</label>
                                    <input type="text" className="form-control" id="inputNum" placeholder=""></input>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inputarival">Arrival Date</label>
                                    <input type="text" className="form-control" id="inputarival" placeholder="dd/mm/yyyy"></input>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inputPickup">Pickup Place</label>
                                    <input type="text" className="form-control" id="inputPickup" placeholder=""></input>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="place">Interesting Place To Visit</label>
                                    <select className="form-control" id="place">
                                        <option>Anuradhapura</option>
                                        <option>Galle</option>
                                        <option>Jappna</option>
                                        <option>Nuwaraeliya</option>
                                        <option>Hambantota</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="duration">Tour Duration (Days)</label>
                                    <select className="form-control" id="duration">
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
                                </div>
                                <div className="form-group">
                                    <label htmlFor="people">No of People</label>
                                    <select className="form-control" id="people">
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
                                </div>
                                <div className="form-group">
                                    <label htmlFor="room">Preferred  Accommodation</label>
                                        <select className="form-control" id="room">
                                            <option>AC</option>
                                            <option>Non AC</option>
                                        </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="additional">Any Additional Information</label>
                                    <textarea className="form-control" id="additional" rows="3"></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary">Send</button>
                            </form>
                        </div>
                    </div>
                    
                    <br/><br/><br/><br/><br/><br/>
                    <br/><br/><br/>
                    <br/><br/><br/>
                    <br/>
                    <br/><br/>
                    <br/><br/><br/>
                    <br/><br/><br/><br/>
                    <br/><br/><br/><br/>
                    <br/><br/><br/>
                    <br/><br/><br/>
                    <br/><br/><br/>
                    <br/><br/><br/>
                    <br/><br/><br/>
                    <br/><br/><br/>
                    <br/><br/><br/>
                    <br/><br/><br/>
                    <br/><br/>
                    <br/><br/><br/>
                </div>
                <Footer/>
            </div>
        )
    }
}
export default Tailor;