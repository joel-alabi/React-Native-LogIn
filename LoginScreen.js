import React, { Component } from "react";
import {StyleSheet,Text,TextInput,TouchableOpacity,ScrollView,View,} from "react-native";

class LoginScreen extends Component {
    
    constructor(props) {
        super(props);
        this.state={
            username:"",
            password:""
        }
    }
    

  render() {
    return (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.loginTextContainer}>
          <Text style={styles.loginText}>Log In</Text>
        </View>

        <View>
          <TextInput
            style={styles.input}
            placeholder="Username"
            placeholderTextColor="#aaaaaa"
            value={this.state.username}
            onChangeText={(username)=>{
            this.setState({username})
            }}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#aaaaaa"
            secureTextEntry={true}
            value={this.state.password}
            onChangeText={(password)=>{
                this.setState({password})
            }}
          />
          <Text style={styles.forgotPassword}>Forgot password?</Text>
        </View>

        <View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Log In</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.noAccountContainer}>
          <Text style={styles.noAccountText}>Don't have an account?</Text>
          <Text style={styles.signUpText}>Sign up</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 55,
    marginTop: 100,
  },

  loginText: {
    fontSize: 50,
    color: "#b617eb",
  },

  loginTextContainer: {
    marginBottom: 30
  },

  input: {
    borderBottomWidth: 2,
    borderBottomColor: "#58269e",
    fontSize: 20,
    height: 20,
    marginTop:70
  },

  forgotPassword: {
    alignSelf: "flex-end",
    marginVertical: 2.5,
    color: "#02a6cf",
  },

  button: {
    height: 50,
    backgroundColor: "#b617eb",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginVertical: 80,
  },

  buttonText: {
    color: "white",
    fontSize: 27,
  },

  noAccountContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },

  noAccountText: {
    marginRight: 10,
    fontSize: 16,
  },

  signUpText: {
    fontSize: 16,
    color: "#b617eb",
  },
});

export default LoginScreen;