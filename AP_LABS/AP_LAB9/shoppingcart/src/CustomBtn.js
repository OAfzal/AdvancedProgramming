import React, {Component} from 'react';
import 'w3-css/w3.css';


function CustomBtn(props){
    return (
        <button className="w3-button w3-white w3-border w3-border-green w3-round-large w3-hover-green w3-margin" onClick={props.handleClick}>
            {props.fieldText}
        </button>
    );
}
export default CustomBtn;