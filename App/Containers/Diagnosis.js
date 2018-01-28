import React from 'react';
import PropTypes from 'prop-types';
import {
	View,
  Text,
  ScrollView,
	Button
} from 'react-native';
import { connect } from 'react-redux';

import DiagnosisComponent from '../Components/Diagnosis';

class Diagnosis extends React.Component {
	componentDidMount() {
		// check if logged in
	}

	render() {
        return (
            <View style={{ flex:1, backgroundColor: '#273e47' }}>
                <View style={{ backgroundColor: '#d8c99b', height: '2%' }}>

                </View>
                <View style={{ backgroundColor: '#d8c99b', height: '8%' }}>
                    <Text style={{ textAlign: "center", fontSize: 40 }}>Diagnosis</Text>
                </View>
                <ScrollView style={{ flex: 4 }}>
                    <View style={{ flex: 1 }}>
                        {list.map((item, key) => {
                            return (
                                <DiagnosisComponent listInfo={ item } key={key}/>
                            );
                        })}
                    </View>
                </ScrollView>
            </View>
        )
	}
}

const list = [
    {
        //this is an object to be listed
        title: 'Uno',
    },
    {
        //this is also an object
        title: 'Dos',
    },
    {
        //also here
        title: 'Tres',
    }
];

Diagnosis.propTypes = {
	// props to pass into components
};

Diagnosis.navigationOptions = {
	header: null,
	// replace below with title
	title: 'Diagnosis'
};

const mapStateToProps = (state) => {
	return {
		// slices of needed state
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		// needed thunks go here
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Diagnosis);
