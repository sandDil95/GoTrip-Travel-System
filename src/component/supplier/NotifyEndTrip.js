import React , {Component} from 'react';
import axios from 'axios';

class NotifyEndTrip extends Component{
    constructor(props){
        super(props)
        this.state ={
            first_name:'',
            last_name:'',
            supplier_name:'',
            vehicle_no:'',
            begingdate:'',
            endingdate:'',
            travled_place:'',
            total_distanse:'',
            //distanse_ammount:'',
            guide_fee:'',
            parcking_fee:'',
            entry_ticket:'',
            highway_ticket:'',
            other_fee:'',

        }
        this.onChange = this.onChange.bind(this)
        // this.onSubmit = this.onSubmit.bind(this)
        // this.logintosupplier = this.logintosupplier.bind(this);
        this.notifyTrip = this.notifyTrip.bind(this);
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
   notifyTrip(e){
    e.preventDefault();
    const obj = {
        first_name:this.state.first_name,
           last_name:this.state.last_name,
           supplier_name:this.state.supplier_name,
           vehicle_no:this.state.vehicle_no,
           begingdate:this.state.begingdate,
           endingdate:this.state.endingdate,
           travled_place:this.state.travled_place,
           total_distanse:this.state.total_distanse,
           //distanse_ammount:this.state.distanse_ammount,
           guide_fee:this.state.guide_fee,
           parcking_fee:this.state.parcking_fee,
           entry_ticket:this.state.entry_ticket,
           highway_ticket:this.state.highway_ticket,
           other_fee:this.state.other_fee
        
        // vehicleImage : '',
   };
   axios.post( 'http://localhost:4000/notify/add/',obj )
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
                        <form className = "form-container" onSubmit ={this.onSubmit}> 
                            
                            <h1 className ="h3 mb-3 font-weight-normal">Please sign Up</h1>
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
                                            //noValidate
                                    
                                    />
                                    {/* {formErrors.first_name.length>0 && (
                                        <span className="errorMessage">{formErrors.first_name}</span>
                                    )} */}
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
                                            //noValidate
                                    
                                    />
                                    {/* {formErrors.last_name.length>0 && (
                                        <span className="errorMessage">{formErrors.last_name}</span>
                                    )} */}
                                </div><br/>
                        
                            </div>
                            
                            <div className="row">
                                <div className ="col-lg-6">
                                    {/* <label htmlFor = "email">Email Address</label> */}
                                    <input type ="text"
                                            className="form-control"
                                            //className={formErrors.email.length >0 ? "error" :null}
                                            name = "supplier_name"
                                            placeholder ="Enter Supplier Name"
                                            value ={this.state.supplier_name}
                                            onChange ={this.onChange}
                                            //noValidate
                                    
                                    />
                                    {/* {formErrors.email.length>0 && (
                                        <span className="errorMessage">{formErrors.email}</span>
                                    )} */}
                                </div>
                                <div className ="col-lg-6">
                                    {/* <label htmlFor = "contactNo">Contact Number </label> */}
                                    <input type ="text"
                                            className="form-control"
                                            //className={formErrors.contactNo.length >0 ? "error" :null}
                                            name = "vehicle_no"
                                            placeholder ="Enter Vehicle Number"
                                            value ={this.state.vehicle_no}
                                            onChange ={this.onChange}
                                            //noValidate
                                    
                                    />
                                    {/* {number.contactNo.length>0 && (
                                        <span className="errorMessage">{number.contactNo}</span>
                                    )} */}
                                </div>
                            </div><br/>
                            <div className="row">
                                        <div className="col-lg-6">
                                            <label htmlFor = "begingdate">Begining Date</label>
                                            <input type="date"
                                                   //placeholder="Begining Date of Availability" 
                                                   className="form-control" 
                                                   name="begingdate" 
                                                   value={this.state.begingdate}
                                                   onChange={this.onChange}
                                            />  
                                        </div> 
                                        <div className="col-lg-6">
                                            <label htmlFor = "endingdate">Ending Date</label>
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
                                <div className ="col-lg-12">
                                    {/* <label htmlFor = "address">Address</label> */}
                                    <input type ="text"
                                            className="form-control"
                                            //className={formErrors.address.length >0 ? "error" :null}
                                            name = "travled_place"
                                            placeholder ="Enter Travled Place"
                                            value ={this.state.travled_place}
                                            onChange ={this.onChange}
                                            //noValidate
                                    
                                    />
                                    {/* {formErrors.address.length>0 && (
                                        <span className="errorMessage">{formErrors.address}</span>
                                    )} */}
                                </div>
                            </div><br/>
                           
                            <div className="row">
                                <div className ="col-lg-6">
                                    {/* <label htmlFor = "email">Email Address</label> */}
                                    <input type ="text"
                                            className="form-control"
                                            //className={formErrors.email.length >0 ? "error" :null}
                                            name = "guide_fee"
                                            placeholder ="Enter Total Guide Fee"
                                            value ={this.state.guide_fee}
                                            onChange ={this.onChange}
                                            //noValidate
                                    
                                    />
                                    {/* {formErrors.email.length>0 && (
                                        <span className="errorMessage">{formErrors.email}</span>
                                    )} */}
                                </div>
                                <div className ="col-lg-6">
                                    {/* <label htmlFor = "contactNo">Contact Number </label> */}
                                    <input type ="text"
                                            className="form-control"
                                            //className={formErrors.contactNo.length >0 ? "error" :null}
                                            name = "parcking_fee"
                                            placeholder ="Enter Total Parcking Fee"
                                            value ={this.state.parcking_fee}
                                            onChange ={this.onChange}
                                            //noValidate
                                    
                                    />
                                    {/* {number.contactNo.length>0 && (
                                        <span className="errorMessage">{number.contactNo}</span>
                                    )} */}
                                </div>
                            </div><br/>
                            <div className="row">
                                <div className ="col-lg-6">
                                    {/* <label htmlFor = "email">Email Address</label> */}
                                    <input type ="text"
                                            className="form-control"
                                            //className={formErrors.email.length >0 ? "error" :null}
                                            name = "entry_ticket"
                                            placeholder ="Enter Entire Ticket Number"
                                            value ={this.state.entry_ticket}
                                            onChange ={this.onChange}
                                            //noValidate
                                    
                                    />
                                    {/* {formErrors.email.length>0 && (
                                        <span className="errorMessage">{formErrors.email}</span>
                                    )} */}
                                </div>
                                <div className ="col-lg-6">
                                    {/* <label htmlFor = "contactNo">Contact Number </label> */}
                                    <input type ="text"
                                            className="form-control"
                                            //className={formErrors.contactNo.length >0 ? "error" :null}
                                            name = "highway_ticket"
                                            placeholder ="Enter Highway Ticket Number"
                                            value ={this.state.highway_ticket}
                                            onChange ={this.onChange}
                                            //noValidate
                                    
                                    />
                                    {/* {number.contactNo.length>0 && (
                                        <span className="errorMessage">{number.contactNo}</span>
                                    )} */}
                                </div>
                            </div><br/>
                            
                            <div className="row">
                                <div className ="col-lg-6">
                                    {/* <label htmlFor = "email">Email Address</label> */}
                                    <input type ="text"
                                            className="form-control"
                                            //className={formErrors.email.length >0 ? "error" :null}
                                            name = "total_distanse"
                                            placeholder ="Enter Total Distanse"
                                            value ={this.state.total_distanse}
                                            onChange ={this.onChange}
                                            //noValidate
                                    
                                    />
                                    {/* {formErrors.email.length>0 && (
                                        <span className="errorMessage">{formErrors.email}</span>
                                    )} */}
                                </div>
                                <div className ="col-lg-6">
                                    {/* <label htmlFor = "contactNo">Contact Number </label> */}
                                    <input type ="text"
                                            className="form-control"
                                            //className={formErrors.contactNo.length >0 ? "error" :null}
                                            name = "other_fee"
                                            placeholder ="Enter Other Fee"
                                            value ={this.state.other_fee}
                                            onChange ={this.onChange}
                                            //noValidate
                                    
                                    />
                                    {/* {number.contactNo.length>0 && (
                                        <span className="errorMessage">{number.contactNo}</span>
                                    )} */}
                                </div>
                            </div><br/>
                            
                            {/* <button onClick = {this.fileUploadedHandler} type ="submit" className ="btn btn-primary btn--block">
                                    Register
                            </button>
                            <p>Are you already Signup? */}
                                <button onClick = {this.notifyTrip} type ="submit" className ="btn btn-primary btn--block">
                                        Send
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



export default NotifyEndTrip;

