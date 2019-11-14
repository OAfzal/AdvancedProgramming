import React, {Component} from "react";
import "./Register.css";


export default class Register extends Component{

    render(){
        return (
            <div className="container">
                <h2>Sign Up</h2>
                <form method="POST" action="register">
                    <div className="row">
                        <div className="lab"><label for="name">Name</label></div>
                        <div className="field"> <input type="text" name="name" /><br /></div>
                    </div>
                    <div className="row">
                        <div className="lab"><label for="email">Email</label></div>
                        <div className="field"> <input type="text" name="email" /><br /></div>
                    </div>
                    <div className="row">
                        <div className="lab"><label for="password">Password </label></div>
                        <div className="field"><input type="password" name="password" id="password" />
                            <span id="cpass_msg"></span><br />
                        </div>
                    </div>
                    <div className="row">
                        <div className="lab"><label for="c_password">Confirm Password </label></div>
                        <div className="field">
                            <input type="password" name="c_password" id="confirm_password" />
                            <span id="message" style={{"fontSize":"10px"}}></span><br />
                        </div>
                    </div>
                    <div className="row">
                        <a href="/Login" id="login_link">
                            <span id='signupLink' >Already have an accout? Log In</span>
                        </a>
                        <input type="submit" value="Sign Up" id="submit" />
                    </div>
                </form>
            </div>
        );
    }
}

