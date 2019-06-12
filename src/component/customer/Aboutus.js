import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import './css/Aboutus.css';


class Aboutus extends Component {
    render(){
        return(
            <div>
                <Header/>
                <div className ="bg-imgg">

                </div>
                <br></br>
                <h1 clssName="text-center"><strong>     Travel Agency in Sri Lanka     ...GoTrip...      </strong></h1>
                <br></br>
                <h6 className="text-center">We are passionate about travel and would love to share this passion and our love for our beautiful island country with you. As your Travel Agency in Sri Lanka, you can tell us what your desired vacation plans are and then leave all the rest to us. We will make a perfect, tailor- made itinerary for you and share it with you on email well in advance of your travel date. Our constant endeavor is to give our honored guests a perfectly planned, stress-free holiday that will always be remembered with nostalgia.

You can tell us what your desired vacation plans are & all those will be kept in mind and be organized in such a way that you don’t have to think twice before setting feet outside your hotel, as all you need and want will be organized prior to your arrival and the itinerary mailed to you well in advance. Our chauffeur guides & National guides are highly professional and always willing to assist our clients for their each & every requirements and always flexible to work according to clients day to day plans on their tour.</h6>
                <br></br>

                <Footer/>
            </div>
        );
    }
}
export default Aboutus;