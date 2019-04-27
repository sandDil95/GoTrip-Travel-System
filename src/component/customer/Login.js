import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            email:'',
            passwrd:'',
            vehicleId:''
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onHandle = this.onHandle.bind(this);
    }
    onChange(e){
        this.setState({[e.target.name]:e.target.value})
    }

    onSubmit(e){
        e.preventDefault();
        this.state.vehicleId = this.props.location.state.vehicleId;
        console.log(this.state.vehicleId);
        const customer = {
            email:this.state.email,
            password:this.state.passwrd
        }
        axios.post('http://localhost:4000/customer/login/',customer)
        .then(response=>{
            alert("Successfully logged")
            this.props.history.push({
                pathname: '/Vehicle/vehiclebooking',
                state: {
                    vehicleId:this.state.vehicleId,
                    email:this.state.email
                }
            })
        },error=>{
            // if (error instanceof HttpErrorResponse){
            if(error.response.status===401){
                alert("Incorrect Password!!!")
            }else if(error.response.status===404){
                alert("Unauthorized Access")
            }
            // }
        })
        // this.props.history.push({
        //     pathname: '/Vehicle/vehiclebooking',
        //     state: {vehicleId:this.state.vehicleId}
        // })
    }
    onHandle(e){
        e.preventDefault();
        this.state.vehicleId = this.props.location.state.vehicleId;
        console.log(this.state.vehicleId);
        this.props.history.push({
            pathname: '/register',
            state: {vehicleId:this.state.vehicleId}
        })
    }
    render(){
        return(
            <div id="contentbodyy">
                <div className="row">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-8">
                        <form className = "form-container" onSubmit={this.onSubmit}>
                            <h2>Login Form</h2><br/>

                            <label>Email:</label>
                            <div className ="form-group">
                                <input placeholder="Enter your email" className="form-control" name="email" onChange={this.onChange} type="text" value={this.state.email}/><br/>
                            </div>
                            <label>Password</label>
                            <div className ="form-group">
                                <input placeholder="Enter your password" className="form-control" name="passwrd" onChange={this.onChange} type="password" value={this.state.passwrd}/><br/>
                            </div>
                            <button type ="submit" className="btn btn-primary">Login</button><br/>
                            
                        </form>
                        <label>Not Registered Yet. Register Now!</label>
                            <button type ="submit" onClick={this.onHandle} className="btn btn-primary">Register</button>
                        <br/><br/>
                    </div>
                    <div className="col-sm-2"></div>
                </div>
            </div>
        )
    }
}
export default Login;