import React, { Component } from 'react'
import { View,Text,StyleSheet,TextInput,TouchableOpacity, ScrollView } from 'react-native';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
          username: "",
          email: "",
          password: "",
          passwordagain:""
        };
      }
    render() {const {navigation} = this.props
        return (
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.signUpTextContainer}>
          <Text style={styles.signUpText}>Sign Up</Text>
        </View>

        <View>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#aaaaaa"
            value={this.state.email}
            onChangeText={(email) => {
              this.setState({ email });
            }}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#aaaaaa"
            secureTextEntry={true}
            value={this.state.password}
            onChangeText={(password) => {
              this.setState({ password });
            }}
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm password"
            placeholderTextColor="#aaaaaa"
            secureTextEntry={true}
            value={this.state.passwordagain}
            onChangeText={(passwordagain) => {
              this.setState({ passwordagain });
            }}
          />
         <Text style={styles.forgotPassword}>Forgot password?</Text> 
        </View>

        <View>
          <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate("LoginScreen") }}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.existingAccountContainer}>
          <Text style={styles.existingAccountText}>
            You already have an account?
          </Text>
          <Text style={styles.logInText}>Log in</Text>
        </View>
      </ScrollView>
        )
    }
}
export default SignIn; 

const styles = StyleSheet.create({
    container: {
        margin: 50,
        marginTop: 90,
      },
    
      signUpText: {
        fontSize: 50,
        color: "#b734eb",
      },
    
      loginTextContainer: {
        marginBottom: 25,
      },
    
      input: {
        marginVertical:10,
        paddingBottom:15,
        borderStyle:'solid',
        borderBottomColor:'#b734eb',
        borderBottomWidth:1,
        fontSize:20,
        
      },
    
      forgotPassword: {
        alignSelf: "flex-end",
        marginVertical: 3,
        color: "#02a6cf",
      },
    
      button: {
        height: 50,
        backgroundColor: "#b734eb",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 15,
        marginVertical: 55,
      },
    
      buttonText: {
        color: "white",
        fontSize: 27,
      },
    
      existingAccountContainer: {
        flexDirection: "row",
        justifyContent: "center",
      },
    
      existingAccountText: {
        marginRight: 10,
        fontSize: 16,
      },
    
      logInText: {
        fontSize: 16,
        color: "#58269e",
      },
  });
  