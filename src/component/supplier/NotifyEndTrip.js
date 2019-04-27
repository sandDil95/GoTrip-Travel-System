import React , {Component} from 'react';
import './css/Notification.css';
//import {sendEmail} from './UserFunctions';
import validator from 'validator';


const validatePhoneNumber = number => {
    const isValidPhoneNumber = validator.isMobilePhone(number)
    return (isValidPhoneNumber)
}
const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
//const telNum = RegExp(/^[0-9]*$/);
const formValid = formErrors =>{
    let valid = true;

    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false);
    });
    return valid;
    
}

class Notify extends Component{
    constructor(){
        super()
        this.state ={
            first_name:'',
            email:'',

            formErrors:{
                first_name:"",
                email:""
                
            },
            number:{
                contactNo:""
            }
            
            
            
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    
    }

   onChange(e){
       //this.setState({[e.target.name]:e.target.value});
       const {name , value} = e.target;
       let formErrors = this.state.formErrors;
       let number = this.state.number;

    //    console.log("Name :" , name);
    //    console.log("value :" ,value);
       switch(name){
                case'first_name':
                    formErrors.first_name = 
                        value.length < 3 
                            ? "minimum 3 characaters required"
                            :"";
                    break;
                
                case'email':
                formErrors.email = 
                    emailRegex.test(value)
                        ? ''
                        :"Invalid Email Address";
                break;
                // case'contactNo':
                // telNum.contactNo = 
                //     value
                //     ? "Invalid Phone Number"
                //     :"";
                // break;
                case'contactNo':
                number.contactNo = 
                    value.length <10 || value.length >10
                    ? "Invalid Phone Number"
                    :"";
                break;
                
            default:
            break;
       }
       this.setState({formErrors ,[name]:value},()=>console.log(this.state));
       this.setState({number ,[name]:value} ,()=>console.log(this.state));
   }
   onSubmit(e){
       e.preventDefault()
       console.log("Succesfuly"); 
       if(formValid(this.state.formErrors)|| validatePhoneNumber(this.state.number)){
           console.log(`
                --SUBMITING--
                first_name:${this.state.first_name},
                
                email:${this.state.email},
                contactNo:${this.state.contactNo}
                
           `)
       }
       
       else{
           console.error('Form Invalid - Display Error Masage');
       }
       const SendNotification ={
           first_name:this.state.first_name,
           
           email:this.state.email,
           contactNo:this.state.contactNo,
           
           
       
       }
       console.log("Succesfuly"); 
    //    sendEmail(SendNotification).then(res => {
    //             if(SendNotification){
    //                 this.props.history.push('/supplier/send-email')
    //             }
               
           
    //    })
   }


    render(){
        const {formErrors} = this.state;
        const {number} = this.state;
        return(
            <div className ="bg-img">
             
                <div className ="row">
                
                    <div className ="col-md-6 mt-5 mx-auto">
                    
                        <form  className = "form-container" noValidate onSubmit ={this.onSubmit} > 
                            
                            <h1 className ="h3 mb-3 font-weight-normal">Send Notify About End Trip</h1>
                            <div className="row">
                                <div className ="col-lg-6">
                                    {/* <label htmlFor = "first_name">First Name</label> */}
                                    <input type ="text"
                                            className="form-control"
                                            //className={formErrors.first_name.length >0 ? "error" :null}
                                            name = "first_name"
                                            placeholder ="Enter First Name"
                                            value ={this.state.first_name}
                                            onChange ={this.onChange}
                                            noValidate
                                    
                                    />
                                    {formErrors.first_name.length>0 && (
                                        <span className="errorMessage">{formErrors.first_name}</span>
                                    )}
                                </div>
                                
                        
                            </div>
                            
                            <div className="row">
                                <div className ="col-lg-6">
                                    {/* <label htmlFor = "email">Email Address</label> */}
                                    <input type ="email"
                                            className="form-control"
                                            //className={formErrors.email.length >0 ? "error" :null}
                                            name = "email"
                                            placeholder ="Enter Email"
                                            value ={this.state.email}
                                            onChange ={this.onChange}
                                            noValidate
                                    
                                    />
                                    {formErrors.email.length>0 && (
                                        <span className="errorMessage">{formErrors.email}</span>
                                    )}
                                </div>
                                <div className ="col-lg-6">
                                    {/* <label htmlFor = "contactNo">Contact Number </label> */}
                                    <input type ="text"
                                            className="form-control"
                                            //className={formErrors.contactNo.length >0 ? "error" :null}
                                            name = "contactNo"
                                            placeholder ="Enter Contact Number"
                                            value ={this.state.contactNo}
                                            onChange ={this.onChange}
                                            noValidate
                                    
                                    />
                                    {number.contactNo.length>0 && (
                                        <span className="errorMessage">{number.contactNo}</span>
                                    )}
                                </div>
                            </div>
                            
                            
                            
                            
                            <div className ="row">
                                <div className="col-lg-12">
                                        <button  type ="submit" className ="btn btn-lg btn-primary btn--block">
                                            Send
                                        </button>
                                        
                                </div>
                            </div>
                            
                           

                            
                            
                        </form>
                    </div>
                </div>
            
            </div>


        )
    }
}



export default Notify;

