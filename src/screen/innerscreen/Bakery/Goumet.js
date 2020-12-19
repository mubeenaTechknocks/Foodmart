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
  {scrolltext: 'Croissants Bagels'},
  {scrolltext: 'Bangels & Banguette'},
  {scrolltext: 'Gourmet Bread'},
  {scrolltext: 'Pannini,Focaccia & Pita'},
];

const displaylist = [
  {
    image: require('../../../../assets/images/Bakery/gourmet/one.jpg'),
    brand: 'BRITANNIA',
    name: 'Bake Rusk (Toast)',
    star: '4',
    screen: 'Bakery',
    rating: '25364 Rating',
    kg: '200 g-Pouch',
    mrp: ' Rs 32.50',
    actmrp: 'Rs 30',
    about:
      'Britannia Bake Rusk Toast has been a traditional tea companion and is loved by many. ',
    about2:
      ' Britannia toastea premium bake rusk for long has been a part of every home, sharing those moments of joy. Believing in delivering fresh and healthy products.',
  },
  {
    image: require('../../../../assets/images/Bakery/gourmet/two.jpg'),
    brand: 'BAULI',
    name: 'Moonfils Choco Cream',
    star: '3.9',
    screen: 'Bakery',
    rating: '69541 Rating',
    kg: '45 g - Pouch',
    mrp: '16.50',
    actmrp: 'Rs 15',
    about:
      'Oven baked and made with naturally leavened dough, these Moonfils are filled with rich cocoa cream. ',
    about2:
      'This soft & delicious Italian puff roll stays fresh for much longer than most breads or cakes. ',
  },

  {
    image: require('../../../../assets/images/Bakery/gourmet/four.jpg'),
    brand: 'CADBURY',
    name: 'Moonfils Orange',
    star: '3.9',
    screen: 'Bakery',
    rating: '36245 Rating',
    kg: '45 g - Pouch',
    mrp: '16.50',
    actmrp: 'Rs 15',
    about:
      'Oven baked and made with naturally leavened dough, these Moonfils are filled with rich cocoa cream. ',
    about2:
      'This soft & delicious Italian puff roll stays fresh for much longer than most breads or cakes. ',
  },

  {
    image: require('../../../../assets/images/Bakery/gourmet/three.jpg'),
    brand: ' MILK MA',
    name: 'Critters - Whole Wheat',
    star: '4.1',
    rating: '6254 Rating',
    kg: '150 g',
    screen: 'Bakery',
    mrp: '41.50',
    actmrp: 'Rs 40',
    about:
      'Britannia Bake Rusk Toast has been a traditional tea companion and is loved by many. ',
    about2:
      ' Britannia toastea premium bake rusk for long has been a part of every home, sharing those moments of joy. Believing in delivering fresh and healthy products.',
  },

  {
    image: require('../../../../assets/images/Bakery/gourmet/one.jpg'),
    brand: 'BRITANNIA',
    name: ' Treat Croissant Vanilla Creme',
    star: '4.2',
    screen: 'Bakery',
    rating: '62541 Rating',
    kg: '45 g',
    mrp: '16.75',
    actmrp: 'Rs 15',
    about:
      'Britannia Treat Croissant Vanilla CrÃ¨me Roll is a delightful combination of smooth and creamy vanilla cream with a fluffy and spongy puff. ',
    about2:
      ' Every bite of these delicious, vanilla croissant entices you for more and more. ',
  },
  {
    image: require('../../../../assets/images/Bakery/gourmet/one.jpg'),
    brand: 'BAULI',
    name: 'Moonfils Choco Cream',
    star: '3.9',
    screen: 'Bakery',
    rating: '69541 Rating',
    kg: '45 g - Pouch',
    mrp: '16.50',
    actmrp: 'Rs 15',
    about:
      'Oven baked and made with naturally leavened dough, these Moonfils are filled with rich cocoa cream. ',
    about2:
      'This soft & delicious Italian puff roll stays fresh for much longer than most breads or cakes. ',
  },
];

import Scroll from '../../../components/innerscreens/Scroll';

import BakerDisplay from '../../../components/innerscreens/BakerDisplay';
import Contentheader from '../../../components/innerscreens/Contentheader';

import {useNavigation} from '@react-navigation/native';
export default function (props) {
  const navigation = useNavigation();

  return <Goumet {...props} navigation={navigation} />;
}

class Goumet extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View>
        <Contentheader />
        <View style={styles.headertwo}>
          <Text>GOURMET BREADS</Text>
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
