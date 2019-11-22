import React, {Component} from 'react';
import ProductList from './ProductList';
import CustomHead from './CustomHead'
import CustomBtn from './CustomBtn'
import Login from './Login'
import CartContent from './CartContent';
import SignUp from './signup';
import SignUpBtn from './signup_btn';

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
            signup:false,
            status:0,
            cart: [],
            prodList:{},
            sorted:false
        }
        this.handleGotoBtnClick = this.handleGotoBtnClick.bind(this);
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
        this.handleSignUpSubmit = this.handleSignUpSubmit.bind(this);
        this.addToCart = this.addToCart.bind(this);
        this.deleteFromCart = this.deleteFromCart.bind(this);
        this.handleSignOut = this.handleSignOut.bind(this);
        this.sortKaro = this.sortKaro.bind(this);
        this.asc = this.asc.bind(this);
        this.desc = this.desc.bind(this);
    }

    getProductList(){
        fetch('http://localhost:5000/')
            .then(res => res.json())
            .then(res => this.setState({prodList:res}))
            .catch(err => err);
    }


    asc(a,b){
        const priceA = parseInt(a.price);
        const priceB = parseInt(b.price);

        let comparison = 0;
        if(priceA > priceB){
            comparison = 1;
        }
        else if(priceA < priceB){
            comparison = -1;
        } 
        return comparison;
    }

    desc(a,b){
        const priceA = parseInt(a.price);
        const priceB = parseInt(b.price);

        let comparison = 0;

        if(priceA > priceB){
            comparison = -1;
        }
        else if(priceA < priceB){
            comparison = 1;
        } 
        return comparison;
    }

    componentDidMount(){
        this.getProductList();
        console.log(this.state.prodList);
    }

    addToCart(prodId){
        let arr = this.state.prodList.slice();
        let updatedCart = this.state.cart.slice();

        console.log(updatedCart);

        let elem = {};

        for (let index = 0; index < arr.length; index++) {
            if(arr[index]._id == prodId){
                elem = arr[index];
                break;
            }
        }
        let found = false;

        for (let index = 0; index < updatedCart.length; index++) {
            
            if(updatedCart[index]._id == prodId){
                console.log(updatedCart[index].qty);
                updatedCart[index].qty = parseInt(updatedCart[index].qty) + 1;
                found = true;
                break;
            }
        }
        if(found == false){
            elem.qty = 1;
            updatedCart.push(elem);
        }
        
        this.setState({cart:updatedCart});
    }

    deleteFromCart(prodId){
        let updatedCart = this.state.cart.slice();

        for (let index = 0; index < updatedCart.length; index++) {
            if(updatedCart[index]._id == prodId){
                if(updatedCart[index].qty > 1){
                    updatedCart[index].qty -=1;
                }
                else{
                    updatedCart.splice(index,1);
                }
                break;
            }
        }
        console.log(updatedCart);
        this.setState({cart:updatedCart});
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

    handleSignUpSubmit(emailInp,passInp){

        const url = 'http://localhost:5000/signup';
        const data = {email:emailInp,password:passInp};
        fetch(url,{method:"POST", body:JSON.stringify(data),headers:{'Content-Type':'application/json'}})
            .then(res => res.text())
            .then(res =>{
                if(res == "succ"){
                   this.setState({status:res,loggedIn:false})
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

    handleSignOut(){
        this.setState({loggedIn:false});
    }

    sortKaro(){
        let arr = this.state.prodList.slice();

        console.log(this.state.sorted);
        if(this.state.sorted){
            arr.sort(this.desc);
            this.setState({sorted:false,prodList:arr});
        }
        else{
            arr.sort(this.asc);
            this.setState({sorted:true,prodList:arr});
        }
        console.log(arr);
    }

    render(){
        let loggedInView = (
            <div>
                <CustomHead handleSignOut={this.handleSignOut} titleField={this.state.inCart?"Shopping Cart":"Product(s) List"} />
                
                <CustomBtn fieldText={this.state.inCart?"GoTo Mart":"Cart"} handleClick={this.handleGotoBtnClick} />
                
                {this.state.inCart?<CartContent onClick={this.deleteFromCart} data={this.state.cart} />:<ProductList data={this.state.prodList} onClick={this.addToCart} sortMe={this.sortKaro} />}
            </div>
        )
        return (
            this.state.loggedIn ? loggedInView:(this.state.signup ? (
                    <div>
                        <SignUp />
                        <CustomBtn fieldText="Already have an account? Login" handleClick={()=> {console.log("apan");this.setState({signup:false})}} />
                    </div>) :(

                    <div>
                        <Login handleLoginSubmit={this.handleLoginSubmit} notify={StatusDetails[this.state.status]} />
                        <SignUpBtn handleClick={()=> {console.log("apan");this.setState({signup:true})}} />
                    </div>
                )
            )
        )
    }

}

export default App;