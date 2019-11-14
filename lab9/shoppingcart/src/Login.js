import React, {Component} from "react";
import "./Login.css";


export default class Login extends Component{

    render(){
        return (
            <div class = "container">
                <h2>Login</h2>
                <form method="POST" action = "login">
                    
                    <div className="row">
                        <div className="lab">
                            <label for="email">Email</label>
                        </div>
                        <div className="field">
                            <input type="text" name="email" /><br />
                        </div>
                    </div>

                    <div className="row">
                        <div className="lab">
                            <label for="password">Password</label>
                            </div>
                        <div className="field">
                            <input type="Password" name="password" /><br />
                        </div>
                    </div>
                    <div class="row">
                        <a href="register" id="signup_link">
                            <p>Create An Account</p>
                        </a>
                        <input type="submit" />
                    </div>
                </form>
            </div>
        );
    }
}

