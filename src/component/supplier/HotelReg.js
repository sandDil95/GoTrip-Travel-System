import React , {Component} from 'react';
import axios from 'axios';
import validator from 'validator'

const validatePhoneNumber = number => {
    const isValidPhoneNumber = validator.isMobilePhone(number)
    return (isValidPhoneNumber)
}

//const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
const telNum = RegExp(/^[0-9]*$/);
const formValid = formErrors =>{
    let valid = true;

    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false);
    });
    return valid;
}

class HotelReg extends Component{
    constructor(props){
        super(props)
        this.state ={
            hotelName : '',
            contactNo  :'',

            address:'',

            address : '',

            place : '',
            hotelType : '',
            single_room_num:'',
            single_room_payment:'',
            double_room_num : '',

            double_room_payment:'',
            triple_room_num:'',
            triple_room_payment:'',
            quad_room_num:'',
            quad_room_payment:'',
            hotelImage : '',
            formErrors:{
                hotelName:"",
                address:"",
                place:"",
                hotelType:"",
                single_room_num:"",
                single_room_payment:"",
                double_room_num:"",
                double_room_payment:"",
                triple_room_num:"",
                triple_room_payment:"",
                quad_room_num:"",
                quad_room_payment:"",


            },
            number:{
                contactNo:""
            }
            


            double_room_payment : '',
            triple_room_num : '',
            triple_room_payment : '',
            quad_room_num : '',
            quad_room_payment : '',
            hotelImage : '',

        }
        this.onChange = this.onChange.bind(this);
        this.hotelRegister = this.hotelRegister.bind(this);
    }

   onChange(e){
       //this.setState({[e.target.name]:e.target.value});
       const {name , value} = e.target;
       let formErrors = this.state.formErrors;
       let number = this.state.number;
       switch(name){
        case'hotelName':
            formErrors.hotelName = 
                value.length < 3 
                    ? "minimum 3 characaters required"
                    :"";
            break;
        case'address':
            formErrors.place = 
                value.length < 3
                    ? "minimum 3 characaters required"
                    :"";
            break;
        case'place':
        formErrors.place = 
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
        case'contactNo':
        number.contactNo = 
            telNum.test(value)
                ?''
                :"Invalid Phone Number";
        break;
        
        case'single_room_num':
        formErrors.single_room_num = 
            value.length > 2
                ? "maximum 2 number required"
                :"";
        break;
        case'single_room_payment':
        formErrors.single_room_payment = 
            value.length < 2 
                ? "minimum 2 characaters required"
                :"";
        break;
        case'double_room_num':
        formErrors.double_room_num = 
            value.length > 2
                ? "maximum 2 number required"
                :"";
        break;
        case'double_room_payment':
        formErrors.double_room_payment = 
            value.length < 2 
                ? "minimum 2 characaters required"
                :"";
        break;
        case'triple_room_num':
        formErrors.triple_room_num = 
            value.length > 2
                ? "maximum 2 number required"
                :"";
        break;
        case'triple_room_payment':
        formErrors.triple_room_payment = 
            value.length < 2 
                ? "minimum 2 characaters required"
                :"";
        break;
        case'quad_room_num':
        formErrors.quad_room_num = 
            value.length > 2
                ? "maximum 2 number required"
                :"";
        break;
        case'quad_room_payment':
        formErrors.quad_room_payment = 
            value.length < 2 
                ? "minimum 2 characaters required"
                :"";
        break;
    default:
    break;
}
this.setState({formErrors ,[name]:value},()=>console.log(this.state));
this.setState({number ,[name]:value} ,()=>console.log(this.state));
   }

