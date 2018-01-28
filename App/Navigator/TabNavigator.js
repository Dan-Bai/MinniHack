import { TabNavigator } from "react-navigation";

import AppHome from '../Containers/Home';

const MainScreenNavigator = TabNavigator({
  Home: { screen: AppHome },
});

MainScreenNavigator.navigationOptions = {
  title: 'Home',
  gesturesEnabled: false
};

export default MainScreenNavigator;
