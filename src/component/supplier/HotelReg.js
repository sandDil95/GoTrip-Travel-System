import React , {Component} from 'react';
import axios from 'axios';

class HotelReg extends Component{
    constructor(props){
        super(props)
        this.state ={
            hotelName : '',
            contactNo  :'',
            place : '',
            hotelType : '',
            single_room_num:'',
            double_room_num : '',
            hotelImage : '',

        }
        this.onChange = this.onChange.bind(this)
        // this.onSubmit = this.onSubmit.bind(this)
        // this.logintosupplier = this.logintosupplier.bind(this);
        this.hotelRegister = this.hotelRegister.bind(this);
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
   hotelRegister(e){
    e.preventDefault();
    const obj = {
        hotelName : this.state.hotelName,
        contactNo  :this.state.contactNo,
        place : this.state.place,
        hotelType : this.state.hotelType,
        single_room_num:this.state.single_room_num,
        double_room_num : this.state.double_room_num,
        
        // vehicleImage : '',
   };
   axios.post( 'http://localhost:4000/hotel/add/',obj )
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
                                <div className="col-lg-6">
                                <label htmlFor = "hotelName">Hotel Name</label>
                                    <input type ="text"
                                        className="form-control"
                                        name = "hotelName"
                                        placeholder ="Enter hotel name"
                                        value ={this.state.hotelName}
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
                                            <label htmlFor = "place">Hotel Place</label>
                                            <input type="text"
                                                   //placeholder="Begining Date of Availability" 
                                                   className="form-control" 
                                                   name="place" 
                                                   placeholder ="Enter hotel place"
                                                   value={this.state.place}
                                                   onChange={this.onChange}
                                            />  
                                        </div> 
                                        <div className="col-lg-6">
                                            <label htmlFor = "hotelType">Hotel Type</label>
    
                                            <select className="form-control" 
                                                name="hotelType" 
                                                value={this.state.hotelType} 
                                                onChange={this.onChange}>
                                                    <option>1 Start </option>
                                                    <option>2 Start</option>
                                                    <option>3 Start</option>
                                                    <option>4 Start</option>
                                                    <option>5 Start</option>
                                                    <option>Buteq Luxury</option>
                                                    <option>Villas</option>
                                                    <option>Resort</option>
                                                
                                            </select>
                                        </div>
                            </div><br/>
            
                            <div className ="row">
                                
                                <div className="col-lg-6">
                                    {/* <label htmlFor = "sheet_num">Number of Sheet </label> */}
                                    <input type ="text"
                                            className="form-control"
                                            //className={formErrors.sheet_num.length >0 ? "error" :null}
                                            name = "single_room_num"
                                            placeholder ="Enter number of single room"
                                            value ={this.state.single_room_num}
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
                                            name = "double_room_num"
                                            placeholder ="Enter number of double room"
                                            value ={this.state.double_room_num}
                                            onChange ={this.onChange}
                                            //noValidate
                                    
                                    />
                                    {/* {formErrors.pay_per_onekm.length>0 && (
                                        <span className="errorMessage">{formErrors.pay_per_onekm}</span>
                                    )} */}
                                </div>
                                
                            </div><br/>
                            
                            {/* <button onClick = {this.fileUploadedHandler} type ="submit" className ="btn btn-primary btn--block">
                                    Register
                            </button>
                            <p>Are you already Signup? */}
                                <button onClick = {this.hotelRegister} type ="submit" className ="btn btn-primary btn--block">
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



export default HotelReg;

