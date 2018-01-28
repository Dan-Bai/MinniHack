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
	UIManager
} from 'react-native';

class Diagnosis extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			show: false,
			showImage: false,
			h: new Animated.Value(0)
		}
		if (Platform.OS === 'android') {
			UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
		}
	}

	renderSeparator = () => {
		<View style={styles.seperator} />
	}

	handleImageClick(){
		this.setState({
			showImage: !this.state.showImage
		});
	}

	handleInfoClick(){
		this.setState({
			show: !this.state.show
		}, () => {
			if(this.state.show){
				Animated.timing(this.state.h, {
					toValue: require('Dimensions').get('window').width/2,
					duration: 500
				}).start()
			}else{
				Animated.timing(this.state.h, {
					toValue: 0,
					duration: 500
				}).start()
			};
		});
	}

	render() {
		if(this.state.showImage){
			return (
			<View style={{ flex: 1 }}>
				{/* image stuff happens here
        handle later */}
			</View>
			);
		}
		return(
  		<View style={{ flex: 1, paddingTop: 5, padding: 10, alignItems: 'center' }}>
  			<View style={ styles.smallWindow }>
  				<TouchableOpacity style={ styles.listInfo } onPress={ ()=>this.handleInfoClick() }>
  					<View style={ styles.window }>
  						{/* <Text style={ styles.itle }>{this.props.listInfo.title}</Text> */}
  					</View>
  				</TouchableOpacity>
  				<TouchableOpacity style={[ styles.mapInfo, { zIndex:1} ]} onPress={ ()=>this.handleImageClick() }>
  					<View style={{flex: 1, backgroundColor: 'gray'}}></View>
  				</TouchableOpacity>
  			</View>
  			<Animated.View style={ [styles.dropDown, {height: this.state.h}] }>
  				<Text style={{overflow: 'hidden'}}>Description</Text>
  			</Animated.View>
  		</View>
		);
	}
}

const styles = StyleSheet.create({
	window: {
		backgroundColor: '#bd632f',
		zIndex: 1,
		flex: 1
	},
	returnButton: {
		alignItems: 'center',
		backgroundColor: '#DDDDDD',
		zIndex: 1,
		padding: 10
	},
	dropDown:{
		flexDirection: 'row',
		backgroundColor: '#d8973c',
		width: '95%'
	},
	smallWindow: {
		width:  '100%',
		borderRadius: 10,
		borderWidth: 1,
		backgroundColor: '#bd632f',
		height: require('Dimensions').get('window').width/3,
		flexDirection: 'row'
	},
	title: {
		textAlign: "center",
		fontSize: 20
	},
	eventInfo: {
		borderWidth:1,
		zIndex: 0,
		flex: 2,
		overflow: 'hidden',
		borderWidth: 0,
		borderRadius: 10,
		backgroundColor: '#bd632f'
	},
	mapInfo: {
		flex: 1,
		borderWidth: 0,
		borderBottomRightRadius: 10,
		borderTopRightRadius: 10,
		overflow: 'hidden',
		backgroundColor: '#bd632f'
	},
	text: {
		textAlign: "center",
		fontSize: 12
	},
	map: {
		position: 'relative',
		overflow: 'hidden',
		zIndex: 1,
		flex: 1, flexDirection: 'row'
	}
});

export default Diagnosis;
