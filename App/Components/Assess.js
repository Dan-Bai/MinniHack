import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

class Assess extends React.Component {
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
    title: 'Assess',
  };

  render() {
    let { navigate } = this.props.navigation;
    return (
      <View style = {styles.homeContainer}>
        <Image style={styles.image} source={require('../Src/_Image/Human.jpg')}/>
        <View style={styles.head}/>
        <View style={styles.torso}/>
        <View style={styles.legg}/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
     flex:1,
     resizeMode: 'contain',
     borderWidth: 2,
     borderColor: '#000',
  },
  text: {
    position: 'absolute',
    fontWeight: 'bold',
    fontSize: 40,
  },
  head: {
    position: 'absolute',
    top: '2%',
    width: '20%',
    height: '15%',
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: 'transparent',
  },
  torso: {
    position: 'absolute',
    top: '15%',
    width: '30%',
    height: '35%',
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: 'transparent',
  },
  legg: {
    position: 'absolute',
    bottom: '1%',
    width: '30%',
    height: '50%',
    borderRadius: 10,
    borderRadius:
    backgroundColor: 'transparent',

  }
});

export default Assess;
