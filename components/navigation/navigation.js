import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import Contact from "../Contact";
import LoginScreen from "../LoginScreen";
import ContactsList from "../ContactList/";
import SignIn from "../SignIn";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

export default function AppContainer() {
  return (
    
    
     <NavigationContainer>
     <Stack.Navigator> 
     <Stack.Screen 
   
      options={{
            header: () => null
          }}
            
         
     name="LoginScreen" component={LoginScreen} />


      <Stack.Screen
     options={{
            header: () => null
          }} 
       name="SignIn" component={SignIn} />
      <Stack.Screen 
      options={{
            title: " CONTACTS",
            headerStyle:{
              backgroundColor:"#b617eb"
            },
            headerTintColor: "white",
            headerTitleAlign: "center",
          }}
      name="ContactsList" component={ContactsList} />
     
    </Stack.Navigator>
     
     </NavigationContainer>
   
    
  );
}


