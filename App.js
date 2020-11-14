import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import Contact from "./components/Contact";
import LoginScreen from "./LoginScreen";
import ContactsList from "./ContactList";

export default function App() {
  return (
    <View style={styles.container}>
      {/*  <LoginScreen />*/}

     <ContactsList />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:10
    //flex: 1,
     //backgroundColor: '#fff',
     //alignItems: 'center',
     //justifyContent: 'center',
  },
});
