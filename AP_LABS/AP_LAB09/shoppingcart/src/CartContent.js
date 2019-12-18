import React, {Component} from 'react';
import 'w3-css/w3.css';


class CartContent extends Component{


    constructor(props){
        super(props);
        this.sendData = this.sendData.bind(this);
    }


    sendData(e){
        // console.log(e.target.getAttribute("dataIndex"));
        this.props.onClick(e.target.getAttribute("dataIndex"));
    }


    render(){

        let elem;
        if(this.props.data){
            elem = this.props.data.map((obj,index)=>{
                return (
                    <tr key={obj._id} className="w3-border">
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
                            {obj.qty}
                        </td>
                        <td>
                            <button dataIndex={obj._id} className="w3-button w3-red w3-round" onClick={this.sendData} >Delete</button>
                        </td>   
                    </tr> 
                )
            });
        }


        return(
            <div className="w3-container">
                <table className="w3-table w3-striped w3-border w3-large">
                    <thead>
                        <tr className = "w3-blue">
                            <th>Name</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Category</th>
                            <th>Qty.</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {elem}
                    </tbody>
                </table>
            </div>
        );

    }

}

export default CartContent;