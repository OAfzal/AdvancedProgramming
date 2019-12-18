import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';



class Clock extends React.Component{

    render(){
        return(
            <div>
                <h2>{this.props.minutes}:{this.props.seconds}</h2>
            </div>
        )
    }

}

export default Clock;
