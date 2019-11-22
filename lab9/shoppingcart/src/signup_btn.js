import React, {Component} from 'react';
import 'w3-css/w3.css';


function SignUpBtn(props){
    return (
        <button className="w3-button w3-white w3-border w3-border-red w3-round-large w3-hover-red w3-margin" onClick={props.handleClick}>
            Don't have an account? SignUp
        </button>
    );
}
export default SignUpBtn;