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

	// this.handleImage.bind(this)
	handleImage(){
		switch(this.props.itemInfo.Severity){
			case 'High': return('../Src/_Image/Human.jpg');
			case 'Medium': return('../Src/_Image/Human.jpg');
			case 'Low': return('../Src/_Image/Human.jpg');
		}
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
              <Text style={styles.textBig} >{this.props.itemInfo.title}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.image}
            onPress={
              () => {}
            }
            >

						{this.props.itemInfo.Severity == 'Low' ?
							<Image style={styles.image} source={require('../Src/_Image/mildTato.png')}/> :
							<Image style={styles.image} source={require('../Src/_Image/medTato.png')}/>
						}




					</TouchableOpacity>
        </View>
        <Animated.View style={ [styles.dropDown, {height: this.state.height}] }>

				<Text style={styles.textSmall}> {this.props.itemInfo.details} </Text>

        </Animated.View>
      </View>
		);
	}
}

class Diagnosis extends React.Component {
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
	    title: 'Patellar tendinitis (knee pain)',
			details: 'Severity: Low\n\n' +
			'Symptoms: Knee Pain\n\n' +
			'Description: Pain in the knees can be a signal that over-use has weakened the quadriceps. This can be alleviated through physical therapy.\n\n' +
			'Source: Sports MED',
			Severity: 'Low',
		},
	  {
	    title: 'Knee Injury',
			details: 'Severity: Medium\n\n' +
			'Symptoms: Knee Pain\n\n' +
			'Description: Common knee injuries are tears to the ACL or PCL. If not treated appropriately, these can drastically reduce a players carrer. \n\n' +
			'Source: Sports MED',
			Severity: 'Medium',
	  },
	  {
	    title: 'Sprains',
			details: 'Severity: Low\n\n' +
			'Symptoms: Pain\n\n' +
			'Description: Blood building up in the area around the brain, creating pressure on the skull.\n\n' +
			'Source: Wikipedia',
			Severity: 'Low',
	  },
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

	textBig: {
		//marginTop: '13.5%',
		padding: 5,
		color: '#fff',
		fontWeight: 'bold',
		fontSize: 20,
		overflow: 'hidden',
		alignItems:'stretch'

	},

	textSmall: {
		padding: 5,
		//fontWeight: 'bold',
		justifyContent: 'center',
    fontSize: 18,
		overflow: 'hidden',
	},

	background: {
    top:0,
    left:0,
    height:require('Dimensions').get('window').height,
    width:require('Dimensions').get('window').width,
    position:'absolute',
    resizeMode:'repeat',
  }

});

export default Diagnosis;