   hotelRegister(e){
    e.preventDefault();

    if(formValid(this.state.formErrors)|| validatePhoneNumber(this.state.number)){
        console.log(`
             --SUBMITING--
             hotelName:${this.state.hotelName},
             contactNo:${this.state.contactNo},
             address:${this.state.address},
             place:${this.state.place},
             hotelType:${this.state.hotelType},
             contactNo:${this.state.contactNo},
             single_room_num:${this.state.single_room_num},
             single_room_payment:${this.state.single_room_payment},
             double_room_num:${this.state.double_room_num},
             double_room_payment:${this.state.double_room_payment},
             triple_room_num:${this.state.triple_room_num},
             triple_room_payment:${this.state.triple_room_payment},
             quad_room_num:${this.state.quad_room_num},
             quad_room_payment:${this.state.quad_room_payment},
             
        `)
    }
    else{
        console.error('Form Invalid - Display Error Masage');
    }

    console.log(this.state.email);

    const obj = {
        email: this.props.email,
        hotelName : this.state.hotelName,
        contactNo  :this.state.contactNo,

        address :this.state.address,
        address : this.state.address,

        place : this.state.place,
        hotelType : this.state.hotelType,
        single_room_num:this.state.single_room_num,
        single_room_payment:this.state.single_room_payment,

        double_room_num:this.state.double_room_num,
        double_room_payment:this.state.double_room_payment,
        triple_room_num:this.state.triple_room_num,
        triple_room_payment:this.state.triple_room_payment,
        quad_room_num:this.state.quad_room_num,
        quad_room_payment:this.state.quad_room_payment,
             
        
        

        double_room_num : this.state.double_room_num,
        double_room_payment : this.state.double_room_payment,
        triple_room_num : this.state.triple_room_num,
        triple_room_payment : this.state.triple_room_payment,
        quad_room_num : this.state.quad_room_num,
        quad_room_payment : this.state.quad_room_payment,

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

   componentDidMount(){
    console.log(this.props.email);
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
        const {formErrors} = this.state;
        const {number} = this.state;
        return(
            <div className ="bg-img">
                {/* <div className ="container"> */}
                <div className ="row">
                    <div className ="col-md-6 mt-5 mx-auto">
                        <form className = "form-container" noValidate onSubmit ={this.hotelRegister}> 
                            

                            <h1 className ="h3 mb-3 font-weight-normal">Hotel Register</h1>

                            <h1 className ="h3 mb-3 font-weight-normal">Register your Accomadation</h1><br/>

                            <div className="row">
                                <div className="col-lg-6">
                                    <input type ="text"
                                        className="form-control"
                                        name = "hotelName"
                                        placeholder ="Enter hotel name"
                                        value ={this.state.hotelName}
                                        onChange ={this.onChange}
                                        noValidate
                                    />
                                     {formErrors.hotelName.length>0 && (
                                        <span className="errorMessage">{formErrors.hotelName}</span>
                                    )}
                                </div>
                            
                                <div className="col-lg-6">
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
                            </div><br/>

                            <div className="row">
                            <div className="col-lg-12">
                                    <label htmlFor = "place">Hotel Address</label>
                                        <input type="text"
                                            //placeholder="Begining Date of Availability" 
                                            className="form-control" 
                                            name="address" 
                                            placeholder ="Enter hotel address"
                                            value={this.state.address}
                                            onChange={this.onChange}
                                            noValidate
                                        />
                                    {formErrors.address.length>0 && (
                                        <span className="errorMessage">{formErrors.address}</span>
                                    )}  
                            </div> 
                            </div><br/>
                            

                            <input type ="text"
                                className="form-control"
                                name = "address"
                                placeholder ="Enter Address"
                                value ={this.state.address}
                                onChange ={this.onChange}
                        
                            /><br/>

                            <div className="row">
                                        <div className="col-lg-6">
                                            <input type="text"
                                                   //placeholder="Begining Date of Availability" 
                                                   className="form-control" 
                                                   name="place" 
                                                   placeholder ="Nearby City"
                                                   value={this.state.place}
                                                   onChange={this.onChange}
                                                   noValidate
                                            />
                                             {formErrors.place.length>0 && (
                                                <span className="errorMessage">{formErrors.place}</span>
                                            )}  
                                        </div> 
                                        <div className="col-lg-6">
                                            <select className="form-control" 
                                                name="hotelType" 
                                                value={this.state.hotelType} 
                                                onChange={this.onChange}>

                                                    <option>1 Star </option>
                                                    <option>2 Star</option>
                                                    <option>3 Star</option>
                                                    <option>4 Star</option>
                                                    <option>5 Star</option>
                                                    <option>Buteq Luxury</option>
                                                    <option>One Star </option>
                                                    <option>Two Star</option>
                                                    <option>Three Star</option>
                                                    <option>Four Star</option>
                                                    <option>Five Star</option>
                                                    <option>Luxury</option>

                                                    <option>Villas</option>
                                                    <option>Resort</option>
                                                
                                            </select>
                                        </div>
                            </div><br/>
                            <div className ="row">
                                <div className="col-lg-12">
                                    Enter your Hotel Rooms Details
                                </div>    
                            </div>    <hr/>
                            <div className ="row">
                                <div className="col-lg-4">
                                    Single Bed Rooms
                                </div>
                                <div className="col-lg-4">
                                    <input type ="text"
                                            className="form-control"
                                            //className={formErrors.pay_per_onekm.length >0 ? "error" :null}
                                            name = "single_room_num"
                                            placeholder ="Number of Rooms"
                                            value ={this.state.single_room_num}
                                            onChange ={this.onChange}

                                            noValidate
                                    
                                    />
                                    {formErrors.single_room_num.length>0 && (
                                        <span className="errorMessage">{formErrors.single_room_num}</span>
                                    )}

                                            //noValidate
                                    />
                                    {/* {formErrors.pay_per_onekm.length>0 && (
                                        <span className="errorMessage">{formErrors.pay_per_onekm}</span>
                                    )} */}

                                </div>
                                <div className="col-lg-4">
                                    <input type ="text"
                                            className="form-control"
                                            //className={formErrors.pay_per_onekm.length >0 ? "error" :null}
                                            name = "single_room_payment"
                                            placeholder ="Payment Per Room"
                                            value ={this.state.single_room_payment}
                                            onChange ={this.onChange}
                                            //noValidate
                                    />
                                    {/* {formErrors.pay_per_onekm.length>0 && (
                                        <span className="errorMessage">{formErrors.pay_per_onekm}</span>
                                    )} */}
                                </div>
                            </div><br/>
                            <div className ="row">
                                <div className="col-lg-4">
                                    Double Bed Rooms
                                </div>
                                <div className="col-lg-4">
                                    <input type ="text"
                                            className="form-control"
                                            //className={formErrors.pay_per_onekm.length >0 ? "error" :null}
                                            name = "single_room_payment"
                                            placeholder ="Enter single room price"
                                            value ={this.state.single_room_payment}
                                            onChange ={this.onChange}
                                            noValidate
                                    
                                    />
                                    {formErrors.single_room_payment.length>0 && (
                                        <span className="errorMessage">{formErrors.single_room_payment}</span>
                                    )}
                                </div>
                                
                            </div><br/>
            
                            <div className ="row">
                                
                                <div className="col-lg-6">
                                    {/* <label htmlFor = "sheet_num">Number of Sheet </label> */}
                                    <input type ="text"
                                            className="form-control"
                                            //className={formErrors.sheet_num.length >0 ? "error" :null}
                                            name = "double_room_num"
                                            placeholder ="Number of Rooms"
                                            value ={this.state.double_room_num}
                                            onChange ={this.onChange}

                                            noValidate
                                    
                                    />
                                    {formErrors.double_room_num.length>0 && (
                                        <span className="errorMessage">{formErrors.double_room_num}</span>
                                    )}
                                </div>
                                <div className="col-lg-6">
                                    {/* <label htmlFor = "pay_per_onekm">Pay per one km</label> */}
                                    <input type ="text"
                                            className="form-control"
                                            //className={formErrors.pay_per_onekm.length >0 ? "error" :null}
                                            name = "double_room_payment"
                                            placeholder ="Enter double room price"
                                            value ={this.state.double_room_payment}
                                            onChange ={this.onChange}
                                            noValidate
                                    
                                    />
                                    {formErrors.double_room_payment.length>0 && (
                                        <span className="errorMessage">{formErrors.double_room_payment}</span>
                                    )}
                                </div>
                                
                            </div><br/>

                            <div className ="row">
                                
                                <div className="col-lg-6">
                                    {/* <label htmlFor = "sheet_num">Number of Sheet </label> */}
                                    <input type ="text"
                                            className="form-control"
                                            //className={formErrors.sheet_num.length >0 ? "error" :null}
                                            name = "triple_room_num"
                                            placeholder ="Enter number of triple room"
                                            value ={this.state.triple_room_num}
                                            onChange ={this.onChange}
                                            noValidate
                                    
                                    />
                                    {formErrors.triple_room_num.length>0 && (
                                        <span className="errorMessage">{formErrors.triple_room_num}</span>
                                    )}
                                </div>
                                <div className="col-lg-6">
                                    {/* <label htmlFor = "pay_per_onekm">Pay per one km</label> */}
                                    <input type ="text"
                                            className="form-control"
                                            //className={formErrors.pay_per_onekm.length >0 ? "error" :null}
                                            name = "triple_room_payment"
                                            placeholder ="Enter triple room price"
                                            value ={this.state.triple_room_payment}
                                            onChange ={this.onChange}
                                            noValidate
                                    
                                    />
                                    {formErrors.triple_room_payment.length>0 && (
                                        <span className="errorMessage">{formErrors.triple_room_payment}</span>
                                    )}
                                </div>
                                
                            </div><br/>

                            <div className ="row">
                                
                                <div className="col-lg-6">
                                    {/* <label htmlFor = "sheet_num">Number of Sheet </label> */}
                                    <input type ="text"
                                            className="form-control"
                                            //className={formErrors.sheet_num.length >0 ? "error" :null}
                                            name = "quad_room_num"
                                            placeholder ="Enter number of quad room"
                                            value ={this.state.quad_room_num}
                                            onChange ={this.onChange}
                                            noValidate
                                    
                                    />
                                    {formErrors.quad_room_num.length>0 && (
                                        <span className="errorMessage">{formErrors.quad_room_num}</span>
                                    )}
                                </div>
                                <div className="col-lg-6">
                                    {/* <label htmlFor = "pay_per_onekm">Pay per one km</label> */}
                                    <input type ="text"
                                            className="form-control"
                                            //className={formErrors.pay_per_onekm.length >0 ? "error" :null}
                                            name = "quad_room_payment"
                                            placeholder ="Enter quad room price"
                                            value ={this.state.quad_room_payment}
                                            onChange ={this.onChange}
                                            noValidate
                                    

                                            //noValidate

                                    />
                                    {formErrors.quad_room_payment.length>0 && (
                                        <span className="errorMessage">{formErrors.quad_room_payment}</span>
                                    )}
                                </div>
                                <div className="col-lg-4">
                                    <input type ="text"
                                            className="form-control"
                                            //className={formErrors.pay_per_onekm.length >0 ? "error" :null}
                                            name = "double_room_payment"
                                            placeholder ="Payment Per Room"
                                            value ={this.state.double_room_payment}
                                            onChange ={this.onChange}
                                            //noValidate
                                    />
                                    {/* {formErrors.pay_per_onekm.length>0 && (
                                        <span className="errorMessage">{formErrors.pay_per_onekm}</span>
                                    )} */}
                                </div>
                            </div><br/>
                            <div className ="row">
                                <div className="col-lg-4">
                                    Triple Bed Rooms
                                </div>
                                <div className="col-lg-4">
                                    <input type ="text"
                                            className="form-control"
                                            //className={formErrors.pay_per_onekm.length >0 ? "error" :null}
                                            name = "triple_room_num"
                                            placeholder ="Number of Rooms"
                                            value ={this.state.triple_room_num}
                                            onChange ={this.onChange}
                                            //noValidate
                                    />
                                    {/* {formErrors.pay_per_onekm.length>0 && (
                                        <span className="errorMessage">{formErrors.pay_per_onekm}</span>
                                    )} */}
                                </div>
                                <div className="col-lg-4">
                                    <input type ="text"
                                            className="form-control"
                                            //className={formErrors.pay_per_onekm.length >0 ? "error" :null}
                                            name = "triple_room_payment"
                                            placeholder ="Payment Per Room"
                                            value ={this.state.triple_room_payment}
                                            onChange ={this.onChange}
                                            //noValidate
                                    />
                                    {/* {formErrors.pay_per_onekm.length>0 && (
                                        <span className="errorMessage">{formErrors.pay_per_onekm}</span>
                                    )} */}
                                </div>
                            </div><br/>
                            <div className ="row">
                                <div className="col-lg-4">
                                    Quad Bed Rooms
                                </div>
                                <div className="col-lg-4">
                                    <input type ="text"
                                            className="form-control"
                                            //className={formErrors.pay_per_onekm.length >0 ? "error" :null}
                                            name = "double_room_num"
                                            placeholder ="Number of Rooms"
                                            value ={this.state.quade_room_num}
                                            onChange ={this.onChange}
                                            //noValidate
                                    />
                                    {/* {formErrors.pay_per_onekm.length>0 && (
                                        <span className="errorMessage">{formErrors.pay_per_onekm}</span>
                                    )} */}
                                </div>
                                <div className="col-lg-4">
                                    <input type ="text"
                                            className="form-control"
                                            //className={formErrors.pay_per_onekm.length >0 ? "error" :null}
                                            name = "double_room_payment"
                                            placeholder ="Payment Per Room"
                                            value ={this.state.quade_room_payment}
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