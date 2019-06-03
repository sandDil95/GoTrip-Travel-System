import React, { Component } from 'react';
import axios from 'axios';
import './css/CustomerRegister.css';

class Register extends Component {
    constructor(props){
        super(props);
        this.state={
            fname:'',
            email: '',
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
    onHandle(e){
        e.preventDefault();
        // eslint-disable-next-line
        this.state.vehicleId = this.props.location.state.vehicleId;
        console.log(this.state.vehicleId);
        this.props.history.push({
            pathname: '/login',
            state: {vehicleId:this.state.vehicleId}
        })
    }
    onSubmit(e){
        e.preventDefault();
        // eslint-disable-next-line
        this.state.vehicleId = this.props.location.state.vehicleId;
        console.log(this.state.vehicleId);

        const customer = {
            fname:this.state.fname,
            email:this.state.email,
            password:this.state.passwrd
        }

        axios.post('http://localhost:4000/customer/register/',customer)
        .then(response=>{
            alert("Successfully registered")
            this.props.history.push({
                pathname: '/login',
                state: {vehicleId:this.state.vehicleId}
            })
        },error=>{
            if(error.response.status===409){
                alert("You are already signup!!!")
            }else if(error.response.status===500){
                alert("Try Again!")
            }
        })
        // alert("Successfully registered")
        // this.props.history.push({
        //     pathname: '/login',
        //     state: {vehicleId:this.state.vehicleId}
        // })
    }
    render(){
        return(
            <div className="container-img">
                <div id="custm-reg">
               
                 <div clasName="col-md-4 col-sm-4 col-xs-12"></div>
                    
                 <div clasName="col-md-4 col-sm-4 col-xs-12">
                    
                        <form className = "form" onSubmit={this.onSubmit}>
                            <h1 align="center"><b> Register</b> </h1>  
                             <p></p> 
                            <label>Full Name:</label>
                            <div className ="form-group">
                                <input placeholder="Enter your full name" className="form-control" name="fname" onChange={this.onChange} type="text" value={this.state.fname}/><br/>
                            </div>
                            <label>Email:</label>
                            <div className ="form-group">
                                <input placeholder="Enter your email" className="form-control" name="email" onChange={this.onChange} type="text" value={this.state.email}/><br/>
                            </div>
                            <label>Password</label>
                            <div className ="form-group">
                                <input placeholder="Enter your password" className="form-control" name="passwrd" onChange={this.onChange} type="password" value={this.state.passwrd}/><br/>
                            </div>
                            <label>Confirm Password</label>
                            <div className ="form-group">
                                <input placeholder="Re-Enter your password" className="form-control" name="cpasswrd" onChange={this.onChange} type="password" value={this.state.cpasswrd}/><br/>
                            </div>
                            <button align="center" type ="submit" className ="btn btn-primar "> Sign in  </button>
                            <p> </p><br/><br/>
                            
                            <label>Already have an account!!</label>
                        <button type ="submit" onClick={this.onHandle} className="btn btn-primary">Login</button>
                        <br/><br/>
                            
                        </form>
                        
                    </div>
                    <div className="col-sm-2"></div>
                </div>
            </div>
            
        )
    }
}
export default Register;