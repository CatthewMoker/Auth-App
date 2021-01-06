import React, {Component} from 'react';
import {View} from 'react-native';
import firebase from 'firebase';
import {Header} from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
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
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
