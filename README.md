# groupr

Objective
To build a chat app for mobile devices using React Native. The app will
provide users with a chat interface and options to share images and their
location.

## Technologies

- React
- React Native
- Firestore/Firebase
- Gifted Chat
- Expo

## User Stories
- As a new user, I want to be able to easily a chat room so I can start chatting.
- As a user, I want to be able to send messages to my contacts so that I can stay in communication with them.
- As a user, I want to send images to other users so that they can see what I want to share.
- As a user, I want to share my location with other users so they can see my current location.
- As a user, I want to be able to read my messages offline so I can reread conversations at any time.
- As a user with a visual impairment, I want to use a chat app that is compatible with a screen reader so that I can engage with a chat interface.


## Features
- A homepage where users can enter their name, select a background color, and enter the chat.
- A chat page displaying the conversation and images
- The ability to send/receive photos and locations, either from the library or with the camera (with permissions)
- User data is stored online and locally.


## Screenshots
- Login screen allowing users to pick Chat-app colors:

![Screenshot](https://github.com/fernandouribe86/groupr/blob/main/assets/Screen%20Shot%202022-06-25%20at%2011.56.25%20AM.png)

- Chat Screen with communition (geolocation and image) functionality:

![Screenshot2](https://github.com/fernandouribe86/groupr/blob/main/assets/Screen%20Shot%202022-06-25%20at%2011.55.56%20AM.png)

## Development environment setup

- Make sure expo-cli is installed globally:
```npm install expo-cli --global```

- Initialize project:
```expo init "Chat-app"```

## Launch via emulator (Android Studio (Windows) or XCode (iOS)), or a mobile phone

- Launch:
```npm start``` or ```expo start```

## Database configuration
Chat-app makes use of Cloud Firestore, a real-time database which synchronizes data across multiple devices and stores it in Firebase's Cloud.

```npm install --save firebase (current version: "^9.8.1")```

## Necessary libraries to install

- React navigation and dependencies
```npm install --save react-navigation``` 

- Gifted Chat library
```npm install react-native-gifted-chat --save```

- React-Native async storage
```expo install @react-native-async-storage/async-storage```

- NetInfo package
```npm install --save @react-native-community/netinfo```

- Expo's ImagePicker API
```expo install expo-image-picker```

- Expo's Location API and react-native-maps
```expo install expo-location expo install react-native-maps```

## Installation Instructions

- Navigate to the project root folder
- Run "expo start" or "npm start"
Expo will build the project and display development options in a browser window.
- Scan the QR Code in the development options with the app 
OR
- Download the Expo Go App and view project on your device
Note that the app can also be run through an emulator on your desktop via Expo.
