import React, {Component} from 'react';
import 'w3-css/w3.css';


class CartContent extends Component{

    render(){

        let elem;
        if(this.props.data){
            elem = this.props.data.map((obj,index)=>{
                return (
                    <tbody key={obj._id} className="w3-border">
                        <td>
                            {obj.name}
                        </td>   
                        <td>
                            {obj.description}
                        </td>   
                        <td>
                            {obj.price}
                        </td>   
                        <td>
                            {obj.category}
                        </td>
                        <td>
                            <button dataIndex={obj._id} className="w3-button w3-red w3-round" onClick={this.sendData} >Delete</button>
                        </td>   
                    </tbody> 
                )
            });
        }


        return(
            <div className="w3-container">
                <table className="w3-table w3-striped w3-border w3-large">
                    <tr className = "w3-blue">
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Reviews</th>
                        <th>Remove</th>
                    </tr>
                    {elem}
                </table>
            </div>
        );

    }

}

export default CartContent;