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
  {image: require('../../assets/fruits_veggies/swiper1.jpg')},
  {image: require('../../assets/fruits_veggies/swiper2.jpg')},
  {image: require('../../assets/fruits_veggies/swiper3.jpg')},
  {image: require('../../assets/fruits_veggies/swiper4.jpg')},
  {image: require('../../assets/fruits_veggies/swiper5.jpg')},
];

const options1 = [
  {
    image: require('../../assets/fruits_veggies/menu3.jpg'),
    h: 140,
    w: 132,
    datas: 'Vegetablesf',
  },
  {
    image: require('../../assets/fruits_veggies/menu2.jpg'),
    h: 140,
    w: 132,
    datas: 'Fresh_fruits',
  },
  {
    image: require('../../assets/fruits_veggies/menu1.jpg'),
    h: 140,
    w: 132,
    datas: 'Organics',
  },
];
const options2 = [
  {
    image: require('../../assets/fruits_veggies/menu4.jpg'),
    h: 140,
    w: 132,
    datas: 'Herbs',
  },
  {
    image: require('../../assets/fruits_veggies/menu5.jpg'),
    h: 140,
    w: 132,
    datas: 'Exotic',
  },
  {
    image: require('../../assets/fruits_veggies/menu6.jpg'),
    h: 140,
    w: 132,
    datas: 'Seasonal',
  },
];
const options3 = [
  {
    image: require('../../assets/fruits_veggies/menu7.jpg'),
    h: 140,
    w: 132,
    datas: 'Flower',
  },
  {
    image: require('../../assets/fruits_veggies/menu8.jpg'),
    h: 140,
    w: 132,
    datas: 'Sprouts',
  },
  {
    image: require('../../assets/fruits_veggies/menu9.jpg'),
    h: 140,
    w: 132,
    datas: 'Fruitall',
  },
];
const banner = [
  {image: require('../../assets/fruits_veggies/banner.jpg'), h: 180},
];
const head = [{image: require('../../assets/fruits_veggies/head.jpg')}];
const header = [
  {
    text: 'Fruits & Vegetables',
    color: '#689f39',
    name: 'arrow-left',
    ic: 'SimpleLineIcons',
  },
];
export default class Fruits extends React.Component {
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
  options: {backgroundColor: '#cbcccb'},
  banner: {
    backgroundColor: '#cbcccb',
    paddingBottom: 0,
    paddingTop: 10,
    elevation: 10,
  },
});
