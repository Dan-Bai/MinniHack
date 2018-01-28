import React from 'react';
import PropTypes from 'prop-types';
import {
  addNavigationHelpers,
  StackNavigator
} from 'react-navigation';
import { AppRegistry } from 'react-native';

import MainScreenNavigator from './TabNavigator';

import SideMenu from '../Components/SideMenu';
import Home from '../Components/Home';
import Assess from '../Components/Assess';
import Prepare from '../Components/Prepare';

const AppNavigator = StackNavigator({
  Home: { screen: Home },
  Assess: { screen: Assess },
  Prepare: { screen: Prepare },
});

AppRegistry.registerComponent('AppNavigator', () => AppNavigator);

export default AppNavigator;
