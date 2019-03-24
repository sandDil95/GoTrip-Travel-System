import React , {Component} from 'react';
import jwt_decode from 'jwt-decode';

class Profile extends Component{
    constructor(){
        super()
        this.state ={
            first_name:'',
            last_name:'',
            email:''
            
        }
    }
    componentDidMount(){
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        this.setState({
            first_name:decoded.first_name,
            last_name:decoded.last_name,
            email:decoded.email,

        })
    }
    render(){
        return(
            <main className="inner cover lead" role="main">
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
                                    <th>{this.state.email}</th>
                                    
                                </tr>
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        )
    }
}

export default Profile;