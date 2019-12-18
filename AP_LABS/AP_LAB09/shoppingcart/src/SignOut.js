import React, {Component} from 'react';


import 'w3-css/w3.css';


function SignOut(props){
    return (
        <button className="w3-button w3-white w3-border w3-border-red w3-round-large w3-hover-red w3-margin w3-right" onClick={props.handleClick}>
            SignOut
        </button>
    );
}
export default SignOut;