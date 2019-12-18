import React, {Component} from 'react';


class Input extends Component{
    
    constructor(props){
        super(props);
        console.log(props);
    }
    
    render(){
        return (<input type="number" minutes={this.props.minutes} onChange={this.props.handleChange}  required></input>);
    }
}




export default Input;