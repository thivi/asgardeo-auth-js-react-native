import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from "./Home";
import { SignIn } from "./Sign-in";
import * as Linking from "expo-linking";
import { auth } from "./init";


const prefix = Linking.makeUrl('/');
const Stack = createStackNavigator();


auth.initialize({
  signInRedirectURL: "http://localhost:3000/sign-in",
  clientID: "client ID",
  serverOrigin: "https://localhost:9443"
});

export default function App() {
  const linking = {
    prefixes: [ prefix ]
  };

  return (
    <NavigationContainer linking={ linking }>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={ Home } />
        <Stack.Screen name="SignIn" component={ SignIn } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
