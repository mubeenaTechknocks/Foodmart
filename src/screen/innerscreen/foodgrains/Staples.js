import React, {Component} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  StatusBar,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Dimensions} from 'react-native';

const horizontalscroll = [
  {scrolltext: 'Organic dry Fruits'},
  {scrolltext: 'Organic Sugar,Jaggery'},
  {scrolltext: 'Organic Dals & Pulses'},
  {scrolltext: 'Organic Rice,Other Rice'},
  {scrolltext: 'Organic Masalas & Spices'},
  {scrolltext: 'Organic Edible Oil,Ghee'},
  {scrolltext: 'Organic Organic Flours'},
];

const displaylist = [
  {
    image: require('../../../../assets/images/food/staples/one.jpg'),
    brand: 'BB ROYAL',
    name: 'Organic-Sona Masoori Raw Rice',
    star: '4',
    screen: 'Foodgrains',
    rating: '8526 Rating',
    kg: '5kg',
    mrp: '470',
    actmrp: 'Rs 359',
    about:
      'Organic Sonamasuri Rice is famous for being a staple food in the Southern regions of India.',
    about2:
      'It is aromatic, lightweight and considered to be of the best quality. It is perfect for preparing dishes like sweet pongal, fried rice, biryani, or can also be used for daily cooking.',
  },
  {
    image: require('../../../../assets/images/food/staples/two.jpg'),
    brand: 'BB ROYAL',
    name: 'Organic -Brown Sugar',
    star: '4',
    screen: 'Foodgrains',
    rating: '5954 Rating',
    kg: '1 kg ',
    mrp: '119',
    actmrp: 'Rs 93',
    about:
      'Organic Brown sugar is a sucrose sugar product with a distinctive brown color due to the presence of Organic molasses. ',
    about2:
      ' It is either an unrefined or partially refined soft sugar consisting of sugar crystals with some residual molasses content, or it is produced by the addition of molasses to refined white sugar',
  },

  {
    image: require('../../../../assets/images/food/staples/four.jpg'),
    brand: 'BB ROYAL',
    name: 'Organic-Brown Sugar',
    star: '4.1',
    screen: 'Foodgrains',
    rating: '11248 Rating',
    kg: '1kg',
    mrp: '119',
    actmrp: 'Rs 93',
    about:
      'Organic Brown sugar is a sucrose sugar product with a distinctive brown color due to the presence of Organic molasses. ',
    about2:
      ' It is either an unrefined or partially refined soft sugar consisting of sugar crystals with some residual molasses content, or it is produced by the addition of molasses to refined white sugar',
  },

  {
    image: require('../../../../assets/images/food/staples/three.jpg'),
    brand: 'BB ROYAL',
    name: 'Organic-Almond/Badam',
    star: '4.1',
    screen: 'Foodgrains',
    rating: '6929 Rating',
    kg: '200g',
    mrp: '325',
    actmrp: 'Rs 279',
    about:
      'BB Royal Organic Almonds are of Indian Origin almonds and it’s sourced from the certified organic farms.',
    about2:
      'BB Royal Organic Almonds are of Indian Origin almonds and it’s sourced from the certified organic farms.',
  },
];

import Scroll from '../../../components/innerscreens/Scroll';

import BakerDisplay from '../../../components/innerscreens/BakerDisplay';
import Contentheader from '../../../components/innerscreens/Contentheader';

import {useNavigation} from '@react-navigation/native';
export default function (props) {
  const navigation = useNavigation();

  return <Organic_staples {...props} navigation={navigation} />;
}

class Organic_staples extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View>
        <Contentheader />
        <View style={styles.headertwo}>
          <Text>ORGANIC STAPLES</Text>
        </View>
        <View style={{width: '100%', backgroundColor: '#D7ECC5'}}>
          <ScrollView horizontal={true} style={styles.scrollview}>
            <Scroll data={horizontalscroll}></Scroll>
          </ScrollView>
        </View>

        <View style={styles.filter}>
          <TouchableOpacity onPress={() => navigation.navigate('Filter')}>
            <View style={styles.filtericon}>
              <Ionicons
                style={{fontSize: 25}}
                name="options-outline"></Ionicons>
              <Text>Filter</Text>
            </View>
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.displaybox}>
          <BakerDisplay data={displaylist}></BakerDisplay>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: '#689f39',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headertwo: {
    backgroundColor: 'white',
    height: 23,
    justifyContent: 'center',
    alignItems: 'center',
  },

  scrollview: {
    height: 50,
    width: Dimensions.get('window').width,
  },
  filter: {
    height: 40,
    width: Dimensions.get('window').width,
    backgroundColor: '#E7ECC4',
    paddingLeft: 326,
    justifyContent: 'center',
  },
  filtericon: {
    height: 35,
    width: 80,
    backgroundColor: 'white',
    justifyContent: 'center',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  displaybox: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    backgroundColor: '#D7ECC5',
  },
});
