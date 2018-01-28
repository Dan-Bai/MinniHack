import React from 'react';
import PropTypes from 'prop-types';
import {
  addNavigationHelpers,
  StackNavigator
} from 'react-navigation';
import { AppRegistry } from 'react-native';

import MainScreenNavigator from './TabNavigator';

import SideMenu from '../Components/SideMenu';

const AppNavigator = StackNavigator({
});

AppRegistry.registerComponent('AppNavigator', () => AppNavigator);

export default AppNavigator;
