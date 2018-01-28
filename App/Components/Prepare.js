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
import {
  KeyboardAwareScrollView
} from 'react-native-keyboard-aware-scroll-view';
import tcomb from 'tcomb-form-native';

const Form = tcomb.form.Form;

const Sport = tcomb.enums({
  Football: 'Football',
  Soccer: 'Soccer',
  Swimming: 'Swimming',
  Tennis: 'Tennis',
  Track: 'Track',
  'Cross Country': 'Cross Country',
  Boxing: 'Boxing',
});

const Duration = tcomb.enums({
  Day: "Day",
  Week: "Week",
  Month: "Month",
  Year: "Year",
});

const Survey = tcomb.struct({
  Sport: Sport,
  Number: tcomb.Number,
  Experience: Duration,
})

let options = {
    fields: {
      Number: {
        label: 'Duration',
        placeholders: '4',
      },
      Experience: {
        auto: 'none',
        placeholders: 'Month',
      }
    },
};

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
      <View style={{flex:1, backgroundColor:'transparent'}}>
        <View>
          <Image
            style={styles.background}
            source={require('../Src/_Image/Background.png')}
          />
        </View>
        <KeyboardAwareScrollView
        style={{ backgroundColor: 'transparent' }}
        resetScrollToCoords={{ x: 0, y: 0 }}
        contentContainerStyle={ styles.container }
        scrollEnabled={true}
        >
        <View style={{ flex: 4, justifyContent: 'center', backgroundColor: 'transparent' }}>
          <Form
            ref={(ref) => this._form = ref}
            type={Survey}
            options={options}
          />
        </View>
        <View style={ styles.buttonBox }>
          <TouchableOpacity
             style={styles.button}
             onPress={
               () => navigate('Steps')
             }
           >
             <Text style={styles.text}> Check </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
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
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  buttonBox: {
    flex: 1,
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#911',
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: '#000',
    width: 100,
    height: 50,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
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

export default Prepare;
