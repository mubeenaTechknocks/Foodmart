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
import Options2 from '../components/options2';
import Banner from '../components/banner';
import Header from '../components/header';
const images = [
  {image: require('../../assets/bakery/swipe1.jpg')},
  {image: require('../../assets/bakery/swipe2.jpg')},
  {image: require('../../assets/bakery/swipe4.jpg')},
  {image: require('../../assets/bakery/swipe5.jpg')},
  {image: require('../../assets/bakery/swipe3.jpg')},
  {image: require('../../assets/bakery/swipe6.jpg')},
];

const options1 = [
  {
    image: require('../../assets/bakery/menu1.jpg'),
    h: 140,
    w: 132,
    data1: 'Foodgrains/Milk',
    datas: 'Milk',
  },
  {
    image: require('../../assets/bakery/menu2.jpg'),
    h: 140,
    w: 132,
    data1: 'Foodgrains/Curd',
    datas: 'Curd',
  },
  {
    image: require('../../assets/bakery/menu3.jpg'),
    h: 140,
    w: 132,
    data1: 'Foodgrains/Paneer',
    datas: 'Paneer',
  },
];
const options2 = [
  {
    image: require('../../assets/bakery/menu4.jpg'),
    h: 140,
    w: 132,
    data1: 'Foodgrains/Cheese',
    datas: 'Cheese',
  },
  {
    image: require('../../assets/bakery/menu5.jpg'),
    h: 140,
    w: 132,
    data1: 'Foodgrains/Cakes',
    datas: 'Cake',
  },
  {
    image: require('../../assets/bakery/menu6.png'),
    h: 140,
    w: 132,
    data1: 'Foodgrains/Bread',
    datas: 'Bread',
  },
];
const options3 = [
  {
    image: require('../../assets/bakery/menu7.jpg'),
    h: 140,
    w: 132,
    data1: 'Foodgrains/Cookies',
    datas: 'Cookie',
  },
  {
    image: require('../../assets/bakery/menu8.jpg'),
    h: 140,
    w: 132,
    data1: 'Foodgrains/Gourmet',
    datas: 'Goumet',
  },
  {
    image: require('../../assets/bakery/menu9.jpg'),
    h: 140,
    w: 132,
    data1: 'Foodgrains/Bakery',
    datas: 'Bsnack',
  },
];
const banner = [{image: require('../../assets/bakery/banner1.jpg'), h: 120}];
const head = [{image: require('../../assets/bakery/head.jpg')}];

const header = [
  {
    text: 'Bakery, Cakes & Diarys',
    color: '#689f39',
    name: 'arrow-left',
  },
];
export default class Bakery extends React.Component {
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
              <Options2 data={options1} />
              <Options2 data={options2} />
              <Options2 data={options3} />
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
