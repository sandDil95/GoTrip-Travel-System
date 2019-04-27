import React , {Component} from 'react';
import './css/Vehicle.css';
import {vehicleregister} from './UserFunctions';
import validator from 'validator' 

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

class VehicleRegister extends Component{
    constructor(){
        super()
        this.state ={
            first_name:'',
            last_name:'',
            address:'',
            email:'',
            contactNo:'',
            withDriver:'True',
            withoutDriver:'False',
            vehicle_photo:'',
            vehicle_model:'',
            supplier_name:'',
            vehicle_no:'',
            begingdate:'',
            endingdate:'',
            location:'',
            sheet_num:'',
            pay_per_onekm:'',
            profile_image:'',
            password:'',
            formErrors:{
                first_name:"",
                last_name:"",
                address:"",
                email:"",
                //contactNo:"",
                //withDriver:'True',
                //withoutDriver:'False',
                //vehicle_photo:"",
                vehicle_model:"",
                supplier_name:"",
                vehicle_no:"",
                location:"",
                sheet_num:"",
                pay_per_onekm:"",
                //profile_image:"",
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
                case'vehicle_model':
                formErrors.vehicle_model = 
                    value.length < 3 
                        ? "minimum 3 characaters required"
                        :"";
                break;
                case'supplier_name':
                formErrors.supplier_name = 
                    value.length < 3 
                        ? "minimum 3 characaters required"
                        :"";
                break;
                case'vehicle_no':
                formErrors.vehicle_no = 
                    value.length < 3 
                        ? "minimum 3 characaters required"
                        :"";
                break;
                case'location':
                formErrors.location = 
                    value.length < 6 
                        ? "minimum 6 characaters required"
                        :"";
                break;
                case'sheet_num':
                formErrors.sheet_num = 
                    value.length > 2 
                        ? "Check again number of sheet"
                        :"";
                break;
                case'pay_per_onekm':
                formErrors.pay_per_onekm = 
                    value > 300 
                        ? "less than 300  rupies"
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
                withDriver:${this.state.withDriver},
                withoutDriver:${this.state.withoutDriver},
                vehicale_photo:${this.state.vehicale_photo},
                vehicle_model:${this.state.vehicle_model},
                supplier_name:${this.state.supplier_name},
                vehicle_no:${this.state.vehicle_no},
                location:${this.state.location},
                sheet_num:${this.state.sheet_num},
                pay_per_onekm:${this.state.pay_per_onekm},
                profile_image:${this.state.profile_image},
                password:${this.state.password}
           `)
       }
       
       else{
           console.error('Form Invalid - Display Error Masage');
       }
       const VehicleRegister ={
           first_name:this.state.first_name,
           last_name:this.state.last_name,
           address:this.state.address,
           email:this.state.email,
           contactNo:this.state.contactNo,
           withDriver:this.state.withDriver,
           withoutDriver:this.state.withoutDriver,
           vehicale_photo:this.state.vehicale_photo,
           vehicle_model:this.state.vehicle_model,
           supplier_name:this.state.supplier_name,
           vehicle_no:this.state.vehicle_no,
           begingdate:this.state.begingdate,
           endingdate:this.state.endingdate,
           location:this.state.location,
           sheet_num:this.state.sheet_num,
           pay_per_onekm:this.state.pay_per_onekm,
           profile_image:this.state.profile_image,
           password:this.state.password
           
       
       }
       console.log("Succesfuly"); 
       vehicleregister(VehicleRegister).then(res => {
                if(VehicleRegister){
                    this.props.history.push('/supplier/login')
                }
               
           
       })
   }


    render(){
        const {formErrors} = this.state;
        const {number} = this.state;
        console.log("Succesfuly"); 
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
                                
                                <div className ="col-lg-6">
                                    {/* <label htmlFor = "last_name">Last Name </label> */}
                                    <input type ="text"
                                            className="form-control"
                                            //className={formErrors.last_name.length >0 ? "error" :null}
                                            name = "last_name"
                                            placeholder ="Enter Last Name"
                                            value ={this.state.last_name}
                                            onChange ={this.onChange}
                                            noValidate
                                    
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
                                            //className={formErrors.address.length >0 ? "error" :null}
                                            name = "address"
                                            placeholder ="Enter Your Permanent address"
                                            value ={this.state.address}
                                            onChange ={this.onChange}
                                            noValidate
                                    
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
                                    <input type ="tel"
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
                            </div><br/>
                            <div className ="row">
                                <div className="col-lg-6">
                                    <label className="radio-inline">
                                        <input type="radio" 
                                            value={this.state.withDriver} 
                                            name="size"  
                                            onChange={this.onChange}
                                            noValidate
                                        />
                                        With Driver
                                    </label>
                                </div>
                                <div className="col-lg-6">
                                    <label className="radio-inline">
                                        <input type="radio" 
                                            value={this.state.withoutDriver} 
                                            name="size" 
                                            onChange={this.onChange}
                                            noValidate
                                        />
                                        WithOut Driver
                                    </label>
                                </div>
                            </div><br/>
                            
                            
                            <div className ="row">
                                <div className="col-lg-12">
                                    <label htmlFor = "vehicle_photo" >Vehicale Photo</label>
                                    <input type ="file"
                                            className="form-control"
                                            name = "vehicale_photo"
                                            placeholder ="Select your Vehicle Photo"
                                            value ={this.state.vehicale_photo}
                                            onChange ={this.onChange}
                                            noValidate
                                    
                                    />
                                </div>
                                <div className="col-lg-12">
                                    <label htmlFor = "profile_image" >Your Photo</label>
                                    <input type ="file"
                                            className="form-control"
                                            name = "profile_image"
                                            placeholder ="Select your Photo"
                                            value ={this.state.profile_image}
                                            onChange ={this.onChange}
                                            noValidate
                                    
                                    />
                                </div>
                                
                            </div><br/>
                            <div className="row">
                                        <div className="col-lg-6">
                                            <label htmlFor = "begingdate">Begining Date of Availability</label>
                                            <input type="date"
                                                   //placeholder="Begining Date of Availability" 
                                                   className="form-control" 
                                                   name="begingdate" 
                                                   value={this.state.begingdate}
                                                   onChange={this.onChange}
                                            />  
                                        </div> 
                                        <div className="col-lg-6">
                                            <label htmlFor = "endingdate">Ending Date of Availability</label>
                                            <input type="date"
                                                   //placeholder="Ending Date of Availability" 
                                                   className="form-control" 
                                                   name="endingdate" 
                                                   
                                                   value={this.state.endingdate}
                                                   onChange={this.onChange}
                                            />
                                        </div>
                            </div><br/>
                            <div className ="row">
                                <div className="col-lg-6">
                                    {/* <label htmlFor = "location">City of Vehicle </label> */}
                                    <input type ="text"
                                            className="form-control"
                                            //className={formErrors.location.length >0 ? "error" :null}
                                            name = "location"
                                            placeholder ="Enter Locations of vehicle"
                                            value ={this.state.location}
                                            onChange ={this.onChange}
                                            noValidate
                                    
                                    />
                                    {formErrors.location.length>0 && (
                                        <span className="errorMessage">{formErrors.location}</span>
                                    )}
                                </div>
                                <div className="col-lg-6">
                                    {/* <label htmlFor = "vehicle_model">Vehicle Model </label> */}
                                    <input type ="text"
                                            className="form-control"
                                            //className={formErrors.vehicle_model.length >0 ? "error" :null}
                                            name = "vehicle_model"
                                            placeholder ="Enter the vehicle model"
                                            value ={this.state.vehicle_model}
                                            onChange ={this.onChange}
                                            noValidate
                                    
                                    />
                                    {formErrors.vehicle_model.length>0 && (
                                        <span className="errorMessage">{formErrors.vehicle_model}</span>
                                    )}
                                </div>
                                
                            </div><br/>
                            <div className ="row">
                                
                                <div className="col-lg-6">
                                    {/* <label htmlFor = "sheet_num">Number of Sheet </label> */}
                                    <input type ="text"
                                            className="form-control"
                                            //className={formErrors.sheet_num.length >0 ? "error" :null}
                                            name = "supplier_name"
                                            placeholder ="Enter Supplier Name"
                                            value ={this.state.supplier_name}
                                            onChange ={this.onChange}
                                            noValidate
                                    
                                    />
                                    {formErrors.supplier_name.length>0 && (
                                        <span className="errorMessage">{formErrors.supplier_name}</span>
                                    )}
                                </div>
                                <div className="col-lg-6">
                                    {/* <label htmlFor = "pay_per_onekm">Pay per one km</label> */}
                                    <input type ="text"
                                            className="form-control"
                                            //className={formErrors.pay_per_onekm.length >0 ? "error" :null}
                                            name = "vehicle_no"
                                            placeholder ="Enter Vehicle Number"
                                            value ={this.state.vehicle_no}
                                            onChange ={this.onChange}
                                            noValidate
                                    
                                    />
                                    {formErrors.vehicle_no.length>0 && (
                                        <span className="errorMessage">{formErrors.vehicle_no}</span>
                                    )}
                                </div>
                                
                            </div><br/>
                            
                            <div className ="row">
                                
                                <div className="col-lg-6">
                                    {/* <label htmlFor = "sheet_num">Number of Sheet </label> */}
                                    <input type ="text"
                                            className="form-control"
                                            //className={formErrors.sheet_num.length >0 ? "error" :null}
                                            name = "sheet_num"
                                            placeholder ="Enter Number of Sheet"
                                            value ={this.state.sheet_num}
                                            onChange ={this.onChange}
                                            noValidate
                                    
                                    />
                                    {formErrors.sheet_num.length>0 && (
                                        <span className="errorMessage">{formErrors.sheet_num}</span>
                                    )}
                                </div>
                                <div className="col-lg-6">
                                    {/* <label htmlFor = "pay_per_onekm">Pay per one km</label> */}
                                    <input type ="text"
                                            className="form-control"
                                            //className={formErrors.pay_per_onekm.length >0 ? "error" :null}
                                            name = "pay_per_onekm"
                                            placeholder ="Enter Pay per one km"
                                            value ={this.state.pay_per_onekm}
                                            onChange ={this.onChange}
                                            noValidate
                                    
                                    />
                                    {formErrors.pay_per_onekm.length>0 && (
                                        <span className="errorMessage">{formErrors.pay_per_onekm}</span>
                                    )}
                                </div>
                                
                            </div><br/>
                            
                            <div className="row">
                                    <div className="col-lg-12">
                                        
                                        <input type ="password"
                                                className="form-control"
                                                //className={formErrors.password.length >0 ? "error" :null}
                                                name = "password"
                                                placeholder ="Enter Password "
                                                value ={this.state.password}
                                                onChange ={this.onChange}
                                                noValidate
                                        
                                        />
                                        {formErrors.password.length>0 && (
                                            <span className="errorMessage">{formErrors.password}</span>
                                        )}
                                    </div>
                                   
                            </div><br/>
                            <div className="row">
                                
                                    <div className="col-lg-12">
                                        <input type ="password"
                                                className="form-control"
                                                name = "password"
                                                placeholder ="Confirm Password "
                                                value ={this.state.password}
                                                onChange ={this.onChange}
                                                noValidate
                                        
                                        />
                                        
                                    </div>
                                            
                            </div><br/>
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
console.log("Succesfuly"); 


export default VehicleRegister;

