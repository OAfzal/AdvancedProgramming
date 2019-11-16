import React, {Component} from 'react';
import Cart from './Cart';
import ProductList from './ProductList';
import CustomHead from './CustomHead'
import CustomBtn from './CustomBtn'


class App extends Component {


    constructor(props){
        super(props);
        this.state = {
            inCart: false,
        }
        this.handleGotoBtnClick = this.handleGotoBtnClick.bind(this);
    }

    handleGotoBtnClick(){
        this.setState((state,props) =>({
            inCart :!state.inCart
        }))
    }

    render(){
        return (
            <div>
                <CustomHead titleField={this.state.inCart?"Shopping Cart":"Product(s) List"} />
                <CustomBtn fieldText={this.state.inCart?"GoTo Cart":"GoTo Mart"} handleClick={this.handleGotoBtnClick} />
                {this.state.inCart?<Cart />:<ProductList />}
            </div>
        )
    }

}

export default App;