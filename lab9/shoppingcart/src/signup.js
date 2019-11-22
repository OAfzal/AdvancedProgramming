import React, {Component} from 'react';
import SignOut from './SignOut';

class Signup extends Component{

    constructor(props){
        super(props);
        // this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        let name = event.target.name;
        let value = event.target.value;
        console.log(name+" "+value);
        this.setState({[name]:value});
    }

    handleSubmit(event){
        event.preventDefault();
        console.log(this.state);
    }


    render(){
        return (<div>
            <div className="w3-container w3-blue">
                <h2>Sign Up</h2>
            </div>
            <span className="w3-text-red w3-small w3-margin"><b>{this.props.notify}</b></span>
            <form className="w3-container" onSubmit={this.handleSubmit} method="post">

                <GetFormComponent cLabel="Email" cType={"text"} cName="email" hChange={this.handleChange} />
                <GetFormComponent cLabel="Password" cType="password" cName="password" hChange={this.handleChange} />
                <GetFormComponent cLabel="Confirm Password" cType="password" cName="cpassword" hChange={this.handleChange} />
                {/* <span className="w3-text-red w3-small w3-margin"><b></b></span> */}

                <input className="w3-btn w3-blue" type="submit" value="Submit" />
            </form>
        </div>);
    }
}

function GetFormComponent(props){
    return (
        <p>
            <label>
                <b>{props.cLabel}</b>
            </label>
            <input className="w3-input w3-border" type={props.cType} name={props.cName} onChange={props.hChange} />
        </p>
    );
}

export default Signup;