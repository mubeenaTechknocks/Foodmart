import React from 'react';
import {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  View,
  ScrollView,
  Image,
} from 'react-native';
import Swiperi from '../components/swiper';
import Head from '../components/head';
import Options from '../components/options';
import Banner from '../components/banner';

const images = [
  {image: require('../../assets/beauty/swipe1.jpg')},
  {image: require('../../assets/beauty/swipe2.jpg')},
  {image: require('../../assets/beauty/swipe3.jpg')},
  {image: require('../../assets/beauty/swipe4.jpg')},
  {image: require('../../assets/beauty/swipe5.jpg')},
  {image: require('../../assets/beauty/swipe6.jpg')},
  {image: require('../../assets/beauty/swipe7.jpg')},
  {image: require('../../assets/beauty/swipe8.jpg')},
];

const options1 = [
  {image: require('../../assets/beauty/menu3.jpg'), h: 70, w: 132},
  {image: require('../../assets/beauty/menu2.jpg'), h: 70, w: 132},
  {image: require('../../assets/beauty/menu1.jpg'), h: 70, w: 132},
];
const options2 = [
  {image: require('../../assets/beauty/menu4.jpg'), h: 70, w: 132},
  {image: require('../../assets/beauty/menu5.jpg'), h: 70, w: 132},
  {image: require('../../assets/beauty/menu6.jpg'), h: 70, w: 132},
];
const options3 = [
  {image: require('../../assets/beauty/menu7.jpg'), h: 70, w: 132},
  {image: require('../../assets/beauty/mneu8.jpg'), h: 70, w: 132},
  {image: require('../../assets/beauty/menu9.jpg'), h: 70, w: 132},
];
const banner = [
  {image: require('../../assets/beauty/banner1.jpg'), h: 180},
  {image: require('../../assets/beauty/banner2.jpg'), h: 180},
];
const head = [{image: require('../../assets/beauty/head.jpg')}];
const head2 = [{image: require('../../assets/beauty/head2.jpg')}];
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

export default class Beauty extends React.Component {
  render() {
    return (
      <>
        <StatusBar backgroundColor="black" barStyle="light-content" />

        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            contentContainerStyle={{flexGrow: 1}}>
            <View style={styles.container1}>
              <View
                style={{
                  height: 60,

                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingHorizontal: 20,
                }}>
                <SimpleLineIcons name="arrow-left" size={16} color="#da6264" />
                <View style={styles.textbox1}>
                  <Image
                    style={styles.img1}
                    resizeMode="contain"
                    source={require('../../assets/beauty/text.jpg')}
                  />
                </View>
              </View>
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
  container1: {height: 55, backgroundColor: '#121212'},

  textbox1: {
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
  },
  img1: {height: 25, width: '100%'},
});
