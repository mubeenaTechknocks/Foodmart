import React from 'react';
import {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  View,
  ScrollView,
} from 'react-native';
import Swiperi from '../components/swiper';
import Head from '../components/head';
import Options from '../components/options';
import Banner from '../components/banner';
import Header from '../components/header';
const images = [
  {image: require('../../assets/kitchen/swipe1.jpeg')},
  {image: require('../../assets/kitchen/swip2.jpeg')},
  {image: require('../../assets/kitchen/swipe3.jpeg')},
  {image: require('../../assets/kitchen/swipe4.jpeg')},
  {image: require('../../assets/kitchen/swipe5.jpeg')},
  {image: require('../../assets/kitchen/swipe6.jpeg')},
];

const options1 = [
  {image: require('../../assets/kitchen/menu3.jpg'), h: 140, w: 132},
  {image: require('../../assets/kitchen/menu2.jpg'), h: 140, w: 132},
  {image: require('../../assets/kitchen/menu1.jpg'), h: 140, w: 132},
];
const options2 = [
  {image: require('../../assets/kitchen/menu4.jpg'), h: 140, w: 132},
  {image: require('../../assets/kitchen/menu5.jpg'), h: 140, w: 132},
  {image: require('../../assets/kitchen/menu6.jpg'), h: 140, w: 132},
];
const options3 = [
  {image: require('../../assets/kitchen/menu7.jpg'), h: 140, w: 132},
  {image: require('../../assets/kitchen/menu8.jpg'), h: 140, w: 132},
  {image: require('../../assets/kitchen/menu9.jpg'), h: 140, w: 132},
];
const banner = [{image: require('../../assets/kitchen/banner2.jpg'), h: 140}];
const head = [{image: require('../../assets/kitchen/head.jpg')}];
const header = [
  {text: 'Kitchen Garden Pets', color: '#689f39', name: 'arrow-left'},
];
export default class Kitchen extends React.Component {
  render() {
    return (
      <>
        <StatusBar backgroundColor="#87BE56" barStyle="light-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            contentContainerStyle={{flexGrow: 1}}>
            <View>
              <Header data={header} />
            </View>
            <View style={styles.swiper}>
              <Swiperi data={images} />
            </View>
            <View style={styles.head}>
              <Head data={head} />
            </View>
            <View style={styles.options}>
              <Options data={options1} />
              <Options data={options2} />
              <Options data={options3} />
            </View>
            <View style={styles.banner}>
              <Banner data={banner} />
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  swiper: {backgroundColor: '#d0d0d0'},
  head: {backgroundColor: '#d0d0d0'},
  options: {backgroundColor: '#d0d0d0'},
  banner: {
    backgroundColor: '#d0d0d0',
    paddingBottom: 0,
    paddingTop: 10,
    elevation: 10,
  },
});
