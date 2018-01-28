import React from 'react';
import PropTypes from 'prop-types';
import {
	View,
	Text,
	Button
} from 'react-native';
import { connect } from 'react-redux';

import HomeComponent from '../Components/Home';

class Home extends React.Component {
	componentDidMount() {
		// check if logged in
	}

	render() {
        return (
            <View style={{ flex: 1, marginTop: 20, marginBottom: 20 }}>
                <HomeComponent navigation={this.props.navigation}  />
            </View>
        )
	}
}

Home.propTypes = {
	// props to pass into components
};

Home.navigationOptions = {
	header: null,
	// replace below with title
	title: 'Home'
};

const mapStateToProps = (state) => {
	return {
		// slices of needed state
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		// needed thunks go here
        // logup: (email, password) => dispatch(signUpThunkCreator(email, password))

	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Home);
