import React, {Component} from 'react';
import 'w3-css/w3.css';


class CartContent extends Component{

    render(){
        return(
            <div className="w3-container">
                <table className="w3-table w3-striped w3-border w3-large">
                    <tr className = "">
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Reviews</th>
                        <th>Remove</th>
                    </tr>
                </table>
            </div>
        );

    }

}

export default CartContent;