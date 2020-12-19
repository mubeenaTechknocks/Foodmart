import React, {Component} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  StatusBar,
  ScrollView,
} from 'react-native';
import {Dimensions} from 'react-native';

export default class Scroll extends Component {
  render() {
    return (
      <View style={{flexDirection: 'row', backgroundColor: '#D7ECC5'}}>
        {this.props.data.map((data) => (
          <View style={styles.contentview}>
            <Text style={{fontSize: 12}}>{data.scrolltext}</Text>
          </View>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contentview: {
    height: 40,
    width: 120,
    backgroundColor: 'white',
    marginLeft: 3,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 4,
    marginTop: 5,
  },
});
