import React , {Component} from 'react';
import './css/Login.css';

import {loginVehicle} from './UserFunctions';
import {loginHotel} from './UserFunctions';
import {login} from './UserFunctions';
//import {login} from './UserFunctions';
const axios = require('axios');


class Login extends Component{
    constructor(props){
        super(props)
        this.state ={
            email:'',
            password:'',
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.registertosupplier = this.registertosupplier.bind(this);
    }
   onChange(e){
       this.setState({[e.target.name]:e.target.value})
   }
   onSubmit(e){
       e.preventDefault();
       const obj = {
        email:this.state.email,
        password:this.state.password
      };
      axios.post('http://localhost:4000/user/login/',obj)
          .then(res => {
                   if(res){
                    this.props.history.push({
                        pathname: '/supplier',
                        state: { email:this.state.email }
                    })
                    //    this.props.history.push('/supplier');
                   }
               })
      
      


       const user ={
           email:this.state.email,
           password:this.state.password
       }
    //    if(){
            loginVehicle(user).then(res => {
                if(res){
                    this.props.history.push('/supplier/profile')
                }
            })
    //    }else{
    //     loginHotel(user).then(res => {
    //         if(res){
    //             this.props.history.push('/supplier')
    //         }
    //     }) 
    //    }
       
       

    //    const user ={
    //        email:this.state.email,
    //        password:this.state.password
    //    }
    //    login(user).then(res => {
    //        if(res){
    //            this.props.history.push('/supplier')
    //        }
    //    })
   }
   registertosupplier(e){
       this.props.history.push('/supplier-register')

   }
    render(){
        return(
            <div className ="bg-img">

                {/* <div className ="container"> */}

                <div className ="sup-inner">

                    <div className ="row">
                        <div className ="col-md-6 mt-5 mx-auto">
                            <form className = "form-container" noValidate onSubmit ={this.onSubmit}> 
                                
                                <h1 className ="h3 mb-3 font-weight-normal">SignIn Form</h1>
                                <div className ="form-group">
                                    <input type ="email"
                                            className="form-control"
                                            name = "email"
                                            placeholder ="Enter Email Address"
                                            value ={this.state.email}
                                            onChange ={this.onChange}
                                    />
                                </div>
                                <div className ="form-group">
                                    <input type ="password"
                                            className="form-control"
                                            name = "password"
                                            placeholder ="Enter Password "
                                            value ={this.state.password}
                                            onChange ={this.onChange}
                                    
                                    />
                                </div>
                                
                                <button type ="submit" className ="btn btn-primary btn--block">
                                        Sign in
                                </button>
                                <p>Not yet signup?
                                    <button onClick = {this.registertosupplier} type ="submit" className ="btn btn-primary btn--block">
                                            SignUp
                                    </button>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
                </div>
            
            
        )
    }
}

export default Login;