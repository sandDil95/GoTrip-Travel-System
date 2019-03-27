import React, { Component } from 'react';
import './css/Vehicle.css';
import axios from 'axios';
// import vehi from '../../assets/vehi.jpg';

class Vehicle extends Component {
    constructor(props){
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeNIC = this.onChangeNIC.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onsubmit = this.onsubmit.bind(this);

        this.state = {
            name: '',
            email:'',
            NIC:'',
            password:'',
        }
    }

    onChangeName(e){
        this.setState({
            name: e.target.value
        })
    }
    onChangeEmail(e){
        this.setState({
            email: e.target.value
        })
    }
    onChangeNIC(e){
        this.setState({
            NIC: e.target.value
        })
    }
    onChangePassword(e){
        this.setState({
            password: e.target.value
        })
    }
    onsubmit(e){
        e.preventDefault();
        const obj = {
            name:this.state.name,
            email:this.state.email,
            NIC:this.state.NIC,
            password:this.state.password,
        }
        axios.post('http://localhost:4000/vehicle/booking', obj)
        .then(res => console.log(res.data));
        this.setState({
            name: '',
            email:'',
            nic:'',
            password:'',
        })
    }

    render(){
        return(
            // <div>
            //     <img src={vehi} alt="test" class="img-responsive"/>
            //     <div class="carousel-caption">
            //         <form>
            //             <input type="text" placeholder="Enter your Name"/><br/>
            //             <input type="text" plsceholder="Enter your Email"/><br/>
            //             <input type="submit" value="Submit"/>
            //         </form>
            //     </div>
            // </div>
            <div className="container-fluid bg">
                <div className="row">
                    <div className="col-md-4 col-sm-4 col-xs-12"></div>
                    <div className="col-md-4 col-sm-4 col-xs-12">
                        <form className="form-container" onSubmit={this.onsubmit}>
                            <h2>Vehicle Booking Form</h2>
                            <div className="form-group">
                                <label htmlFor="inputName">Name</label>
                                <input type="text" value={this.state.name} onChange={this.onChangeName} className="form-control" id="inputName" placeholder="Enter your name"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputEmail">Email</label>
                                <input type="email" value={this.state.email} onChange={this.onChangeEmail} className="form-control" id="inputEmail" placeholder="Enter your email"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputNic">NIC</label>
                                <input type="text" value={this.state.nic} onChange={this.onChangeNIC} className="form-control" id="inputNIC" placeholder="Enter your NIC"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputPassword">Password</label>
                                <input type="password" value={this.state.password} onChange={this.onChangePassword} className="form-control" id="inputPassword" placeholder="Enter your Password"/>
                            </div>
                            <button type="submit" className="btn btn-primary btn-block">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Vehicle;