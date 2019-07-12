import React from 'react';
import Expo from 'expo';

import {
  ActivityIndicator,
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Text
} from 'react-native';
import * as firebase from 'firebase';
import * as Facebook from 'expo-facebook';
import { Google } from 'expo';


class SignInScreen extends React.Component {
    static navigationOptions = {
      header: null
    };
  
    _signInFacebook = async () => {
      const appId = '1044942212377738';
      const permissions = ['public_profile', 'email'];  // Permissions required, consult Facebook docs
      
      const {
        type,
        token,
      } = await Facebook.logInWithReadPermissionsAsync(
        appId,
        {permissions}
      );
    
      switch (type) {
        case 'success': {
          await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);  // Set persistent auth state
          const credential = firebase.auth.FacebookAuthProvider.credential(token);
          await firebase.auth().signInWithCredential(credential);

         // await firebase.auth().signInAndRetrieveDataWithCredential(credential);  // Sign in with Facebook credential
         
        }
        case 'cancel': {
          
        }
      }
    }

    _signInGoogle = async () => {
        // First- obtain access token from Expo's Google API
        const result = await Google.logInAsync({
        //  iosClientId: `<YOUR_IOS_CLIENT_ID_FOR_EXPO>`,
          androidClientId: `104785148728-qi3c1ce0bih1dulf5ppqurkgt2lid883.apps.googleusercontent.com`,
        //  iosStandaloneAppClientId: `<YOUR_IOS_CLIENT_ID>`, 
        //  androidStandaloneAppClientId: `<YOUR_ANDROID_CLIENT_ID>`,
        });

        if (result.type === 'success') {
      
      
          const { idToken, accessToken } = result;
          const credential = firebase.auth.GoogleAuthProvider.credential(idToken, accessToken);

          await firebase.auth().signInWithCredential(credential);

        }
    }

    render() {
      return (
        <View style={styles.container}>

          <TouchableOpacity
          onPress={this._signInFacebook}>
            <Text style={styles.btnFacebook}>Entrar com Facebook</Text>
          </TouchableOpacity>

          <TouchableOpacity
          onPress={this._signInGoogle}>
            <Text style={styles.btnGoogle}>Entrar com Google</Text>
          </TouchableOpacity>

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
    btnFacebook: {
      borderRadius: 20,
      backgroundColor: '#3C5A9B',
      color: 'white',
      padding: 9,
      fontSize: 17,
      width: '80%',
      textAlign: 'center'
    },
    btnGoogle: {
      borderRadius: 20,
      backgroundColor: '#F3553D',
      color: 'white',
      padding: 9,
      fontSize: 17,
      paddingLeft: 20,
      paddingRight: 20,
      textAlign: 'center'
    }
  });

  export default SignInScreen;