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

import SignInScreen from '../screens/auth/SignInScreen';
import AuthLoadingScreen from '../screens/auth/AuthLoadingScreen';

import MainTabNavigator from './MainTabNavigator';


//ROTAS PARA QUEM ESTÁ LOGADO
const AppStack = createSwitchNavigator({
  Main: MainTabNavigator,
});

//ROTAS PARA QUEM NÃO ESTÁ LOGADO
const AuthStack = createStackNavigator({ 
  SignIn: SignInScreen 
});

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));