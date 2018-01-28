import { TabNavigator } from "react-navigation";

import AppHome from '../Containers/Home';
import Diagnosis from '../Containers/Diagnosis';

const MainScreenNavigator = TabNavigator({
  Home: { screen: AppHome },
  Diagnosis: { screen: Diagnosis },
});

MainScreenNavigator.navigationOptions = {
  title: 'Home',
  gesturesEnabled: false
};

export default MainScreenNavigator;
