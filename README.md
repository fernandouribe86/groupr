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


## Features


## Screenshots


# Development environment setup

- Make sure expo-cli is installed globally:
```npm install expo-cli --global```

- Initialize project:
```expo init "Chat-app"```

# Launch via emulator (Android Studio (Windows) or XCode (iOS)), or a mobile phone

- Launch:
```npm start``` or ```expo start```

# Database configuration
Chat-app makes use of Cloud Firestore, a real-time database which synchronizes data across multiple devices and stores it in Firebase's Cloud.

```npm install --save firebase (current version: "^9.8.1")```

# Necessary libraries to install

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

# Installation Instructions

- Navigate to the project root folder
- Run "expo start" or "npm start"
Expo will build the project and display development options in a browser window.
- Scan the QR Code in the development options with the app 
OR
- Download the Expo Go App and view project on your device
Note that the app can also be run through an emulator on your desktop via Expo.
