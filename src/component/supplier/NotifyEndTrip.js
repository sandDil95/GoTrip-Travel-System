import React , {Component} from 'react';
import axios from 'axios';
import validator from 'validator';

// const validatePhoneNumber = number => {
//     const isValidPhoneNumber = validator.isMobilePhone(number)
//     return (isValidPhoneNumber)
// }
// const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
// //const telNum = RegExp(/^[0-9]*$/);
const formValid = formErrors =>{
    let valid = true;

    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false);
    });
    return valid;
    
}

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
            formErrors:{
                first_name:"",
                last_name:"",
                supplier_name:"",
                vehicle_no:"",
                //begingdate:"",
                //endingdate:"",
                travled_place:"",
                total_distanse:"",
                guide_fee:"",
                parcking_fee:"",
                entry_ticket:"",
                highway_ticket:"",
                other_fee:""

            }

        }
        this.onChange = this.onChange.bind(this)
        // this.onSubmit = this.onSubmit.bind(this)
        // this.logintosupplier = this.logintosupplier.bind(this);
        this.notifyTrip = this.notifyTrip.bind(this);
    }

   onChange(e){
       //this.setState({[e.target.name]:e.target.value});
       const {name , value} = e.target;
       let formErrors = this.state.formErrors;
       //let number = this.state.number;

       switch(name){
            case'first_name':
            formErrors.first_name =
                value.length < 3
                    ?"minimum 3 characaters required" 
                    :""; 
            break;
            case'last_name':
            formErrors.last_name =
                value.length < 3
                    ?"minimum 3 characaters required" 
                    :""; 
            break;
            case'supplier_name':
            formErrors.supplier_name =
                value.length < 3
                    ?"minimum 3 characaters required" 
                    :""; 
            break;
            case'vehicle_no':
            formErrors.vehicle_no =
                value.length < 3
                    ?"minimum 3 characaters required" 
                    :""; 
            break;
            case'travled_place':
            formErrors.travled_place =
                value.length < 3
                    ?"minimum 3 characaters required" 
                    :""; 
            break;
            case'total_distanse':
            formErrors.total_distanse =
                value.length < 3
                    ?"minimum 3 characaters required" 
                    :""; 
            break;
            case'guide_fee':
            formErrors.guide_fee =
                value.length < 3
                    ?"minimum 3 characaters required" 
                    :""; 
            break;
            case'parcking_fee':
            formErrors.parcking_fee =
                value.length < 3
                    ?"minimum 3 characaters required" 
                    :""; 
            break;
            case'entry_ticket':
            formErrors.entry_ticket =
                value.length < 3
                    ?"minimum 3 characaters required" 
                    :""; 
            break;
            case'highway_ticket':
            formErrors.highway_ticket =
                value.length < 3
                    ?"minimum 3 characaters required" 
                    :""; 
            break;
            case'other_fee':
            formErrors.other_fee =
                value.length < 3
                    ?"minimum 3 characaters required" 
                    :""; 
            break;
       }
       this.setState({formErrors ,[name]:value},()=>console.log(this.state));
   }

   notifyTrip(e){
    e.preventDefault();
    if(formValid(this.state.formErrors)){
        console.log(`
             --SUBMITING--
             first_name:${this.state.first_name},
             last_name:${this.state.last_name},
             supplier_name:${this.state.supplier_name},
             vehicle_no:${this.state.vehicle_no},
             begingdate:${this.state.begingdate},
             endingdate:${this.state.endingdate},
             
             travled_place:${this.state.travled_place},
             total_distanse:${this.state.total_distanse},
             guide_fee:${this.state.guide_fee},
             parcking_fee:${this.state.parcking_fee},
             entry_ticket:${this.state.entry_ticket},
             highway_ticket:${this.state.highway_ticket},
             other_fee:${this.state.other_fee}
        `)
    }
    
    else{
        console.error('Form Invalid - Display Error Masage');
    }
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


    render(){
        const {formErrors} = this.state;
        return(
            <div className ="bg-img">
                {/* <div className ="container"> */}
                <div className ="row">
                    <div className ="col-md-6 mt-5 mx-auto">
                        <form className = "form-container" noValidate onSubmit ={this.onSubmit}> 
                            
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
                                            noValidate
                                    
                                    />
                                    {formErrors.supplier_name.length>0 && (
                                        <span className="errorMessage">{formErrors.supplier_name}</span>
                                    )}
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
                                            noValidate
                                    
                                    />
                                    {formErrors.vehicle_no.length>0 && (
                                        <span className="errorMessage">{formErrors.vehicle_no}</span>
                                    )}
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
                                            noValidate
                                    
                                    />
                                    {formErrors.travled_place.length>0 && (
                                        <span className="errorMessage">{formErrors.travled_place}</span>
                                    )}
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
                                            noValidate
                                    
                                    />
                                    {formErrors.guide_fee.length>0 && (
                                        <span className="errorMessage">{formErrors.guide_fee}</span>
                                    )}
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
                                            noValidate
                                    
                                    />
                                    {formErrors.parcking_fee.length>0 && (
                                        <span className="errorMessage">{formErrors.parcking_fee}</span>
                                    )}
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
                                            noValidate
                                    
                                    />
                                    {formErrors.entry_ticket.length>0 && (
                                        <span className="errorMessage">{formErrors.entry_ticket}</span>
                                    )}
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
                                            noValidate
                                    
                                    />
                                    {formErrors.highway_ticket.length>0 && (
                                        <span className="errorMessage">{formErrors.highway_ticket}</span>
                                    )}
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
                                            noValidate
                                    
                                    />
                                    {formErrors.total_distanse.length>0 && (
                                        <span className="errorMessage">{formErrors.total_distanse}</span>
                                    )}
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
                                            noValidate
                                    
                                    />
                                    {formErrors.other_fee.length>0 && (
                                        <span className="errorMessage">{formErrors.other_fee}</span>
                                    )}
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

