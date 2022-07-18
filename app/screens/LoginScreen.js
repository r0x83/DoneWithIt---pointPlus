import React, { useState } from "react";
import { TextInput } from "react-native-paper";

import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";

const LoginScreen = ({ navigation }) => {
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
          placeholderTextColor="grey"
          onChangeText={(email) => setEmail(email)}
          left={<TextInput.Icon name="account" />}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="grey"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
          left={<TextInput.Icon name="lock" />}
        />
      </View>

      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => navigation.navigate("StudentDashboard")}
      >
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.sign_inBtn}>
        <Text style={styles.loginText}>Sign in With Google</Text>
      </TouchableOpacity>
      <View style={{ flexDirection: "row", marginTop: 50 }}>
        <Text style={{ marginBottom: -10, marginTop: 20 }}>
          Dont have an account already?{" "}
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={styles.signup_button}>Sign Up </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default LoginScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    borderRadius: 15,
  },

  inputView: {
    width: "70%",
    height: 45,
    marginBottom: 20,

    marginTop: 20,
    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 3,
    marginLeft: -5,
    marginTop: -10,
    width: 330,
    borderRadius: 5,
    shadowColor: "#171717",
    shadowOffset: { width: 8, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
    marginRight: -200,
    color: "#000000",
  },

  signup_button: {
    height: 30,
    marginBottom: 30,
    color: "blue",
    marginTop: 20,
  },

  logo_button: {
    height: 50,
    marginBottom: 50,
    marginTop: -10,
    fontSize: 35,
    color: "#000080",
  },

  loginBtn: {
    width: "80%",
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#332FD0",
    borderWidth: 3,
    borderColor: "#000000",
  },

  loginText: {
    color: "#ffffff",
  },
  sign_inBtn: {
    width: "80%",
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    backgroundColor: "#808080",
    borderWidth: 3,
    borderColor: "#000000",
  },
});
