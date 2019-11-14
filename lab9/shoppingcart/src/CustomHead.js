import React, {Component} from 'react';
import 'w3-css/w3.css';
import AddProd from './AddProd';

function  CustomHead(props){
    const element = (
        <div className="w3-container">
            <h1 className="w3-xxlarge w3-center">Shopping Cart</h1>
            <AddProd addProd={props.addProd} />
        </div>
    );
    return element;
}

export default CustomHead;