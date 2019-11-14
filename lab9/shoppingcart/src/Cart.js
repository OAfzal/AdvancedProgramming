import React, {Component} from 'react';
import CustomHead from './CustomHead';
import CartContent from './CartContent';


class Cart extends Component{

    render(){
        return (
            <div>
                <CustomHead />
                <CartContent />
            </div>
        );
    }
} 

export default Cart;