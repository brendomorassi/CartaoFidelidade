import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';
import * as firebase from 'firebase';

import firebaseConfig from '../../firebaseConfig';
firebase.initializeApp(firebaseConfig);


class AuthLoadingScreen extends React.Component {
    constructor() {
      super();
      this._bootstrapAsync();
    }
  
    // Fetch the token from storage then navigate to our appropriate place
    _bootstrapAsync = async () => {
      firebase.auth().onAuthStateChanged((user) => {
        if (user != null) {
          this.props.navigation.navigate('App');

       
          AsyncStorage.setItem('user', JSON.stringify(user));
        
          
          // firebase.database().ref('users/' + user.uid).set({
          //   name: user.displayName,
          //   email: user.email,
          //   photoURL: user.photoURL,
          // });

          console.log("Logado");
        }else{
          this.props.navigation.navigate('Auth');
          console.log("Deslogado");
        }
      });
    };
  
    // Render any loading content that you like here
    render() {
      return (
        <View style={styles.container}>
          <ActivityIndicator />
          <StatusBar barStyle="default" />
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  export default AuthLoadingScreen;