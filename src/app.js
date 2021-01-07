import React, {Component} from 'react';
import {View} from 'react-native';
import firebase from 'firebase';
import {Button, Header, Spinner} from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = {loggedIn: null};

  componentWillMount() {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: 'AIzaSyDCoClZWdNoDM0tDHhT7xu0ppTexqYQ3vA',
        authDomain: 'authentication-71b52.firebaseapp.com',
        projectId: 'authentication-71b52',
        storageBucket: 'authentication-71b52.appspot.com',
        messagingSenderId: '195359634224',
        appId: '1:195359634224:web:1a64211041af9f5040cef5',
      });
    } else {
      firebase.app(); // if already initialized, use that one
    }

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({loggedIn: true});
      } else {
        this.setState({loggedIn: false});
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View style={{height: 105}}>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
