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
import Views from '../components/View';
const images = [
  {image: require('../../assets/eggs/swipe1.jpg')},
  {image: require('../../assets/eggs/swipe2.jpg')},
  {image: require('../../assets/eggs/swipe3.jpg')},
  {image: require('../../assets/eggs/swipe4.jpg')},
  {image: require('../../assets/eggs/swipe5.jpg')},
  {image: require('../../assets/eggs/swipe6.jpg')},
  {image: require('../../assets/eggs/swipe7.jpg')},
  {image: require('../../assets/eggs/swipe8.jpg')},
];

const options1 = [
  {image: require('../../assets/eggs/menu1.jpg'), h: 170, w: 490},
  {image: require('../../assets/eggs/menu2.jpg'), h: 170, w: 490},
];
const options2 = [
  {image: require('../../assets/eggs/menu3.jpg'), h: 170, w: 490},
  {image: require('../../assets/eggs/menu4.jpg'), h: 170, w: 490},
];
const options3 = [
  {image: require('../../assets/eggs/menu5.jpg'), h: 175, w: 490},
  {image: require('../../assets/eggs/menu6.jpg'), h: 175, w: 490},
];
const banner = [{image: require('../../assets/eggs/banner.jpg'), h: 200}];
const head = [{image: require('../../assets/eggs/head.jpg')}];
const views = [{text: 'View All'}];
const header = [
  {
    text: 'Eggs, Meat & Fish',
    color: '#689f39',
    name: 'arrow-left',
    ic: 'SimpleLineIcons',
  },
];
export default class Eggs extends React.Component {
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
            <View>
              <Views data={views} />
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

  options: {backgroundColor: '#cbcccb', marginTop: -1},
  banner: {
    backgroundColor: '#cbcccb',
    paddingBottom: 0,
    paddingTop: 3,
    paddingTop: 10,
  },
});
