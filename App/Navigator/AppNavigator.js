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
import DiagnosisHead from '../Components/DiagnosisHead';
import DiagnosisTorso from '../Components/DiagnosisTorso';
import DiagnosisFoot from '../Components/DiagnosisFoot';

const AppNavigator = StackNavigator({
  Home: { screen: Home },
  Assess: { screen: Assess },
  Diagnosis: { screen: DiagnosisHead },
  Prepare: { screen: Prepare },
  DiagnosisT: { screen: DiagnosisTorso },
  DiagnosisF: { screen: DiagnosisFoot },
});

AppRegistry.registerComponent('AppNavigator', () => AppNavigator);

export default AppNavigator;
