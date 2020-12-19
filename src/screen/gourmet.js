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
  {image: require('../../assets/gourmet/swipe1.jpg')},
  {image: require('../../assets/gourmet/swipe2.jpg')},
  {image: require('../../assets/gourmet/swipe3.jpg')},
  {image: require('../../assets/gourmet/swipe4.jpg')},
  {image: require('../../assets/gourmet/swipe5.jpg')},
  {image: require('../../assets/gourmet/swipe6.jpg')},
  {image: require('../../assets/gourmet/swipe7.jpg')},
  {image: require('../../assets/gourmet/swipe8.jpg')},
];

const options1 = [
  {image: require('../../assets/gourmet/menu1.jpg'), h: 170, w: 490},
  {image: require('../../assets/gourmet/menu2.jpg'), h: 170, w: 490},
];
const options2 = [
  {image: require('../../assets/gourmet/menu3.jpg'), h: 170, w: 490},
  {image: require('../../assets/gourmet/menu4.jpg'), h: 170, w: 490},
];
const options3 = [
  {image: require('../../assets/gourmet/menu5.jpg'), h: 175, w: 490},
  {image: require('../../assets/gourmet/menu6.jpg'), h: 175, w: 490},
];
const options4 = [
  {image: require('../../assets/gourmet/menu7.jpg'), h: 175, w: 490},
  {image: require('../../assets/gourmet/menu8.jpg'), h: 175, w: 490},
];
const banner = [{image: require('../../assets/gourmet/banner1.jpg'), h: 200}];
const banner2 = [{image: require('../../assets/gourmet/banner2.jpg'), h: 200}];
const head = [{image: require('../../assets/gourmet/head.jpg')}];
const views = [{text: 'View All'}];
const header = [
  {
    text: 'Gourmet & World Food',
    color: '#689f39',
    name: 'arrow-left',
    ic: 'SimpleLineIcons',
  },
];
export default class Gourmet extends React.Component {
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
              <Options data={options4} />
            </View>

            <View style={styles.banner}>
              <Banner data={banner} />
              <Banner data={banner2} />
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
  options: {backgroundColor: '#cbcccb', marginTop: -5},
  banner: {
    backgroundColor: '#cbcccb',
    paddingBottom: 0,
    paddingTop: 3,
    paddingTop: 10,
  },
});
