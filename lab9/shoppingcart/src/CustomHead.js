import React, {Component} from 'react';
import 'w3-css/w3.css';
import SignOut from './SignOut';

function  CustomHead(props){
    const element = (
        <div className="w3-container">
            <h1 className="w3-xxlarge w3-center">{props.titleField}</h1>
            <SignOut handleClick={props.handleSignOut} />
        </div>
    );
    return element;
}

export default CustomHead;