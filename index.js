import 'expo';
import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import AppContainer from './App/AppContainer';
import MainScreen from './App/Navigator/AppNavigator';

export default class main extends Component {
  render() {
    return (
      // <AppContainer/>
      <AppContainer />
    );
  }
};

// skip this line if using Create React Native App
AppRegistry.registerComponent('main', () => main);
