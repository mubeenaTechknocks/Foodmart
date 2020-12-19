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
  TextInput,
} from 'react-native';
import Header1 from '../components/header1';
import Swp1 from '../components/Swp1';
import SwipL from '../components/SwipL';
import Imgi from '../components/Imgi';
import Options2 from '../components/options2';
import Banner2 from '../components/Banner2';
import Sby from '../components/Sby';
import Drawer from '../components/drawer/drawer';
import LinearGradient from 'react-native-linear-gradient';
export default function HomeScreen({navigation}) {
  return (
    <>
      <StatusBar backgroundColor="#87BE56" barStyle="light-content" />
<SafeAreaView>
      <View>
      <LinearGradient
          colors={['#D0F04F', '#87BE56']}
          start={{x: 0, y: 1}}
          end={{x: 1, y: 1}}>
      <View style={{height:20}}/>
      </LinearGradient>
        <Header1 data={true} />
        <View>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            contentContainerStyle={{flexGrow:1}}
            >
              {/* <LinearGradient
          colors={['#D0F04F', '#87BE56']}
          start={{x: 0, y: 1}}
          end={{x: 1, y: 1}}>
      <View style={{height:15}}/>
      </LinearGradient>
        <Header1 data={true} /> */}
            <View>
              <View style={{backgroundColor: 'white'}}>
                <Swp1 data={simages} />
              </View>
              <View style={{backgroundColor: 'white'}}>
                <Imgi data={banner1} />
              </View>
              <View style={styles.swipL}>
                <SwipL data={simages2} />
              </View>

              <View style={styles.sb_head}>
                <Image
                  source={require('../../assets/homescreen/sb_head.jpeg')}
                  resizeMode="contain"
                  style={{flex: 1, width: '100%', height: undefined}}
                />
              </View>
              <View>
                <Sby data={sby1} />
              </View>

              <View style={styles.options}>
                <Options2 data={options1} />
                <Options2 data={options2} />
                <Options2 data={options3} />
              </View>

              <View style={{marginTop: 10}}>
                <Banner2 data={banner2} />
              </View>

              <View style={{marginVertical: 10}}>
                <Swp1 data={swpimgs3} />
              </View>
              <View style={{height: 385}}></View>
            </View>
          </ScrollView>
        </View>
      </View>
      </SafeAreaView>
    </>
  );
}

const simages = [
  {key: 11,
    swp: require('../../assets/homescreen/swp/swipe1.jpeg'),
    
    title: 'Fruits',
  },
  {
     key: 12,swp: require('../../assets/homescreen/swp/swipe2.jpeg'),
   
    title: 'Fruits',
  },
  {
    key: 13,swp: require('../../assets/homescreen/swp/swipe3.jpeg'),
    
    title: 'Fruits',
  },
];
const simages2 = [
  { key: 1,swp: require('../../assets/homescreen/swp/swipe2.3.jpeg')},
  { key: 2,swp: require('../../assets/homescreen/swp/swp2.1.jpeg')},
  { key: 3,swp: require('../../assets/homescreen/swp/swp2.2.jpeg')},
];
const swpimgs3 = [
  { key: 4,swp: require('../../assets/homescreen/swp/swipe3.1.jpg')},
  { key: 5,swp: require('../../assets/homescreen/swp/swipe3.2.jpeg')},
  { key: 6,swp: require('../../assets/homescreen/swp/swipe3.3.jpeg')},
];
const banner1 = [
  { key: 7,pic: require('../../assets/homescreen/banner/pic1.jpeg')},
];
const banner2 = [{ key: 8,pic: require('../../assets/homescreen/banner/banner2.jpg')}];
const sby1 = [
  { key:10,pic: require('../../assets/homescreen/option/one.jpeg'), datas: 'Fruits'},
  { key:9,pic: require('../../assets/homescreen/option/twoo.jpeg'), datas: 'Snacks'},
];
const options1 = [
  {key:21,
    image: require('../../assets/homescreen/option/one.jpg'),
    h: 140,
    w: 132,
    datas: 'Foodgrains',
  },
  {key:22,
    image: require('../../assets/homescreen/option/two.jpg'),
    h: 140,
    w: 132,
    datas: 'Bakery',
  },
  {key:23,
    image: require('../../assets/homescreen/option/three.jpg'),
    h: 140,
    w: 132,
    datas: 'Eggs',
  },
];
const options2 = [
  {key:24,
    image: require('../../assets/homescreen/option/five.jpg'),
    h: 140,
    w: 132,
    datas: 'Beauty',
  },
  {key:25,
    image: require('../../assets/homescreen/option/four.jpg'),
    h: 140,
    w: 132,
    datas: 'Kitchen',
  },
  {key:26,
    image: require('../../assets/homescreen/option/six.jpg'),
    h: 140,
    w: 132,
    datas: 'Beverages',
  },
];
const options3 = [
  {key:27,
    image: require('../../assets/homescreen/option/seven.jpg'),
    h: 140,
    w: 132,
    datas: 'Cleaning',
  },
  {key:28,
    image: require('../../assets/homescreen/option/eight.jpg'),
    h: 140,
    w: 132,
    datas: 'Gourmet',
  },
  {key:29,
    image: require('../../assets/homescreen/option/nine.jpg'),
    h: 140,
    w: 132,
    datas: 'Baby',
  },
];
const styles = StyleSheet.create({
  swipL: {height: 185, marginTop: 5, backgroundColor: '#E7F3A1'},
  options: {marginTop: 10},
  sb_head: {
    marginTop: 10,
    marginHorizontal: 10,
    height: 45,
    backgroundColor: '#E7F3A1',
  },
});
