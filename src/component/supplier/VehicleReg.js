import React , {Component} from 'react';
import axios from 'axios';

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

        }
        this.onChange = this.onChange.bind(this)
        // this.onSubmit = this.onSubmit.bind(this)
        // this.logintosupplier = this.logintosupplier.bind(this);
        this.vehiRegister = this.vehiRegister.bind(this);
    }

   onChange(e){
       this.setState({[e.target.name]:e.target.value})
   }
//    onSubmit(e){
//        e.preventDefault()

//        const user ={
//            vehicleNo:this.state.vehicleNo,
//            contactNo:this.state.contactNo,
//            beginingDate:this.state.beginingDate,
//            endingDate:this.state.endingDate,
//            seatsNo:this.state.seatsNo,
//            onlyVehicle : this.state.onlyVehicle,
//            ppkm : this.state.ppkm,
//            vehicleModel : this.state.vehicleModel,
//            locations : this.state.locations,
//            vehicleImage : this.state.vehicleImage,
//         //    selectedFile:this.state.selectedFile
//        }
//        register(user).then(res => {
           
//                this.props.history.push('/supplier-login')
           
//        })
//    }
   vehiRegister(e){
    e.preventDefault();
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
//    logintosupplier(e){
//      this.props.history.push('/supplier-login')
//    }
//    state={
//        selectedFile:null
//    }
//    fileSelectedHandler = event =>{
//        this.setState({
//            selectedFile:event.target.files[0]
//        })
//    }
//    fileUploadedHandler = () =>{
//         axios.post('http://');
//    }

    render(){
        return(
            <div className ="bg-img">
                {/* <div className ="container"> */}
                <div className ="row">
                    <div className ="col-md-6 mt-5 mx-auto">
                        <form className = "form-container" noValidate onSubmit ={this.onSubmit}> 
                            
                            <h1 className ="h3 mb-3 font-weight-normal">Please sign in</h1>
                            <div className="row">
                                <div className="col-lg-6">
                                <label htmlFor = "vehicleNo">Vehicle Number</label>
                                    <input type ="text"
                                        className="form-control"
                                        name = "vehicleNo"
                                        placeholder ="Enter first name"
                                        value ={this.state.vehicleNo}
                                        onChange ={this.onChange}
                                
                                    />
                                </div>
                            
                                <div className="col-lg-6">
                                <label htmlFor = "contactNo">Contact Number </label>
                                    <input type ="text"
                                        className="form-control"
                                        name = "contactNo"
                                        placeholder ="Enter Contact Number"
                                        value ={this.state.contactNo}
                                        onChange ={this.onChange}
                                
                                    />
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
                                            //noValidate
                                    
                                    />
                                    {/* {formErrors.sheet_num.length>0 && (
                                        <span className="errorMessage">{formErrors.sheet_num}</span>
                                    )} */}
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
                                            //noValidate
                                    
                                    />
                                    {/* {formErrors.pay_per_onekm.length>0 && (
                                        <span className="errorMessage">{formErrors.pay_per_onekm}</span>
                                    )} */}
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
                                            //noValidate
                                    
                                    />
                                    {/* {formErrors.location.length>0 && (
                                        <span className="errorMessage">{formErrors.location}</span>
                                    )} */}
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
                                            //noValidate
                                    
                                    />
                                    {/* {formErrors.vehicle_model.length>0 && (
                                        <span className="errorMessage">{formErrors.vehicle_model}</span>
                                    )} */}
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

