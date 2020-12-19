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
import Swiper from 'react-native-swiper';

export default class Swiperi extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Swiper showsPagination={false} autoplay={true} style={styles.swipe}>
          {this.props.data.map((data) => (
            <View style={styles.imgbg}>
              <Image
                resizeMode="cover"
                style={styles.img}
                source={data.image}
              />
            </View>
          ))}
        </Swiper>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {height: 200, borderBottomColor: '#d5d5d5', borderBottomWidth: 1},
  imgbg: {flex: 1, backgroundColor: 'black', marginTop: 5, elevation: 2},
  img: {
    flex: 1,
    height: undefined,
    width: '100%',
    elevation: 2,
  },
  swipe: {elevation: 3},
});
