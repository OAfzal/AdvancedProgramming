import React, {Component} from 'react';
import Login from './Login';
import Register from './Register';


class App extends Component {
    render(){
        return(
            <div>
                <Login />
                <Register />
            </div>
        );
    }

}

export default App;