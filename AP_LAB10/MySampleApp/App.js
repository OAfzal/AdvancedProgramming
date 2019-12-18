import React from 'react';
import ValidationComponent from 'react-native-form-validator'
import FormTest from 'react-native-form-validator'
import {
  View,
  TouchableHighlight,
  TextInput,
  Text,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  formFields:{
    height:60,
    borderColor:"gray",
    borderWidth:1,
    margin:10
  },
  formHead:{
    fontSize:20,
    textAlign:"center",
    fontWeight:"bold"
  },
  formBtn:{
    width:40,
  },

  formBtnTxt: {
    borderWidth: 1,
    padding: 25,
    borderColor: 'black',
    backgroundColor: 'blue',
    color:"white" 
  }
})

class App extends ValidationComponent{

  constructor(props){
    super(props);
    const rules = {cnic: /^[0-9+]{6}-[0-9+]{6}-[0-9]{1}$/};
    <FormTest rules={rules} />

    this.state = {
      name:"",
      cnic:"",
      email:"",
      password:"",
    }
    this._onPressButton = this._onPressButton.bind(this)
  }

  _onPressButton(){
    this.validate({
      name:{minlength:3,maxlength:15,required:true},
      email:{email:true},
      password:{minlength:8},
      cnic:{}
    })
    console.log(this.state);  
    console.log(this.isFormValid());
  }

  render(){

    return (
        <View >
          <Text style={styles.formHead}>Sign Up Form</Text>
          <TextInput onChangeText={(name) => this.setState({"name":name})} style={styles.formFields} placeholder="Name" ref="name" value={this.state.name} />
          <TextInput style={styles.formFields} placeholder="Email" ref="email" onChangeText={(email) => this.setState({"email":email})} value={this.state.email} />
          <TextInput style={styles.formFields} ref="cnic" placeholder="Cnic" onChangeText={(cnic) => this.setState({"cnic":cnic})} value={this.state.cnic} />
          <TextInput style={styles.formFields} ref="password" placeholder="password" onChangeText={(password) => this.setState({"password":password})} value={this.state.password} />
          <TouchableHighlight style={styles.formFields} onPress = {this._onPressButton}><Text style={styles.formBtnTxt}>Submit</Text></TouchableHighlight>
        </View>

    )
  }
}
export default App;
