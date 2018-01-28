import React, { Component } from 'react';
import {
  Drawer,
  View
} from 'native-base';
import { Navigator } from 'react-native';

import SideMenu from '../Components/SideMenu';
import Home from '../Components/Home';

export default class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggled: false,
      store: {},
      theme: null
    };
  }

  toggleDrawer() {
    this.state.toggled ? this._drawer.close() : this._drawer.open()
  }
  openDrawer() {
    this.setState({toggled: true});
  }
  closeDrawer() {
    this.setState({toggled: false});
  }

  // renderScene(route, navigator) {
  //   switch(route) {
  //     default:
  //       return null;
  //   }
  // }
  // configureScene(route, routeStack) {
  //   return Navigator.SceneConfigs.PushFromRight;
  // }

  render() {
    return (
      <Drawer
        ref={(ref) => this._drawer = ref}
        type="displace"
        content={<SideMenu navigation={this.props.navigation} theme={this.state.theme}/>}
        onClose={this.closeDrawer.bind(this)}
        onOpen={this.openDrawer.bind(this)}
        openDrawerOffset={0.2}
        >
          {/* <Navigator
            ref={(ref) => this._navigator = ref}
            configureScene={this.configureScene.bind(this)}
            renderScene={this.renderScene.bind(this)}
          /> */}
        </Drawer>
    )
  }
};
