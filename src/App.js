import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { firebaseApiKey, firebaseAuthDomain, firebaseDatabaseURL, firebaseProjectId, firebaseStorageBucket, firebaseMessagingSenderId } from 'react-native-dotenv';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: firebaseApiKey,
      authDomain: firebaseAuthDomain,
      databaseURL: firebaseDatabaseURL,
      projectId: firebaseProjectId,
      storageBucket: firebaseStorageBucket,
      messagingSenderId: firebaseMessagingSenderId
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true: {
        return (
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingTop: 10 }}>
            <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
          </View>
        );
      }
      case false: {
        return <LoginForm />;
      }
      default: {
        return (
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingTop: 10 }}>
            <Spinner size="large" />
          </View>
        );
      }
    }
  }

  render() {
    return (
      <View>
        <Header headerText='Authentication' />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
