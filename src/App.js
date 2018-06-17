import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { firebaseApiKey, firebaseAuthDomain, firebaseDatabaseURL, firebaseProjectId, firebaseStorageBucket, firebaseMessagingSenderId } from 'react-native-dotenv';
import { Header } from './components/common';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: firebaseApiKey,
      authDomain: firebaseAuthDomain,
      databaseURL: firebaseDatabaseURL,
      projectId: firebaseProjectId,
      storageBucket: firebaseStorageBucket,
      messagingSenderId: firebaseMessagingSenderId
    });
  }

  render() {
    return (
      <View>
        <Header headerText='Authentication' />
        <Text>An app</Text>
      </View>
    );
  }
}

export default App;
