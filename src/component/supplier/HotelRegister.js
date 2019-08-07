import React , {Component} from 'react';
import './css/Hotel.css';
import {hotelregister} from './UserFunctions';
import validator from 'validator' 

const validatePhoneNumber = number => {
    const isValidPhoneNumber = validator.isMobilePhone(number)
    return (isValidPhoneNumber)
}

const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
const telNum = RegExp(/^[0-9]*$/);
const formValid = formErrors =>{
    let valid = true;

    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false);
    });
    return valid;
}

class HotelRegister extends Component{
    constructor(){
        super()
        this.state ={
            first_name:'',
            last_name:'',
            address:'',
            email:'',
            contactNo:'',
            //hotel_photo:'',
            begingdate:'',
            endingdate:'',
            single_room_num:'',
            double_room_num:'',
            password:'',
            formErrors:{
                first_name:"",
                last_name:"",
                address:"",
                email:"",
                //contactNo:"",
                single_room_num:'',
                double_room_num:'',
                password:""
            },
            number:{
                contactNo:""
            }
            
            
            
            
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    
    }

   onChange(e){
       //this.setState({[e.target.name]:e.target.value})
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
                case'last_name':
                formErrors.last_name = 
                    value.length < 3
                        ? "minimum 3 characaters required"
                        :"";
                break;
                case'address':
                formErrors.address = 
                    value.length < 10 
                        ? "minimum 10 characaters required"
                        :"";
                break;
                case'email':
                formErrors.email = 
                    emailRegex.test(value)
                        ? ''
                        :"Invalid Email Address";
                break;
                case'contactNo':
                number.contactNo = 
                    value.length <10 || value.length >10
                    ? "Invalid Phone Number"
                    :"";
                break;
                case'contactNo':
                formErrors.contactNo = 
                    telNum.test(value)
                        ? ''
                        :"Enter number";
                break;
                case'single_room_num':
                formErrors.single_room_num = 
                    value.length > 2
                        ? "maximum 2 number required"
                        :"";
                break;
                case'double_room_num':
                formErrors.double_room_num = 
                    value.length > 2
                        ? "maximum 2 number required"
                        :"";
                break;
                case'password':
                formErrors.password = 
                    value.length < 6
                        ? "minimum 6 characaters required"
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
             last_name:${this.state.last_name},
             address:${this.state.address},
             email:${this.state.email},
             contactNo:${this.state.contactNo},
            
             single_room_num:${this.state.single_room_num},
             double_room_num:${this.state.double_room_num},
             password:${this.state.password}
        `)
    }
    else{
        console.error('Form Invalid - Display Error Masage');
    }
       const HotelRegister ={
           first_name:this.state.first_name,
           last_name:this.state.last_name,
           address:this.state.address,
           email:this.state.email,
           contactNo:this.state.contactNo,
           //hotel_photo:this.state.hotel_photo,
           begingdate:this.state.begingdate,
           endingdate:this.state.endingdate,
           single_room_num:this.state.single_room_num,
           double_room_num:this.state.double_room_num,
           password:this.state.password
           
       
       }
       hotelregister(HotelRegister).then(res => {
                if(HotelRegister){
                    this.props.history.push('/supplier/login')
                }
               
           
       })
   }


    render(){
        const {formErrors} = this.state;
        const {number} = this.state;
        return(
            <div className ="bg-img">
             
                <div className ="row">
                
                    <div className ="col-md-6 mt-5 mx-auto">
                    
                        <form  className = "form-container" noValidate onSubmit ={this.onSubmit} > 
                            
                            <h1 className ="h3 mb-3 font-weight-normal">Please sign in</h1>
                            <div className="row">
                                <div className ="col-lg-6">
                                    {/* <label htmlFor = "first_name">First Name</label> */}
                                    <input type ="text"
                                            className="form-control"
                                            name = "first_name"
                                            placeholder ="Enter First Name"
                                            value ={this.state.first_name}
                                            onChange ={this.onChange}
                                    
                                    />
                                    {formErrors.first_name.length>0 && (
                                        <span className="errorMessage">{formErrors.first_name}</span>
                                    )}
                                </div>
                                
                                <div className ="col-lg-6">
                                    {/* <label htmlFor = "last_name">Last Name </label> */}
                                    <input type ="text"
                                            className="form-control"
                                            name = "last_name"
                                            placeholder ="Enter Last Name"
                                            value ={this.state.last_name}
                                            onChange ={this.onChange}
                                    
                                    />
                                    {formErrors.last_name.length>0 && (
                                        <span className="errorMessage">{formErrors.last_name}</span>
                                    )}
                                </div>
                            </div><br/>
                            <div className ="row">
                                <div className ="col-lg-12">
                                    {/* <label htmlFor = "address">Address</label> */}
                                    <input type ="text"
                                            className="form-control"
                                            name = "address"
                                            placeholder ="Enter Your Permanent address"
                                            value ={this.state.address}
                                            onChange ={this.onChange}
                                    
                                    />
                                    {formErrors.address.length>0 && (
                                        <span className="errorMessage">{formErrors.address}</span>
                                    )}
                                </div>
                            </div><br/>
                            <div className="row">
                                <div className ="col-lg-6">
                                    {/* <label htmlFor = "email">Email Address</label> */}
                                    <input type ="email"
                                            className="form-control"
                                            name = "email"
                                            placeholder ="Enter Email"
                                            value ={this.state.email}
                                            onChange ={this.onChange}
                                    
                                    />
                                     {formErrors.email.length>0 && (
                                        <span className="errorMessage">{formErrors.email}</span>
                                    )}
                                </div>
                                <div className ="col-lg-6">
                                    {/* <label htmlFor = "contactNo">Contact Number </label> */}
                                    <input type ="text"
                                            className="form-control"
                                            name = "contactNo"
                                            placeholder ="Enter Contact Number"
                                            value ={this.state.contactNo}
                                            onChange ={this.onChange}
                                    
                                    />
                                    {number.contactNo.length>0 && (
                                        <span className="errorMessage">{number.contactNo}</span>
                                    )}
                                </div>
                            </div><br/>
                            
                            
                            
                            {/* <div className ="row">
                                <div className="col-lg-12">
                                    <label htmlFor = "hotel_photo" >Hotel Photo</label>
                                    <input type ="file"
                                            className="form-control"
                                            name = "hotel_photo"
                                            placeholder ="Select your Hotel Photo"
                                            value ={this.state.hotel_photo}
                                            onChange ={this.onChange}
                                    
                                    />
                                </div>
                                
                            </div><br/> */}

                            <div className="row">
                                        <div className="col-lg-6">
                                            <label htmlFor = "begingdate">Begining Date of Availability</label>
                                            <input placeholder="Begining Date of Availability" 
                                                   className="form-control" 
                                                   name="begingdate" 
                                                   onChange={this.onChange} 
                                                   type="date" 
                                                   value={this.state.begingdate}
                                            />  
                                        </div> 
                                        <div className="col-lg-6">
                                            <label htmlFor = "endingdate">Ending Date of Availability</label>
                                            <input placeholder="Ending Date of Availability" 
                                                   className="form-control" 
                                                   name="endingdate" 
                                                   onChange={this.onChange} 
                                                   type="date" 
                                                   value={this.state.endingdate}
                                            />
                                        </div>
                            </div><br/>
                            
                            <div className ="row">
                                
                                <div className="col-lg-6">
                                    
                                    <input type ="text"
                                            className="form-control"
                                            name = "single_room_num"
                                            placeholder ="Enter Number of Single Room"
                                            value ={this.state.single_room_num}
                                            onChange ={this.onChange}
                                    
                                    />
                                    {formErrors.single_room_num.length>0 && (
                                        <span className="errorMessage">{formErrors.single_room_num}</span>
                                    )}
                                </div>
                                <div className="col-lg-6">
                                    
                                    <input type ="text"
                                            className="form-control"
                                            name = "double_room_num"
                                            placeholder ="Enter Number of Double Room"
                                            value ={this.state.double_room_num}
                                            onChange ={this.onChange}
                                    
                                    />
                                    {formErrors.double_room_num.length>0 && (
                                        <span className="errorMessage">{formErrors.double_room_num}</span>
                                    )}
                                </div>
                                
                            </div><br/>
                            
                            <div className="row">
                                    <div className="col-lg-12">
                                        
                                        <input type ="password"
                                                className="form-control"
                                                name = "password"
                                                placeholder ="Enter Password "
                                                value ={this.state.password}
                                                onChange ={this.onChange}
                                        
                                        />
                                        {formErrors.password.length>0 && (
                                            <span className="errorMessage">{formErrors.password}</span>
                                        )}
                                    </div>
                                   
                            </div><br/>
                            {/* <div className="row">
                                
                                    <div className="col-lg-12">
                                        <input type ="password"
                                                className="form-control"
                                                name = "password"
                                                placeholder ="Confirm Password "
                                                value ={this.state.password}
                                                onChange ={this.onChange}
                                        
                                        />
                                        
                                    </div>
                            
                            </div><br/> */}
                            <div className ="row">
                                <div className="col-lg-12">
                                        <button  type ="submit" className ="btn btn-lg btn-primary btn--block">
                                            Register
                                        </button>
                                        <small>Are you already account exit?</small>
                                </div>
                            </div>
                            
                           

                            
                            
                        </form>
                    </div>
                </div>
            
            </div>


        )
    }
}



export default HotelRegister;

