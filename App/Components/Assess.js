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
        <TouchableOpacity
          style={styles.head}
          onPress = {
            () => navigate("Diagnosis")
          }
          />
        <TouchableOpacity
          style={styles.leg}
          onPress = {
            () => console.log("Leg")
          }
          />
        <TouchableOpacity
          style={styles.armLeft}
          onPress = {
            () => console.log("ArmLeft")
          }
          />
        <TouchableOpacity
          style={styles.armRight}
          onPress = {
            () => console.log("ArmRight")
          }
          />
        <TouchableOpacity
          style={styles.torso}
          onPress = {
            () => console.log("Torso")
          }
          />
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
    backgroundColor: 'transparent',
  },
  torso: {
    position: 'absolute',
    top: '15%',
    width: '26%',
    height: '35%',
    borderRadius: 10,
    backgroundColor: 'transparent',
  },
  armLeft: {
    position: 'absolute',
    top: '20%',
    left: '22%',
    width: '15%',
    height: '42%',
    borderRadius: 10,
    backgroundColor: 'transparent',
    transform: [
      {rotate: '8deg'}
    ],
  },
  armRight: {
    position: 'absolute',
    top: '20%',
    left: '62%',
    width: '15%',
    height: '42%',
    borderRadius: 10,
    backgroundColor: 'transparent',
    transform: [
      {rotate: '-10deg'}
    ],
  },
  leg: {
    position: 'absolute',
    top: '50%',
    width: '26%',
    height: '50%',
    borderRadius: 10,
    backgroundColor: 'transparent',
  },
});

export default Assess;
