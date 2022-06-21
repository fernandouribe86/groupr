import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, Button, Alert, ScrollView } from 'react-native';
import 'react-native-gesture-handler';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NetInfo from '@react-native-community/netinfo';

// IMPORT SCREENS WE WANT TO NAVIGATE
import Start from './components/Start';
import Chat from './components/ChatScreen';
import { registerRootComponent } from 'expo';

const Stack = createStackNavigator();

export default class App extends React.Component {

render(){

  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start" >
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Chat" component={Chat} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'dodgerblue',
  },
  title: {
    backgroundColor: 'blue',
  }
});
