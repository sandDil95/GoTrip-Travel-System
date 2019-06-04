import React , {Component} from 'react';
import jwt_decode from 'jwt-decode';
import {imageupload} from './UserFunctions';

class Profile extends Component{
    constructor(){
        super()
        this.state ={
            first_name:'',
            last_name:'',
            email:'',
            address:'',
            // vehicle_photo:'',
            // profile_image:'',
            // file:'',
            
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    // onChange(e){
    //     this.setState({[e.target.name]:e.target.value})
    // }
    // onSubmit(e){
    //     e.preventDefault()
    //     console.log("Succesfuly"); 
    //     const ImageUpload ={
           
    //         vehicale_photo:this.state.vehicale_photo,
    //         profile_image:this.state.profile_image
            
            
        
    //     }
    //     imageupload(ImageUpload).then(res => {
    //              if(ImageUpload){
    //                  this.props.history.push('/profile')
    //              }
                
            
    //     })
    // }
    componentDidMount(){
        axios.get('http://localhost:4000/supplier')
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        this.setState({
            first_name:decoded.first_name,
            last_name:decoded.last_name,
            email:decoded.email,
            address:decoded.address
        })
    }    
            // file:decoded.file,
    // componentDidMount(){
    //     axios.get('http://localhost:4000/supplier')
    //     const token = localStorage.usertoken
    //     const decoded = jwt_decode(token)
    //     this.setState({
    //         first_name:decoded.first_name,
    //         last_name:decoded.last_name,
    //         email:decoded.email,

    //     // axios.get('http://localhost:4000/supplier')
    //     // .then(response => {
    //     //   this.setState({ first_name: response.data });
    //     //   this.setState({ last_name: response.data });
    //     //   this.setState({ email: response.data });
    //     // })
    //     // .catch(function (error) {
    //     //   console.log(error);
    //     // })
    //     })
        
    // }
    render(){
        return(

            <div>
                <div className ="container">
                    <div className="jumbotron mt-5"> 
                         <div className ="col-sm-8 mx-auto">
                             <h1 className ="text-center">PROFILE</h1>
                         </div>
                         <table className=" table col-md-6 mx-auto">
                             <tbody>
                                 <tr>
                                     <th>First Name</th>
                                     <th>{this.state.first_name}</th>

                                    
                                 </tr>
                                 <tr>
                                     <th>Last Name</th>
                                     <th>{this.state.last_name}</th>
                                    
                                 </tr>
                                 <tr>
                                     <th>Email</th>
                                     <th>{this.props.email}</th>
                                    
                                </tr>
                                <tr>
                                    <th>Address</th>
                                    <th>{this.state.address}</th>
                                    
                                </tr>
                                {/* <tr>
                                    <th>Profile</th>
                                    <th>{this.state.file}</th>
                                    
                                </tr> */}
                            </tbody>
                        </table>
                    </div>
                </div>
                </div>
                
           

                {/* <div className ="row">
                    <div className="col-lg-12">
                        <label htmlFor = "vehicle_photo" >Vehicale Photo</label>
                        <input type ="file"
                                className="form-control"
                                name = "vehicale_photo"
                                placeholder ="Select your Vehicle Photo"
                                value ={this.state.vehicale_photo}
                                onChange ={this.onChange}
                        
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
                        
                        />
                    </div>

                </div> */}
        )
    }
}



export default Profile;
