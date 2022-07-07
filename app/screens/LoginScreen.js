import React, { useState } from "react";

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
 
const LoginScreen = ()=> {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
 
  return (
    
    <View style={styles.container}>
      
    

       <TouchableOpacity>
        <Text style={styles.logo_button}>Point Plus+ </Text>
      </TouchableOpacity>

       
    
    
 
    
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Username"
          placeholderTextColor="#FFFFFF"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#FFFFFF"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
 
      <TouchableOpacity>
        <Text style={styles.forgot_button}>                            Forgot Password?</Text>
      </TouchableOpacity>
 
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

       <TouchableOpacity>
        <Text style={styles.logo_button}>--------------</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.sign_inBtn}>
        <Text style={styles.loginText}>Sign in With Google</Text>
      </TouchableOpacity> 

     
      <TouchableOpacity>
        <Text style={styles.signup_button}>Dont have an account already?  Sign Up </Text>   
      </TouchableOpacity>
     

      
      
    </View>
  );
}
 export default LoginScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0f7d63",
    borderRadius: 15,
    
  },
 
 
 
  inputView: {
    backgroundColor: "#66cdaa",
    borderRadius: 10,
    width: "70%",
    height: 45,
    marginBottom: 20,
    borderWidth:3,
     borderColor:'#000000',
 
    alignItems: "center",
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
 
  forgot_button: {
    height: 30,
    marginBottom: 30,
     color:"#FFFFFF",
    
  },

    signup_button: {
    height: 30,
    marginBottom: 30,
     color:"#FFFFFF",
    marginTop: 20,
  },

  logo_button: {
      height: 60,
    marginBottom: 50,
    fontSize: 35,
    color:"#ffffff"
    

  },
 
  loginBtn: {
    width: "80%",
    borderRadius: 15,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#66cdaa",
     borderWidth:3,
     borderColor:'#000000',
  },
    sign_inBtn: {
    width: "80%",
    borderRadius: 15,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#808080",
     borderWidth:3,
     borderColor:'#000000',
     
  },
  
  
}



)