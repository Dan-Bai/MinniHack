import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

class Home extends React.Component {
  constructor(props) {
    super(props);
    state = {
    };
  }

  renderSeparator = () => {
    <View style={styles.separator} />
  }

  static navigationOptions = {
    header: null,
    title: 'Home',
  };

  render() {
    let { navigate } = this.props.navigation;
    return (
      <View style = {styles.homeContainer}>
        <TouchableOpacity
          style = {styles.nextScreen}
          onPress = {
            () => navigate('Assess')
          }
          >
            <Text style={styles.buttonText}> Assess </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style = {styles.nextScreen}
          onPress = {
            () => navigate('Prepare')
          }
          >
            <Text style={styles.buttonText}> Prepare </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextScreen: {
    width: '75%',
    height: '25%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00f',
    margin: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 40,
  }
});

export default Home;
