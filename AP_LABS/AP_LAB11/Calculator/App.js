
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';


class App extends React.Component {

  constructor(){
    super();
    this.operations = ['DEL','+','-','*','/']
    this.state = {
      resultText:"",
      answer : ""
    };
  }

  calculateResult(){
    const text = this.state.resultText;
    let answer = eval(text);
    this.setState({ans:answer})

  }

  buttonPressed(text){
    console.log(text);
    if(text == '='){
      return this.calculateResult();
    }
    this.setState({resultText:this.state.resultText+text})

  }

  operate(text){


    switch (text) {
      case "DEL":
          const tex = this.state.resultText.split('');
          tex.pop();
          this.setState({
            resultText:tex.join('')
          });
          break;

      case "+":
      case "-":
      case "*":
      case "/":
        const lastChar = this.state.resultText.split('').pop();
        if(this.operations.indexOf(lastChar) > 0) return
        if(this.state.resultText == "") return
        this.setState({resultText:this.state.resultText+text})

    }

  }
 
  
  render(){

    let rows = []
    let nums = [[1,2,3],[4,5,6],[7,8,9],['.',0,'=']]

    for (let index = 0; index < 4; index++) {
      let row = []
      for (let j = 0; j < 3; j++) {
        row.push((<TouchableOpacity onPress={()=>this.buttonPressed(nums[index][j])} style={styles.btn}>
                    <Text style={styles.btnText}>{nums[index][j]}</Text>
                  </TouchableOpacity>
                ));
      }
      rows.push((<View style={styles.row}>{row}</View>))      
    } 

    let operations = ['DEL','+','-','*','/']
    let ops = []

    for (let i = 0; i < operations.length; i++) {
      ops.push((<TouchableOpacity style={styles.btn} onPress={()=>this.operate(this.operations[i])}>
        <Text style={[styles.btnText,styles.white]}>{operations[i]}</Text>
      </TouchableOpacity>))
    }


    return (
      <View style={styles.container}>

          <View style={styles.result} >
            <Text style={styles.resultText}>{this.state.resultText}</Text>
          </View>

          <View style={styles.calculation}>
            <Text style={styles.calculationText}>{this.state.ans}</Text>
          </View>
          
          <View style={styles.buttons}>

            <View style={styles.numbers}> 
              {rows}
            </View>

            <View style={styles.operations}> 

              {ops}

            </View>

          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({


  container:{
    flex:1
  },

  result:{
    flex:2,
    backgroundColor: 'white',
    justifyContent:'center',
    alignItems:"flex-end"
  },
  resultText:{
    fontSize:30,
    fontWeight:"bold",
    color:'black'
  },

  calculation:{
    flex:1,
    backgroundColor:'gray',
    justifyContent:'center',
    alignItems:"flex-end"

  },
  calculationText:{
    fontSize:20,
    color:'white'
  },

  btn:{
    flex:1,
    alignItems:'center',
    alignSelf:'stretch',
    justifyContent:'center'
  },
  btnText:{
    fontSize:30,
    fontWeight:"bold"
  },
  white:{
    color:'white'
  },
  buttons:{
    flexGrow:7,
    flexDirection:'row'
  },
  numbers:{
    flex:3,
    backgroundColor:'orange'
  },
  operations:{
    flex:1,
    backgroundColor:'black',
    justifyContent:'space-around',
    alignItems:'stretch'
  },
  row:{
    flexDirection:'row',
    flex:1,
    justifyContent:'space-around',
    alignItems:'center'
  }
})


export default App;
