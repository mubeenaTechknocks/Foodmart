import React from 'react';
import {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  View,
  Image,
} from 'react-native';

export default class Views extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {this.props.data.map((data) => (
          <View style={styles.imgbg}>
            <Text style={styles.text}>{data.text}</Text>
          </View>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {height: 40, backgroundColor: '#cbcccb'},
  imgbg: {
    flex: 1,
    marginHorizontal: 9.5,
    marginTop: 0.5,
    paddingBottom: 0,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3,
    elevation: 4,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#e36265',
    fontSize: 15,
  },
});
