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
  {image: require('../../assets/foodgrains/swipe1.jpg')},
  {image: require('../../assets/foodgrains/swipe2.jpg')},
  {image: require('../../assets/foodgrains/swipe3.jpg')},
  {image: require('../../assets/foodgrains/swipe4.jpg')},
  {image: require('../../assets/foodgrains/swipe5.jpg')},
  {image: require('../../assets/foodgrains/swipe6.jpg')},
  {image: require('../../assets/foodgrains/swipe7.jpg')},
  {image: require('../../assets/foodgrains/swipe8.jpg')},
];

const options1 = [
  {
    image: require('../../assets/foodgrains/menu1.jpg'),
    h: 140,
    w: 132,
    datas: 'Atta',
  },
  {
    image: require('../../assets/foodgrains/menu2.jpg'),
    h: 140,
    w: 132,
    datas: 'Rice',
  },
  {
    image: require('../../assets/foodgrains/menu3.jpg'),
    h: 140,
    w: 132,
    datas: 'Oil',
  },
];
const options2 = [
  {
    image: require('../../assets/foodgrains/menu4.jpg'),
    h: 140,
    w: 132,
    datas: 'Dals',
  },
  {
    image: require('../../assets/foodgrains/menu5.jpg'),
    h: 140,
    w: 132,
    datas: 'Organic_staples',
  },
  {
    image: require('../../assets/foodgrains/menu6.jpg'),
    h: 140,
    w: 132,
    datas: 'Spices',
  },
];
const options3 = [
  {
    image: require('../../assets/foodgrains/menu7.jpg'),
    h: 140,
    w: 132,
    datas: 'Sugar',
  },
  {
    image: require('../../assets/foodgrains/menu8.jpg'),
    h: 140,
    w: 132,
    datas: 'Dry_Fruits',
  },
  {
    image: require('../../assets/foodgrains/menu9.jpg'),
    h: 140,
    w: 132,
    datas: 'Allfoodgrains',
  },
];
const banner = [{image: require('../../assets/foodgrains/banner.jpg'), h: 270}];
const head = [{image: require('../../assets/foodgrains/head.jpg')}];

const header = [
  {
    text: 'Foodgrains, Oil & Masala',
    color: '#689f39',
    name: 'arrow-left',
    ic: 'SimpleLineIcons',
  },
];
export default class Foodgrains extends React.Component {
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
    paddingTop: 3,
    paddingTop: 10,
    elevation: 10,
  },
});
