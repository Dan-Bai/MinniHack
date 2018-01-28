import React from 'react';
import PropTypes from 'prop-types';
import {
  Image,
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
        <Image style={styles.image} source={require('../Src/_Image/menuTato.png')}/>

        <TouchableOpacity
          style={styles.assess}
          onPress = {
            () => navigate("Assess")
          }
          />
        <TouchableOpacity
          style={styles.prepare}
          onPress = {
            () => navigate("Prepare")
          }
          />
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
    backgroundColor: '#72A0C1',
    margin: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 40,
  },
  image: {
    flex:1,
    resizeMode: 'contain',
    justifyContent: 'center',
  },
  assess: {
    position: 'absolute',
    top: '31.5%',
    left: '20%',
    width: '30%',
    height: '15%',
    borderRadius: 10,
    backgroundColor: 'transparent',
  },
  prepare: {
    position: 'absolute',
    top: '31.5%',
    left: '52%',
    width: '30%',
    height: '15%',
    borderRadius: 10,
    backgroundColor: 'transparent',
  },
});

export default Home;
