import React, {Component} from 'react';
import Cart from './Cart';
import ProductList from './ProductList';


class App extends Component {


    constructor(props){
        super(props);
        this.state = {
            inCart: false,
        }
    }

    render(){
        return (this.state.inCart?<Cart />:<ProductList />);
    }

}

export default App;