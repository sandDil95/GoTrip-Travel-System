import React , {Component} from 'react';
import './css/Login.css';
import {register} from './UserFunctions';


class Register extends Component{
    constructor(){
        super()
        this.state ={
            first_name:'',
            last_name:'',
            address:'',
            email:'',
            contactNo:'',
            supplier_role:'Vahicale',
            vehicale_photo:'',
            driver_photo:'',
            sheet_num:'',
            pay_per_onekm:'',
            single_room_num:'',
            double_room_num:'',
            password:'',
            file:''
            
            
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    
    }

   onChange(e){
       this.setState({[e.target.name]:e.target.value})
   }
   onSubmit(e){
       e.preventDefault()

       const user ={
           first_name:this.state.first_name,
           last_name:this.state.last_name,
           address:this.state.address,
           email:this.state.email,
           contactNo:this.state.contactNo,
           supplier_role:this.state.supplier_role,
           vehicale_photo:this.state.vehicale_photo,
           driver_photo:this.state.driver_photo,
           sheet_num:this.state.sheet_num,
           pay_per_onekm:this.state.pay_per_onekm,
           single_room_num:this.state.single_room_num,
           double_room_num:this.state.double_room_num,
           password:this.state.password,
           file:this.state.file
       
       }
       register(user).then(res => {
                if(user){
                    this.props.history.push('/login')
                }
               
           
       })
   }


    render(){
        return(
            <div className ="bg-img">
               
                <div className ="row">
                    <div className ="col-md-6 mt-5 mx-auto">
                        <form className = "form-container" noValidate onSubmit ={this.onSubmit} > 
                            
                            <h1 className ="h3 mb-3 font-weight-normal">Please sign in</h1>
                            <div className ="form-group">
                                <label htmlFor = "first_name">First Name</label>
                                <input type ="text"
                                        className="form-control"
                                        name = "first_name"
                                        placeholder ="Enter First Name"
                                        value ={this.state.first_name}
                                        onChange ={this.onChange}
                                
                                />
                            </div>
                            
                            <div className ="form-group">
                                <label htmlFor = "last_name">Last Name </label>
                                <input type ="text"
                                        className="form-control"
                                        name = "last_name"
                                        placeholder ="Enter Last Name"
                                        value ={this.state.last_name}
                                        onChange ={this.onChange}
                                
                                />
                            </div>
                            <div className ="form-group">
                                <label htmlFor = "address">Address</label>
                                <input type ="text"
                                        className="form-control"
                                        name = "address"
                                        placeholder ="Enter Your Permanent address"
                                        value ={this.state.address}
                                        onChange ={this.onChange}
                                
                                />
                            </div>
                            <div className ="form-group">
                                <label htmlFor = "email">Email Address</label>
                                <input type ="email"
                                        className="form-control"
                                        name = "email"
                                        placeholder ="Enter Email"
                                        value ={this.state.email}
                                        onChange ={this.onChange}
                                
                                />
                            </div>
                            <div className ="form-group">
                                <label htmlFor = "contactNo">Contact Number </label>
                                <input type ="text"
                                        className="form-control"
                                        name = "contactNo"
                                        placeholder ="Enter Contact Number"
                                        value ={this.state.contactNo}
                                        onChange ={this.onChange}
                                
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="supplier_role"></label>
                                <select className="form-control" 
                                    id="supplier_role" 
                                    name="supplier_role" 
                                    value ={this.state.supplier_role}
                                    onChange ={this.onChange}
                                >
                                    <option>Vahicale</option>
                                    <option>Vahicale With Driver</option>
                                    <option>Hotel Acommadation</option>
                                    
                                </select>
                            </div>
                            
                            <div className="form-group" if="this.state.supplier_role=='Vahicale'">
                                <label htmlFor = "file" >Vehicale Photo</label>
                                <input type ="file"
                                        className="form-control"
                                        name = "vehicale_photo"
                                        placeholder ="Select your Vehicle Photo"
                                        value ={this.state.vehicale_photo}
                                        onChange ={this.onChange}
                                
                                />

                                <label htmlFor = "sheet_num">Number of Sheet </label>
                                <input type ="text"
                                        className="form-control"
                                        name = "sheet_num"
                                        placeholder ="Enter Number of Sheet"
                                        value ={this.state.sheet_num}
                                        onChange ={this.onChange}
                                
                                />
                                <label htmlFor = "pay_per_onekm">Pay per one km</label>
                                <input type ="text"
                                        className="form-control"
                                        name = "pay_per_onekm"
                                        placeholder ="Enter Pay per one km"
                                        value ={this.state.pay_per_onekm}
                                        onChange ={this.onChange}
                                
                                />


                                    
                                
                            </div>
                            <div className="form-group" this-state-if="this.state.supplier_role=='Vahicale With Driver'">
                                <label htmlFor = "file" >Vehicale Photo</label>
                                <input type ="file"
                                        className="form-control"
                                        name = "vehicale_photo"
                                        placeholder ="Select your Vehicale Photo"
                                        value ={this.state.vehicale_photo}
                                        onChange ={this.onChange}
                                
                                />
                                <label htmlFor = "file" >Driver Photo</label>
                                <input type ="file"
                                        className="form-control"
                                        name = "driver_photo"
                                        placeholder ="Select your Photo"
                                        value ={this.state.driver_photo}
                                        onChange ={this.onChange}
                                
                                />

                                <label htmlFor = "sheet_num">Number of Sheet </label>
                                <input type ="text"
                                        className="form-control"
                                        name = "sheet_num"
                                        placeholder ="Enter Number of Sheet"
                                        value ={this.state.sheet_num}
                                        onChange ={this.onChange}
                                
                                />
                                <label htmlFor = "pay_per_onekm">Pay per one km</label>
                                <input type ="text"
                                        className="form-control"
                                        name = "pay_per_onekm"
                                        placeholder ="Enter Pay per one km"
                                        value ={this.state.pay_per_onekm}
                                        onChange ={this.onChange}
                                
                                />
                                    
                                
                            </div>
                            <div className="form-group" this-state-if="this.state.supplier_role=='Hotel Acommadation'">
                                <label htmlFor = "file" >Hotel Photo</label>
                                <input type ="file"
                                        className="form-control"
                                        name = "hotel_photo"
                                        placeholder ="Select Hotel Photo"
                                        value ={this.state.hotel_photo}
                                        onChange ={this.onChange}
                                
                                />

                                <label htmlFor = "sheet_num">Number of Single Room </label>
                                <input type ="text"
                                        className="form-control"
                                        name = "single_room_num"
                                        placeholder ="Enter Number of Single Room"
                                        value ={this.state.single_room_num}
                                        onChange ={this.onChange}
                                
                                />
                                <label htmlFor = "pay_per_onekm">Number of Double Room</label>
                                <input type ="text"
                                        className="form-control"
                                        name = "double_room_num"
                                        placeholder ="Enter Number of Double Room"
                                        value ={this.state.double_room_num}
                                        onChange ={this.onChange}
                                
                                />
                                    
                                
                            </div>
                            
                            <div className ="form-group">
                                <label htmlFor = "password">Password</label>
                                <input type ="password"
                                        className="form-control"
                                        name = "password"
                                        placeholder ="Enter Password "
                                        value ={this.state.password}
                                        onChange ={this.onChange}
                                
                                />
                            </div>
                            <div className ="form-group">
                                <label htmlFor = "password">Confirm Password</label>
                                <input type ="password"
                                        className="form-control"
                                        name = "password"
                                        placeholder ="Enter Password "
                                        value ={this.state.password}
                                        onChange ={this.onChange}
                                
                                />
                            </div>
                            <div className ="form-group">
                                <label htmlFor = "file" >Profile Image</label>
                                <input type ="file"
                                        className="form-control"
                                        name = "file"
                                        placeholder ="Select your Photo"
                                        value ={this.state.file}
                                        onChange ={this.onChange}
                                
                                />
                            </div>

                            
                            <button  type ="submit" className ="btn btn-lg btn-primary btn--block">
                                    Register
                            </button>
                        </form>
                    </div>
                </div>
           
            </div>


        )
    }
}



export default Register;

