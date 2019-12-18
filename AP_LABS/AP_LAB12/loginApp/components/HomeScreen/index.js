import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

class HomeScreen extends React.Component {
  
  state = {
    username: "",
    password: ""
  }
  
  static navigationOptions = {
    title: "Whazzaap"
  }

  checkLogin() {
    const {username, password} = this.state;

    let data = JSON.stringify({
      name: username,
      pass: password
    }) ;

    console.log(data);



    fetch("http:10.7.71.249:5000/", {
      method:"post",
      headers: {"Conetent-Type": "application/json"},
      body: data
    })
    .then(res => res.text())
    .then(res => {
      console.log(res);
      if(res == "Succ"){
        this.props.navigation.navigate("dashboard");
      }
      else{
        alert("Invalid username or password");
      }
    })
/*
    if(username == "admin" && password == "admin"){
      //alert("Login Success! Welcome Admin.");
      this.props.navigation.navigate("dashboard");
    }
    else{
      alert("Invalid username or password.");
    }
*/
  }
  
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        
        <Text style={{fontSize: 30}}>Login for the service!</Text>
        <Text style={{fontSize: 30}}>  </Text>
        
        <Text style={{fontSize: 15}}>Username</Text>
        <TextInput 
        style={{backgroundColor: "lightgrey", width: 350, textAlign: "center", fontSize: 15}}
        onChangeText = {text => this.setState({username: text})}
        />
        <Text style={{fontSize: 15}}>  </Text>
        
        <Text style={{fontSize: 15}}>Password</Text>
        <TextInput 
        style={{backgroundColor: "lightgrey", width: 350, textAlign: "center", fontSize: 15}}
        secureTextEntry = {true}
        onChangeText = {text => this.setState({password: text})}
        />
        <Text style={{fontSize: 15}}>  </Text>
        
        <Button title="Login" onPress={() => this.checkLogin()} />
      </View>
    );
  }
}

export default HomeScreen;