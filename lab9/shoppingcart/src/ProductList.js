import React, {Component} from 'react';
import CustomHead from './CustomHead';
import CartContent from './CartContent';
import ProdTable from './ProdTable';
import CustomBtn from './CustomBtn';


class ProductList extends Component{

    render(){
        return (
            <div>
                <CustomHead titleField="Product(s) List" />
                <CustomBtn fieldText="Go To Cart" />
                <ProdTable />
            </div>
        );
    }
} 

export default ProductList;