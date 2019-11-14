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
                <CustomHead titleField="Shopping Cart" />
                <CustomBtn fieldText="Go To Product List" customFtn={this.props.addProd} />
                <CartContent />
            </div>
        );
    }
} 

export default Cart;