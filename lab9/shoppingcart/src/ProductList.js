import React, {Component} from 'react';

import 'w3-css/w3.css';


class ProductList extends Component{


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
                            <button dataIndex={obj._id} className="w3-button w3-green w3-round" onClick={this.sendData} >+</button>
                        </td>   
                    </tbody> 
                )
        });
        }
        return (
            <div>
                <div className="w3-container">
                    <table className="w3-table w3-striped w3-large">
                        <TBHeader/>
                        {elem}
                    </table>
                </div>
            </div>
        );
    }
} 

function TBHeader(){

    return(
        <tr className="w3-blue">
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Reviews</th>
            <th>Add To Cart</th>
        </tr>
    );

}

export default ProductList;