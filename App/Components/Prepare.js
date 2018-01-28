import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

class Prepare extends React.Component {
  constructor(props) {
    super(props);
    state = {
    };
  }

  renderSeparator = () => {
    <View style={styles.separator} />
  }

  static navigationOptions = {
    // header: null,
    title: 'Prepare',
  };

  render() {
    let { navigate } = this.props.navigation;
    return (
      <View style = {styles.homeContainer}>
        <Text style={styles.text}> Prepare Stuff Goes Here </Text>
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
  text: {
    fontWeight: 'bold',
    fontSize: 40,
  }
});

export default Prepare;
