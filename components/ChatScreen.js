import React, {setState, useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { GiftedChat, Bubble } from 'react-native-gifted-chat'

import { Platform, KeyboardAvoidingView } from 'react-native';

export default class Chat extends React.Component{

  constructor() {
    super();
    this.state = {
      messages: [],
    }
  }

  componentDidMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hello developer',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
         },
         {
          _id: 2,
          text: 'This is a system message',
          createdAt: new Date(),
          system: true,
         },
      ],
    })
  };

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
  }

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
  }

  render(){

    let { name, color } = this.props.route.params;

    this.props.navigation.setOptions({ title: name });

    return (
      <View style={[styles.chatContainer, {backgroundColor: color}]}>
          <GiftedChat
          renderBubble={this.renderBubble.bind(this)}
            style={[styles.chat, {backgroundColor: color}]}
            messages={this.state.messages}
            onSend={messages => this.onSend(messages)}
            user={{
              _id: 1,
            }}
            accessible={true}
            accessibilityLabel="Chat Box"
            accessibilityHint="This is your chat box"
          />
          { Platform.OS === 'android' ? <KeyboardAvoidingView behavior="height" /> : null
 }
      </View>
    )
  }
};

  const styles = StyleSheet.create({
    chatContainer: {
      flex:1,
    },
    chat: {
      flex: 1,
    }
  })

