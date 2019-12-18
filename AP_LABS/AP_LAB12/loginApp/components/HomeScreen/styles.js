import{StyleSheet} from 'react-native';

const BLUE = "#428AF8";
const LIGHT_GRAY = "#D3D3D3";

export default StyleSheet.create({
  heading:{
    fontSize:25,
    textAlign:'center',
  },
  input: {
      margin: 15,
      height: 40,
      borderColor: BLUE,
      borderWidth: 1
  },
  parent:{
    flex:1,
    justifyContent:'center',

  }
})