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

const displaylist = [
  {
    image: require('../../../../assets/images/Bakery/milk/one.jpg'),
    brand: 'NANDINI GOODLIFE',
    name: 'Toned Milk',
    star: '4',
    rating: '7095 Ratings',
    kg: '500 ml-Pouch',
    mrp: 'Rs 25',
    screen: 'Bakery',
    actmrp: 'Rs 23.50',
    about:
      'Goodlife Smart Homogenised Double Toned Milk UHT processed milk with Min 1.5% fat and Min 9.0% SNF fortified with vitamins A and D. ',
    about2:
      'Besides its regular use, milk can be used for so many other things.',
  },
  {
    image: require('../../../../assets/images/Bakery/milk/two.jpg'),
    brand: 'NANDINI GOODLIFE',
    name: 'Toned Milk',
    screen: 'Bakery',
    star: '4.1',
    rating: '3071 Ratings',
    kg: '1 L - Carton',
    mrp: 'Rs 53',
    actmrp: 'Rs 50.35',
    about:
      'Goodlife Smart Homogenised Double Toned Milk UHT processed milk with Min 1.5% fat and Min 9.0% SNF fortified with vitamins A and D. ',
    about2:
      'Besides its regular use, milk can be used for so many other things.',
  },

  {
    image: require('../../../../assets/images/Bakery/milk/three.jpg'),
    brand: 'AMUL TAAZA',
    name: 'Toned Milk',
    screen: 'Bakery',
    star: '4.1',
    rating: '3634 Ratings',
    kg: '1 l- Carton',
    mrp: 'Rs 72',
    actmrp: 'Rs 64',
    about:
      'Goodlife Smart Homogenised Double Toned Milk UHT processed milk with Min 1.5% fat and Min 9.0% SNF fortified with vitamins A and D. ',
    about2:
      'Besides its regular use, milk can be used for so many other things.',
  },

  {
    image: require('../../../../assets/images/Bakery/milk/four.jpg'),
    brand: 'NANDINI GOODLIFE',
    name: 'Toned Milk',
    star: '3.8',
    screen: 'Bakery',
    rating: '1017 Ratings',
    kg: '500 ml-Pack of 20',
    mrp: 'Rs 550  ',
    actmrp: 'Rs 500',
    about:
      'Goodlife Smart Homogenised Double Toned Milk UHT processed milk with Min 1.5% fat and Min 9.0% SNF fortified with vitamins A and D. ',
    about2:
      'Besides its regular use, milk can be used for so many other things.',
  },
  {
    image: require('../../../../assets/images/Bakery/milk/five.jpg'),
    brand: 'NANDINI GOODLIFE',
    name: 'Skimmed Milk',
    star: '3.8',
    screen: 'Bakery',
    rating: '1385 Ratings',
    kg: '500 ml-Packof 20',
    mrp: 'Rs  500 ',
    actmrp: 'Rs 480',
    about:
      'Goodlife Smart Homogenised Double Toned Milk UHT processed milk with Min 1.5% fat and Min 9.0% SNF fortified with vitamins A and D. ',
    about2:
      'Besides its regular use, milk can be used for so many other things.',
  },
  {
    image: require('../../../../assets/images/Bakery/milk/four.jpg'),
    brand: 'NANDINI GOODLIFE',
    name: 'Toned Milk',
    star: '3.8',
    screen: 'Bakery',
    rating: '1017 Ratings',
    kg: '500 ml-Pack of 20',
    mrp: 'Rs  520 ',
    actmrp: 'Rs 500',
    about:
      'Goodlife Smart Homogenised Double Toned Milk UHT processed milk with Min 1.5% fat and Min 9.0% SNF fortified with vitamins A and D. ',
    about2:
      'Besides its regular use, milk can be used for so many other things.',
  },
  {
    image: require('../../../../assets/images/Bakery/milk/five.jpg'),
    brand: 'NANDINI GOODLIFE',
    name: 'Skimmed Milk',
    star: '3.8',
    screen: 'Bakery',
    rating: '1385 Ratings',
    kg: '500 ml-Packof 20',
    mrp: 'Rs   500',
    actmrp: 'Rs 480',
    about:
      'Goodlife Smart Homogenised Double Toned Milk UHT processed milk with Min 1.5% fat and Min 9.0% SNF fortified with vitamins A and D. ',
    about2:
      'Besides its regular use, milk can be used for so many other things.',
  },
];

import Scroll from '../../../components/innerscreens/Scroll';

import BakerDisplay from '../../../components/innerscreens/BakerDisplay';
import Contentheader from '../../../components/innerscreens/Contentheader';

import {useNavigation} from '@react-navigation/native';
export default function (props) {
  const navigation = useNavigation();

  return <Milk {...props} navigation={navigation} />;
}

class Milk extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View>
        <Contentheader />
        <View style={styles.headertwo}>
          <Text>MILK AND MILK POWDER</Text>
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
    paddingLeft: 270,
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
