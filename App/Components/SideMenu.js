import React, { Component } from 'react';
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Text,
  View,
  Button
} from 'native-base';

export default class SideMenu extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'SideMenu',
  };

  render() {
    // const { navigate } = this.props.navigation;
    let list = [{
      title: 'Games',
      onPress: () => {
        // navigate('Games');
      }
    }, {
      title: 'Profile',
      onPress: () => {
        // navigate('Profile');
      }
    }];
    return (
      <Container theme={this.props.theme}>
        <Header/>
        <View>
          <List dataArray={list} renderRow={(item) =>
            <ListItem button onPress={item.onPress.bind(this)}>
              <Text> {item.title} </Text>
            </ListItem>
          }/>
        </View>
      </Container>
    )
  }
};
