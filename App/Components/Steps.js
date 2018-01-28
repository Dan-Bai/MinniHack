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
		}
	}

	renderSeparator = () => {
		<View style={styles.seperator} />
	}

	render() {
		return(
      <View style={styles.itemContainer}>
        <View style={styles.touchContainer}>
          <View style={styles.item}>
						<Text style={styles.text}>{this.props.itemInfo.title}</Text>
          </View>
          <View style={styles.image}>

          </View>
        </View>
      </View>
		);
	}
}

class Steps extends React.Component {
  render() {
    return(
			<View style={{flex:1, backgroundColor:'transparent'}}>
        <View>
          <Image
            style={styles.background}
            source={require('../Src/_Image/Background.png')}
          />
        </View>
        <ScrollView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                {list.map((item, key) => {
  								return (
                    <Item itemInfo={item} key={key}/>
                  )
                })}
            </View>
        </ScrollView>
      </View>
    );
  }
}

let list = [
  {
    title: 'Step one',
  },
  {
    title: 'Step two',
  },
  {
    title: 'Step three',
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
		backgroundColor: '#72A0C1',
		height: require('Dimensions').get('window').width/3,
		flexDirection: 'row',
  },
  item: {
    borderWidth:1,
		flex: 2,
		backgroundColor: '#334893',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
		alignItems: 'stretch',
		justifyContent: 'center',
  },
  image: {
    flex: 1,
    height: '100%',
    backgroundColor: '#556bba',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  dropDown: {
    backgroundColor: '#CCCCFF',
		width: '95%',
		overflow:"hidden",
  },
	background: {
    top:0,
    left:0,
    height:require('Dimensions').get('window').height,
    width:require('Dimensions').get('window').width,
    position:'absolute',
    resizeMode:'repeat',
  },
	text: {
		fontSize: 20,
		color: 'white',
		fontWeight: 'bold',
	}

});

export default Steps;
