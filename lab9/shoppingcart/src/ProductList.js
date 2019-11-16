import React, {Component} from 'react';
import CustomHead from './CustomHead';
import CartContent from './CartContent';
import ProdTable from './ProdTable';
import CustomBtn from './CustomBtn';
import 'w3-css/w3.css';


class ProductList extends Component{


    constructor(props){
        super(props);
        this.state = {
            apiRes:''
        };
    }

    componentDidMount(){
        this.getData();
        console.log(this.state.apiRes);
    }

    getData(){
        fetch('http://localhost:5000/')
            .then(res => res.json())
            .then(res => this.setState({apiRes:res}))
            .catch(err => err);
    }

    render(){
        let data = this.state.apiRes;
        console.log("Me here: "+data);
        let elem;
        if(data){
            elem = data.map((obj,index)=>{
                return (
                    <tr className="w3-border">
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
                            <button className="w3-button w3-green w3-round" onClick={()=>alert("Product Added to Cart")} >+</button>
                        </td>   
                    </tr>
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