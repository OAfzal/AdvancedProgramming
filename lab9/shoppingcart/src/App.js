import React, {Component} from 'react';
import Cart from './Cart';
import ProductList from './ProductList';
import CustomHead from './CustomHead'
import CustomBtn from './CustomBtn'
import Login from './Login'


const StatusDetails = {
    "incomp": "Please fill all fields",
    "signup": "User does not Exist Please Sign Up first",
    "wrong": "Email or Password Wrong"
}

class App extends Component {


    constructor(props){
        super(props);
        this.state = {
            inCart: false,
            loggedIn: false,
            status:0
        }
        this.handleGotoBtnClick = this.handleGotoBtnClick.bind(this);
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    }


    handleLoginSubmit(emailInp,passInp){
        alert("User Submitted:"+ emailInp + " pa: "+passInp);
        const url = 'http://localhost:5000/login';
        const data = {email:emailInp,password:passInp};
        fetch(url,{method:"POST", body:JSON.stringify(data),headers:{'Content-Type':'application/json'}})
            .then(res => res.text())
            .then(res =>{
                if(res == "succ"){
                   this.setState({status:res,loggedIn:true})
                }
                else{
                    this.setState({status:res})
                }
            })
            .catch(error => console.error('Error:',error));
    }

    handleGotoBtnClick(){
        this.setState((state,props) =>({
            inCart :!state.inCart
        }))
    }

    render(){
        console.log("Res:" + this.state.status);
        let loggedInView = (
            <div>
                <CustomHead titleField={this.state.inCart?"Shopping Cart":"Product(s) List"} />
                <CustomBtn fieldText={this.state.inCart?"GoTo Mart":"Cart ()"} handleClick={this.handleGotoBtnClick} />
                {this.state.inCart?<Cart />:<ProductList />}
            </div>
        )
        return (
            this.state.loggedIn?loggedInView:<Login handleLoginSubmit={this.handleLoginSubmit} notify={StatusDetails[this.state.status]} />
        )
    }

}

export default App;