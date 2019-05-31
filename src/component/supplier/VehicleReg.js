import React , {Component} from 'react';
import axios from 'axios';
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
class VehicleReg extends Component{
    constructor(props){
        super(props)
        this.state ={
            vehicleNo : '',
            contactNo  :'',
            beginingDate : '',
            endingDate : '',
            seatsNo:'',
            onlyVehicle : '',
            ppkm : '',
            vehicleModel : '',
            locations : '',
            vehicleImage : '',
            formErrors:{
                vehicleNo:"",
                // beginingDate:"",
                // endingDate:"",
                // vehicleModel:"",
                // supplier_name:"",
                seatsNo:"",
                // onlyVehicle:"",
                ppkm:"",
                vehicleModel:"",
                locations:"",
                vehicleImage:''
            },
            number:{
                contactNo:""
            }

        }
        this.onChange = this.onChange.bind(this);
        this.vehiRegister = this.vehiRegister.bind(this);
    }

   onChange(e){
       //this.setState({[e.target.name]:e.target.value});
       const {name , value} = e.target;
       let formErrors = this.state.formErrors;
       let number = this.state.number;
       switch(name){
        case'vehicleNo':
        formErrors.vehicleNo = 
            value.length < 3 
                ? "minimum 3 characaters required"
                :"";
        break;
        case'contactNo':
        number.contactNo = 
            value.length <10 || value.length >10
            ? "Invalid Phone Number"
            :"";
        break;
        case'seatsNo':
        formErrors.seatsNo = 
            value.length > 2 
                ? "Check again number of sheet"
                :"";
        break;
        case'ppkm':
        formErrors.ppkm = 
            value > 300 
                ? "less than 300  rupies"
                :"";
        break;
        case'vehicleModel':
        formErrors.vehicleModel = 
            value.length < 3
                ? "minimum 3 characaters required"
                :"";
        break;
        case'locations':
        formErrors.locations = 
            value.length < 6 
                ? "minimum 10 characaters required"
                :"";
        break;

    default:
    break;
    }
    this.setState({formErrors ,[name]:value},()=>console.log(this.state));
    this.setState({number ,[name]:value} ,()=>console.log(this.state));
   }

   vehiRegister(e){
    e.preventDefault();
    if(formValid(this.state.formErrors)|| validatePhoneNumber(this.state.number)){
        console.log(`
             --SUBMITING--
             vehicleNo:${this.state.vehicleNo},
             contactNo:${this.state.contactNo},
             beginingDate:${this.state.beginingDate},
             endingDate:${this.state.endingDate},
             seatsNo:${this.state.seatsNo},
             onlyVehicle:${this.state.onlyVehicle},
             ppkm:${this.state.ppkm},
             vehicleModel:${this.state.vehicleModel},
             locations:${this.state.locations},
             
        `)
    }
    
    else{
        console.error('Form Invalid - Display Error Masage');
    }
    const obj = {
        vehicleNo : this.state.vehicleNo,
        contactNo  :this.state.contactNo,
        beginingDate : this.state.beginingDate,
        endingDate : this.state.endingDate,
        seatsNo:this.state.seatsNo,
        onlyVehicle : this.state.onlyVehicle,
        ppkm : this.state.ppkm,
        vehicleModel : this.state.vehicleModel,
        locations : this.state.locations,
        // vehicleImage : '',
   };
   axios.post( 'http://localhost:4000/vehicle/add/',obj )
       .then(res => {
                if(res){
                    alert("added successfully")
                    // this.props.history.push('/supplier')
                }else{
                    alert("failed")
                }
            })
   }


