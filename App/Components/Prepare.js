import React from 'react';
import PropTypes from 'prop-types';
import {
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
  Experience: Duration,
  Number: tcomb.Number,
})

let options = {
    fields: {

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
      <KeyboardAwareScrollView
      style={{ backgroundColor: '#ffffff' }}
      resetScrollToCoords={{ x: 0, y: 0 }}
      contentContainerStyle={ styles.container }
      scrollEnabled={true}
      >
      <View style={{ flex: 4, justifyContent: 'center' }}>
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
             () => Console.log("Submit")
           }
         >
           <Text style={styles.text}> Check </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
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
});

export default Prepare;
