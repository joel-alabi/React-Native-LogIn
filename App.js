import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import Contact from "./components/Contact";
import LoginScreen from "./components/LoginScreen";
import ContactsList from "./components/ContactList";
import SignIn from "./components/SignIn";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
export default function App() {
  return (
    <View style={styles.container}>
      {/* </> */}
{/* < /> */}
{/* < /> */}
     <NavigationContainer>
     <Stack.Navigator> 
     <Stack.Screen 
   
      options={{
            header: () => null
          }}
            
         
     name="SignIn" component={SignIn} />
      <Stack.Screen
     options={{
            header: () => null
          }}
       name="LoginScreen" component={LoginScreen} />
      <Stack.Screen 
      options={{
            title: "MY CONTACTS",
            headerStyle:{
              backgroundColor:"#b617eb"
            },
            headerTintColor: "white",
            headerTitleAlign: "center",
          }}
      name="ContactsList" component={ContactsList} />
     
    </Stack.Navigator>
     
     </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
     
  },
});