    render(){
        const {formErrors} = this.state;
        const {number} = this.state;
        console.log("Succesfuly"); 
        return(
            <div className ="bg-img">
                {/* <div className ="container"> */}
                <div className ="row">
                    <div className ="col-md-6 mt-5 mx-auto">
                        <form className = "form-container" noValidate onSubmit ={this.vehiRegister}> 
                            
                            <h1 className ="h3 mb-3 font-weight-normal">Please sign up</h1>
                            <div className="row">
                                <div className="col-lg-6">
                                <label htmlFor = "vehicleNo">Vehicle Number</label>
                                    <input type ="text"
                                        className="form-control"
                                        name = "vehicleNo"
                                        placeholder ="Enter first name"
                                        value ={this.state.vehicleNo}
                                        onChange ={this.onChange}
                                        noValidate
                                
                                    />
                                    {formErrors.vehicleNo.length>0 && (
                                        <span className="errorMessage">{formErrors.vehicleNo}</span>
                                    )}
                                </div>

                                <div className="col-lg-6">
                                <label htmlFor = "contactNo">Contact Number </label>
                                    <input type ="text"
                                        className="form-control"
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
                            <div className="row">
                                        <div className="col-lg-6">
                                            <label htmlFor = "begingdate">Begining Date of Availability</label>
                                            <input type="date"
                                                   //placeholder="Begining Date of Availability" 
                                                   className="form-control" 
                                                   name="beginingDate" 
                                                   value={this.state.beginingDate}
                                                   onChange={this.onChange}
                                                   noValidate
                                            /> 
                                            
                                        </div> 
                                        <div className="col-lg-6">
                                            <label htmlFor = "endingate">Ending Date of Availability</label>
                                            <input type="date"
                                                   //placeholder="Ending Date of Availability" 
                                                   className="form-control" 
                                                   name="endingDate" 
                                                   value={this.state.endingDate}
                                                   onChange={this.onChange}
                                                   noValidate
                                            />
                                        </div>
                            </div><br/>
                            <div className ="row">
                                <div className="col-lg-6">
                                    <label className="radio-inline">
                                        <input type="radio" 
                                            value="driver"
                                            name="onlyVehicle" 
                                            checked={this.state.onlyVehicle === "driver"} 
                                            onChange={this.onChange}
                                            //noValidate
                                        />
                                        With Driver
                                    </label>
                                </div>
                                <div className="col-lg-6">
                                    <label className="radio-inline">
                                        <input type="radio" 
                                            value="nodriver" 
                                            checked ={this.state.onlyVehicle === "nodriver"}
                                            name="onlyVehicle" 
                                            onChange={this.onChange}
                                            //noValidate
                                        />
                                        WithOut Driver
                                    </label>
                                </div>
                            </div><br/>
                            <div className ="row">
                                
                                <div className="col-lg-6">
                                    {/* <label htmlFor = "sheet_num">Number of Sheet </label> */}
                                    <input type ="text"
                                            className="form-control"
                                            //className={formErrors.sheet_num.length >0 ? "error" :null}
                                            name = "seatsNo"
                                            placeholder ="Enter Number of Seat"
                                            value ={this.state.seatsNo}
                                            onChange ={this.onChange}
                                            noValidate
                                    
                                    />
                                    {formErrors.seatsNo.length>0 && (
                                        <span className="errorMessage">{formErrors.seatsNo}</span>
                                    )}
                                </div>
                                <div className="col-lg-6">
                                    {/* <label htmlFor = "pay_per_onekm">Pay per one km</label> */}
                                    <input type ="text"
                                            className="form-control"
                                            //className={formErrors.pay_per_onekm.length >0 ? "error" :null}
                                            name = "ppkm"
                                            placeholder ="Enter Pay per one km"
                                            value ={this.state.ppkm}
                                            onChange ={this.onChange}
                                            noValidate
                                    
                                    />
                                    {formErrors.ppkm.length>0 && (
                                        <span className="errorMessage">{formErrors.ppkm}</span>
                                    )}
                                </div>
                                
                            </div><br/>
                            <div className ="row">
                                <div className="col-lg-6">
                                    {/* <label htmlFor = "location">City of Vehicle </label> */}
                                    <input type ="text"
                                            className="form-control"
                                            //className={formErrors.location.length >0 ? "error" :null}
                                            name = "locations"
                                            placeholder ="Enter Locations of vehicle"
                                            value ={this.state.locations}
                                            onChange ={this.onChange}
                                            noValidate
                                    
                                    />
                                    {formErrors.locations.length>0 && (
                                        <span className="errorMessage">{formErrors.locations}</span>
                                    )}
                                </div>
                                <div className="col-lg-6">
                                    {/* <label htmlFor = "vehicle_model">Vehicle Model </label> */}
                                    <input type ="text"
                                            className="form-control"
                                            //className={formErrors.vehicle_model.length >0 ? "error" :null}
                                            name = "vehicleModel"
                                            placeholder ="Enter the vehicle model"
                                            value ={this.state.vehicleModel}
                                            onChange ={this.onChange}
                                            noValidate
                                    
                                    />
                                    {formErrors.vehicleModel.length>0 && (
                                        <span className="errorMessage">{formErrors.vehicleModel}</span>
                                    )}
                                </div>
                                
                            </div><br/>
                            {/* <button onClick = {this.fileUploadedHandler} type ="submit" className ="btn btn-primary btn--block">
                                    Register
                            </button>
                            <p>Are you already Signup? */}
                                <button onClick = {this.vehiRegister} type ="submit" className ="btn btn-primary btn--block">
                                        Register
                                </button>
                            {/* </p> */}
                        </form>
                        
                    </div>
                </div>
           {/* </div> */}
            </div>


        )
    }
}



export default VehicleReg;

