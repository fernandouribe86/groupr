import React, {useState} from 'react';
import { View, Text, Button, TextInput, StyleSheet, ImageBackground, TouchableOpacity, KeyboardAvoidingView } from 'react-native';

const image = require('./background-image.png');

const colors = {
  black: "#090C08",
  plum: "#474056",
  shark: "#8A95A5",
  olive: "#B9C6AE",
};

export default function Start(props){


  let [ name, setName ] = useState();
  let [ color, setColor ] =useState();
  let [ selected, setSelected ] = useState(0);

    return (
      <KeyboardAvoidingView style={styles.container} behavior="height">
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <View style={styles.headerContainer}>
            <Text 
            style={styles.header}
            accessible={true}
                  accessibilityLabel="Grouper Header"
                  accessibilityHint="Grouper Header"
                  accessibilityRole="header"
                  >
                    Groupr
                  </Text>
          </View>
          
          <View style={styles.mainContainer}>
              <TextInput
                accessible={true}
                accessibilityLabel="Your Name"
                accessibilityHint="Enter in your name before entering the chat"
                placeholder='Your Name...' 
                onChangeText={(name) => setName(name)}
                value={name}
                style={styles.textInput}
                />
              <View style={styles.themeContainer}>
                <Text
                  style={styles.text}
                  accessible={true}
                  accessibilityLabel="Choose Background"
                  accessibilityHint="Select a Background Color for the Chat Window"
                  accessibilityRole="text"
                >Choose Background Color:</Text>
                <View style={styles.themeColors}>
                    <TouchableOpacity 
                    style={styles.blackTheme} 
                    onPress={() => setColor(colors.black)}
                    accessible={true}
                    accessibilityLabel="Black"
                    accessibilityHint="Select if you want black as your background color"
                    accessibilityRole="button"
                    />
                    <TouchableOpacity 
                    style={styles.plumTheme} 
                    onPress={() => setColor(colors.plum)}
                    accessible={true}
                    accessibilityLabel="Plum"
                    accessibilityHint="Select if you want plum as your background color"
                    accessibilityRole="button"
                    />
                    <TouchableOpacity 
                    style={styles.sharkTheme} 
                    onPress={() => setColor(colors.shark)}
                    accessible={true}
                    accessibilityLabel="Grey"
                    accessibilityHint="Select if you want Grey as your background color"
                    accessibilityRole="button"
                    />
                    <TouchableOpacity 
                    style={styles.oliveTheme} 
                    onPress={() => setColor(colors.olive)}
                    accessible={true}
                    accessibilityLabel="Olive"
                    accessibilityHint="Select if you want olive green as your background color"
                    accessibilityRole="button"
                    />
                </View>
              </View>
                <TouchableOpacity
                  style={styles.appButtonContainer}
                  onPress={() => props.navigation.navigate('Chat', { name: name, color: color})}
                  accessible={true}
                    accessibilityLabel="Enter Chat"
                    accessibilityHint="Press to enter the chat window"
                    accessibilityRole="button"
                  >
                    <Text style={styles.appButtonText}>Start Chatting</Text>
                    </TouchableOpacity>
            </View>
        </ImageBackground>
      </KeyboardAvoidingView>

    )
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  headerContainer:{
    flex: 560,
    justifyContent: 'center'
  },
  mainContainer: {
    flex: 440,
    backgroundColor: '#ffffff',
    padding: 15,
    margin: 15,
    marginBottom: 25,
  },
  header: {
    color: '#ffffff',
    fontSize: 45,
    fontWeight: '600',
    textAlign: 'center',
  },
  textInput: {
    backgroundColor: '#ffffff',
    height: 60,
    paddingLeft: 15,
    color: '#757083',
    opacity: .5,
    marginBottom: 15,
    borderColor: '#757083',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 3
  },
  themeContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: 15
  },
  themeColors: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 25
  },
  blackTheme: {
    backgroundColor: '#090C08',
    width: 50,
    height: 50,
    borderRadius: 25
  },
  plumTheme: {
    backgroundColor: '#474056',
    width: 50,
    height: 50,
    borderRadius: 25
  },
  sharkTheme: {
    backgroundColor: '#8A95A5',
    width: 50,
    height: 50,
    borderRadius: 25
  },
  oliveTheme: {
    backgroundColor: '#B9C6AE',
    width: 50,
    height: 50,
    borderRadius: 25
  },
  text: {
    color: '#757083',
    fontSize: 16,
    fontWeight: '300',
    textAlign: 'center',
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#757083",
    height: 60,
    width: '100%',
    paddingTop: 20,
  },
  appButtonText: {
    fontSize: 16,
    color: "#ffffff",
    fontWeight: "600",
    alignSelf: "center",
  },
});