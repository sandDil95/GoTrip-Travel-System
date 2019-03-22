import React , {Component} from 'react';


class Profile extends Component{
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
                                    {/* <th>First Name</th>
                                    <th>{this.state.first_name}</th> */}
                                    
                                </tr>
                                <tr>
                                    {/* <th>Last Name</th>
                                    <th>{this.state.last_name}</th> */}
                                    
                                </tr>
                                <tr>
                                    {/* <th>Email</th>
                                    <th>{this.state.email}</th> */}
                                    
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