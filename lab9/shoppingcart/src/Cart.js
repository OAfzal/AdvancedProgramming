import React, {Component} from 'react';
import CustomHead from './CustomHead';
import CartContent from './CartContent';
import CustomBtn from './CustomBtn';


class Cart extends Component{

    constructor(props){
        super(props);
        console.log("In Cart: "+props.data);
        
    }
    
    render(){
        return (
            <div>
                <CartContent data={this.props.data}/>
            </div>
        );
    }
} 

export default Cart;