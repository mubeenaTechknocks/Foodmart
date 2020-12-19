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
  {image: require('../../assets/beverage/swipe1.jpg')},
  {image: require('../../assets/beverage/swipe2.jpg')},
  {image: require('../../assets/beverage/swipe3.jpg')},
  {image: require('../../assets/beverage/swipe4.jpg')},
];

const options1 = [
  {
    image: require('../../assets/beverage/menu2.jpg'),
    h: 140,
    w: 132,
    data1: 'Beverage/Tea',
    datas: 'Display',
  },
  {
    image: require('../../assets/beverage/menu1.jpg'),
    h: 140,
    w: 132,
    data1: 'Beverage/Coffee',
    datas: 'Display',
  },
  {
    image: require('../../assets/beverage/menu4.jpg'),
    h: 140,
    w: 132,
    data1: 'Beverage/Health',
    datas: 'Display',
  },
];
const options2 = [
  {
    image: require('../../assets/beverage/menu3.jpg'),
    h: 140,
    w: 132,
    data1: 'Beverage/Juice',
    datas: 'Display',
  },
  {
    image: require('../../assets/beverage/menu6.jpg'),
    h: 140,
    w: 132,
    data1: 'Beverage/Energy',
    datas: 'Display',
  },
  {
    image: require('../../assets/beverage/menu5.jpg'),
    h: 140,
    w: 132,
    data1: 'Beverage/Water',
    datas: 'Display',
  },
];

const banner = [{image: require('../../assets/beverage/banner.jpg'), h: 200}];
const head = [{image: require('../../assets/beverage/head.png')}];
const head2 = [{image: require('../../assets/beverage/head2.jpg')}];

const header = [
  {
    text: 'Beverages',
    color: '#689f39',
    name: 'arrow-left',
    ic: 'SimpleLineIcons',
  },
];
export default class Beverages extends React.Component {
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
            </View>
            <View style={styles.head}>
              <Head data={head2} />
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
  },
});
