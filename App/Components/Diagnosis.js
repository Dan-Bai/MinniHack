import React from 'react';
import PropTypes from 'prop-types';
import {
	AppRegistry,
	View,
	Animated,
	TouchableOpacity,
	Text,
	Image,
	LayoutAnimation,
	StyleSheet,
	Platform,
	UIManager,
  ScrollView,
} from 'react-native';

class Item extends React.Component {
	constructor(props){
		super(props);
		this.state = {
      show: false,
      height: new Animated.Value(0),
		}
		if (Platform.OS === 'android') {
			UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
		}
	}

	renderSeparator = () => {
		<View style={styles.seperator} />
	}

  handleInfoClick(){
    this.setState({
      show: !this.state.show
    }, () => {
      if(this.state.show){
        Animated.timing(this.state.height, {
          toValue: require('Dimensions').get('window').width,
          duration: 500
        }).start()
      }else{
        Animated.timing(this.state.height, {
          toValue: 0,
          duration: 500
        }).start()
      };
    });
  }

	render() {
		return(
      <View style={styles.itemContainer}>
        <View style={styles.touchContainer}>
          <TouchableOpacity
            style={styles.item}
            onPress={
              () => this.handleInfoClick()
            }
            >
              <Text >{this.props.itemInfo.title}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.image}
            onPress={
              () => {}
            }
            >

          </TouchableOpacity>
        </View>
        <Animated.View style={ [styles.dropDown, {height: this.state.height}] }>
          
        </Animated.View>
      </View>
		);
	}
}

class Diagnosis extends React.Component {
  render() {
    return(
      <ScrollView style={{ flex: 1 }}>
          <View style={{ flex: 1 }}>
              {list.map((item, key) => {
								return (
                  <Item itemInfo={item} key={key}/>
                )
              })}
          </View>
      </ScrollView>
    );
  }
}

let list = [
  {
    title: 'hello',
  },
  {
    title: 'potato',
  },
  {
    title: 'go',
  }
];

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    paddingTop: 5,
    padding: 10,
    alignItems: 'center',
  },
  touchContainer: {
    width:  '100%',
		borderRadius: 10,
		borderWidth: 1,
		backgroundColor: '#bd632f',
		height: require('Dimensions').get('window').width/3,
		flexDirection: 'row',
  },
  item: {
    borderWidth:1,
		flex: 2,
		backgroundColor: 'orange',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  image: {
    flex: 1,
    height: '100%',
    backgroundColor: 'green',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  dropDown: {
    backgroundColor: 'green',
		width: '95%'
  }
});

export default Diagnosis;
