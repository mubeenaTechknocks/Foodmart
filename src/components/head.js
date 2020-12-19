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

export default class Head extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {this.props.data.map((data) => (
          <View style={styles.imgbg}>
            <Image resizeMode="center" style={styles.img} source={data.image} />
          </View>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {height: 55, backgroundColor: '#cbcccb', marginBottom: -1},
  imgbg: {
    flex: 1,
    marginHorizontal: 9.5,
    marginTop: 8,
    marginBottom: -0.3,
    paddingBottom: 0,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    elevation: 3,
  },
  img: {
    flex: 1,

    width: '100%',
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
  },
});
