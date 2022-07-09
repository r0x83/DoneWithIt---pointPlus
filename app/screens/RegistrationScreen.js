
import React from 'react';

import {
  View,
  Text,
  Input,
  Button,
  SafeAreaView,
  Keyboard,
  ScrollView,
  Alert,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Platform,Image
} from 'react-native';



const RegistrationScreen = () => {
  
  return (
    
  <SafeAreaView style={styles.container}>
    
    <View>
<Image source={require('../assets/add-user.png')} style={{height:80,width:80,marginTop:-80,marginBottom:40,marginLeft:90}}/>
    </View>
  <Text style={{fontSize:25,color:'#000080',paddingBottom:10,marginBottom:80,borderBottomColor:'#3173de',borderBottomWidth:1,}}>REGISTRATION</Text>
  <Text style={{fontWeight:'bold',marginTop:-30}}>Name: </Text>
  <View style={{flexDirection:'column',borderRadius:15,borderColor:'#3173de',borderWidth:2,height:40,}}>
    
  <TextInput style={styles.textinput} placeholder="Enter your Name" /></View>
  <Text style={{fontWeight:'bold',marginTop:20}}>Class: </Text>
 <View style={{flexDirection:'column',borderRadius:15,borderColor:'#3173de',borderWidth:2,height:40,}}>
    
  <TextInput style={styles.textinput} placeholder="Enter your Class" /></View>
  <Text style={{fontWeight:'bold',marginTop:20}}>Email: </Text>
  <View style={{flexDirection:'column',borderRadius:15,borderColor:'#3173de',borderWidth:2,height:40,}}>
   
  <TextInput style={styles.textinput} placeholder="Enter your Email" /></View>
  <Text style={{fontWeight:'bold',marginTop:20}}>Password: </Text>
  <View style={{flexDirection:'column',borderRadius:15,borderColor:'#3173de',borderWidth:2,height:40}}>
    
  <TextInput style={styles.textinput} placeholder="Enter your Password" secureTextEntry={true}/></View>
  <TouchableOpacity style={styles.button}>
    <Text style={styles.btntext}>Sign Up</Text>
  </TouchableOpacity>
  </SafeAreaView>)
}

export default RegistrationScreen;
const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    backgroundColor:'white',
  paddingLeft:60,
paddingRight:60,
paddingTop:Platform.OS==="android"?20:0,
alignSelf:'stretch',
borderRadius:15,
borderColor:'#3173de',
},
textinput:{
  alignSelf: 'stretch',
  width:'82%',
  height:23,
  marginBottom:30,
  color:'grey',
    paddingTop:4,
    marginLeft: 20,
  
  

},
button:{
  alignSelf:'stretch',
  alignItems:'center',
  paddding:20,
  backgroundColor:'#59cbbd',
  marginTop:30,
  height:50,
},btntext:{
  
  padding:10,
  color:'#ffff',
  fontWeight:'bold',
}
});
  