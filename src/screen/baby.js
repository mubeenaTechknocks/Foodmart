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
  {image: require('../../assets/baby/swipe1.jpg')},
  {image: require('../../assets/baby/swipe2.jpg')},
];

const options1 = [
  {image: require('../../assets/baby/menu1.jpg'), h: 170, w: 490},
  {image: require('../../assets/baby/menu2.jpg'), h: 170, w: 490},
];
const options2 = [
  {image: require('../../assets/baby/menu3.jpg'), h: 170, w: 490},
  {image: require('../../assets/baby/menu4.jpg'), h: 170, w: 490},
];
const options3 = [
  {image: require('../../assets/baby/menu5.jpg'), h: 175, w: 490},
  {image: require('../../assets/baby/menu6.jpg'), h: 175, w: 490},
];
const banner1 = [{image: require('../../assets/baby/banner1.jpg'), h: 200}];
const banner2 = [{image: require('../../assets/baby/banner2.jpg'), h: 200}];
const head = [{image: require('../../assets/baby/head.jpg')}];
const head2 = [{image: require('../../assets/baby/head2.jpg')}];
const head3 = [{image: require('../../assets/baby/head3.jpg')}];

const header = [
  {
    text: 'Baby Care',
    color: '#689f39',
    name: 'arrow-left',
    ic: 'SimpleLineIcons',
  },
];
export default class Baby extends React.Component {
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
            <View style={styles.head}>
              <Head data={head2} />
            </View>
            <View style={styles.head}>
              <Head data={head3} />
            </View>

            <View style={styles.banner}>
              <Banner data={banner1} />
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

  options: {backgroundColor: '#cbcccb', marginTop: -1},
  banner: {
    backgroundColor: '#cbcccb',
    paddingBottom: 0,
    paddingTop: 3,
    paddingTop: 10,
  },
});
