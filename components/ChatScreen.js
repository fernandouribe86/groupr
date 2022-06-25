import React, {setState, useState} from 'react';
import { View, Text, StyleSheet, AsyncStorage } from 'react-native';
import { GiftedChat, Bubble, InputToolbar } from 'react-native-gifted-chat';
import NetInfo from '@react-native-community/netinfo';
import MapView from 'react-native-maps';


// import { AsyncStorage } from 'react-native';
// import AsyncStorage from '@react-native-community/async-storage';

import { v4 as uuidv4 } from 'uuid';
//SETUP FIREBASE
import firebase from 'firebase';
import firestore from 'firebase';
import { initializeApp } from "firebase/app";

import { Platform, KeyboardAvoidingView } from 'react-native';

import CustomActions from './CustomActions';

export default class Chat extends React.Component{

  constructor() {
    super();
    this.state = {
      messages: [],
      uid: 0,
      loggedInText: 'Please wait, you are getting logged in',
      user: {
        _id: "",
        name: "",
        avatar: "",
      },
    }

    const firebaseConfig= {
        apiKey: "AIzaSyAoli4iRkMiZyei75YRGeqSyHaDh-dm6Do",
        authDomain: "chat2-6589a.firebaseapp.com",
        projectId: "chat2-6589a",
        storageBucket: "chat2-6589a.appspot.com",
        messagingSenderId: "110175516076",
        appId: "1:110175516076:web:e561b819c9767090787609"
          };
    
          if(!firebase.apps.length){
            firebase.initializeApp(firebaseConfig);
          }

          this.referenceChatMessages = firebase.firestore().collection("messages");

          this.referenceMessagesUser= null;
    }

    async getMessages() {
      let messages = '';
      try {
        messages = await AsyncStorage.getItem('messages') || [];
        this.setState({
          messages: JSON.parse(messages)
        });
      } catch(error){
        console.log(error.message);
      }
    };

    componentDidMount() {
      this.getMessages();
      let { name } = this.props.route.params;
      this.props.navigation.setOptions({ title: name });

      NetInfo.fetch().then(connection => {
        if(connection.isConnected){
          console.log('online');
        } else{
          console.log('offline');
        }
      });
  
      // Reference to load messages via Firebase
      this.referenceChatMessages = firebase.firestore().collection("messages");
  
      // Authenticates user via Firebase
      this.authUnsubscribe = firebase.auth().onAuthStateChanged((user) => {
        if (!user) {
          firebase.auth().signInAnonymously();
        }
        this.setState({
          uid: uuidv4(),
          messages: [],
          user: {
            _id: uuidv4(),
            name: name,
            avatar: "https://via.placeholder.com/140",
        },
        });
        this.referenceChatUser = firebase
                  .firestore()
                  .collection("messages")
                  .where("uid", '==', this.state.uid);
        this.unsubscribe = this.referenceChatMessages
          .orderBy("createdAt", "desc")
          .onSnapshot(this.onCollectionUpdate);
    });
  }



      // stop listening to auth and collection changes
    componentWillUnmount() {
      this.authUnsubscribe();
      // this.unsubscribe();
    };

      addMessage() { 
        // add a new message to the conversation
        const message = this.state.messages[0];
        this.referenceChatMessages.add({
          uid: this.state.uid,
          _id: message._id,
          createdAt: message.createdAt,
          text: message.text || "",
          user: message.user,
        });
      }

      onSend(messages = []) {
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, messages),
        }), () => {
          this.addMessage();
          this.saveMessages();
        });
      };

      async saveMessages(){
        try {
          await AsyncStorage.setItem('messages', JSON.stringify(this.state.messages));
        } catch(error){
          console.log(error.message);
        }
      }

      async deleteMessages(){
        try{
          await AsyncStorage.removeItem('messages');
          this.setState({
            messages: []
          })
        } catch(error){
          console.log(error.message);
        }
      }

      onCollectionUpdate = (querySnapshot) => {
        const messages = [];
        // goes through each document
        querySnapshot.forEach((doc) => {
            // gets the QueryDocumentSnapshot's data
            let data = doc.data();
            messages.push({
                _id: data._id,
                createdAt: data.createdAt.toDate(),
                text: data.text,
                user: {
                    _id: data.user._id,
                    name: data.user.name,
                    avatar: data.user.avatar
                },
                image: data.image || null,
                location: data.location || null
            });
        });
        this.setState({
            messages: messages
        });

    };

  // Customize the color of the sender bubble
  renderBubble(props) {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: '#000'
          }
        }}
      />
    )
  };

  renderInputToolbar(props){
    if(this.state.isConnected==false){
    } else{
      return(
        <InputToolbar
        {...props}
        />
      );
    }
  }

  renderCustomActions(props){
    return <CustomActions {...props}/>
  }

  //RENDER MAP VIEW
  renderCustomView(props){
    const { currentMessage } = props;
    if (currentMessage.location) {
      return (
        <MapView
          style={{ width: 150, height: 150 }}
          region={{
            latitude: currentMessage.location.latitude,
            longitude: currentMessage.location.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      );
    }
    return null;
  };

  render() {
    let { color, name } = this.props.route.params;
    return (
      <View style={[{ backgroundColor: color }, styles.container]}>
      <GiftedChat
      renderActions={this.renderCustomActions}
      renderCustomView={this.renderCustomView}
      renderBubble={this.renderBubble.bind(this)}
      messages={this.state.messages}
      onSend={(messages) => this.onSend(messages)}
      user={{
        _id: this.state.user._id,
        name: name,
         avatar: this.state.user.avatar 

      }}
    />
     {/* Avoid keyboard to overlap text messages on older Andriod versions  */}
    {Platform.OS === 'android' ? <KeyboardAvoidingView behavior="height" /> : null}
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
