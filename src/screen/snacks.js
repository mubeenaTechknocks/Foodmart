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
  {image: require('../../assets/snacks/swipe1.jpg')},
  {image: require('../../assets/snacks/swipe2.jpg')},
  {image: require('../../assets/snacks/swipe3.jpg')},
  {image: require('../../assets/snacks/swipe4.jpg')},
  {image: require('../../assets/snacks/swipe5.jpg')},
  {image: require('../../assets/snacks/swipe6.jpg')},
  {image: require('../../assets/snacks/swipe7.jpg')},
];

const options1 = [
  {image: require('../../assets/snacks/menu1.jpg'), h: 140, w: 132},
  {image: require('../../assets/snacks/menu2.jpg'), h: 140, w: 132},
  {image: require('../../assets/snacks/menu3.jpg'), h: 140, w: 132},
];
const options2 = [
  {image: require('../../assets/snacks/menu4.jpg'), h: 140, w: 132},
  {image: require('../../assets/snacks/menu5.jpg'), h: 140, w: 132},
  {image: require('../../assets/snacks/menu6.jpg'), h: 140, w: 132},
];
const options3 = [
  {image: require('../../assets/snacks/menu7.jpg'), h: 140, w: 132},
  {image: require('../../assets/snacks/menu8.jpg'), h: 140, w: 132},
  {image: require('../../assets/snacks/menu9.jpg'), h: 140, w: 132},
];
const banner = [{image: require('../../assets/snacks/banner.jpg'), h: 200}];
const head = [{image: require('../../assets/snacks/head.png')}];

const header = [{text: 'Snacks & Branded Food', color: '#689f39'}];
export default class Snacks extends React.Component {
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
  head: {backgroundColor: '#cbcccb'},

  options: {backgroundColor: '#cbcccb'},
  banner: {
    backgroundColor: '#cbcccb',
    paddingBottom: 0,
    paddingTop: 3,
    paddingTop: 10,
    elevation: 10,
  },
});
