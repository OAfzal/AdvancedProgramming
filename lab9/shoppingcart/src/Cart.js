import React, {Component} from 'react';
import CustomHead from './CustomHead';
import CartContent from './CartContent';
import CustomBtn from './CustomBtn';


class Cart extends Component{

    constructor(props){
        super(props);
        
    }
    
    render(){
        return (
            <div>
                <CartContent />
            </div>
        );
    }
} 

export default Cart;