import React, {Component} from 'react';
import axios from 'axios';

const Hotel = props => (
    <tr>
        <td>{props.book.hotelName}</td>
        <td>{props.book.email}</td>
        <td>{props.book.city}</td>
        <td>
            <button type="button" >book</button>
        </td>
    </tr>
)

class HotelSearch extends Component{
    constructor(props){
        super(props);
        this.state = { booking:[] }
    }

    componentDidMount(){
        axios.get('http://localhost:4000/hotel/search/'+this.props.match.params.city)
        .then(response => {
            this.setState({ booking:response.data })
        })
        .catch(function(error){
            console.log(error);
        })
    }

    hotelSearch(){
        return this.state.booking.map(function(current,i){
            return <Hotel book={current} key={i} />;
        })
    }

    render(){
        return(
            <div>
                <h1>Available List</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Hotel Name</th>
                            <th>Email</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.hotelSearch() }
                    </tbody>
                </table>
            </div>
        )
    }
}
export default HotelSearch;