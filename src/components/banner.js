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

export default class Banner extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {this.props.data.map((data) => (
          <View style={styles.imgbg}>
            <Image
              resizeMode="cover"
              style={{
                flex: 1,
                width: '100%',
                height: data.h,
                borderRadius: 2,
              }}
              source={data.image}
            />
          </View>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {elevation: 20},
  imgbg: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 0,
    borderRadius: 2,
    marginBottom: 10,
    elevation: 3,
  },
});
