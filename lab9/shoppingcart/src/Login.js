import React, {Component} from 'react';
import 'w3-css/w3.css';

class Login extends Component {


    constructor(props){
        super(props);
        this.state = {
            name: '',
            password: ''
        }
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeEmail(event){
        this.setState({email:event.target.value});
    }

    handleChangePassword(event){
        this.setState({password:event.target.value});
    }

    handleSubmit(event){    
        event.preventDefault();
        this.props.handleLoginSubmit(this.state.email,this.state.password);
    }

    render(){
        return (
            <div>
                <div className="w3-container w3-blue">
                    <h2>Login</h2>
                </div>
                <span className="w3-text-red w3-small w3-margin"><b>{this.props.notify}</b></span>
                <form className="w3-container" onSubmit={this.handleSubmit} method="post">
                    <p>
                        <label  className="">
                            <b>Email</b>
                        </label>
                        <input className="w3-input w3-border"  type="text" name="email" onChange={this.handleChangeEmail} />
                    </p>
                    <p>
                        <label className="">
                            <b>Password</b>
                        </label>

                        <input className="w3-input w3-border" type="password" name="password" onChange={this.handleChangePassword} />
                    </p>
                    <input className="w3-btn w3-blue" type="submit" value="Submit" />
                </form>
            </div>
        )
    }

}

export default Login;