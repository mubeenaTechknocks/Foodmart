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
  {scrolltext: 'Sugar & Jaggery'},
  {scrolltext: 'Salts'},
  {scrolltext: 'Sugarfree Sweeteners'},
];

const displaylist = [
  {
    image: require('../../../../assets/images/food/salt/one.jpg'),
    brand: 'BB ROYAL',
    name: 'Sugar',
    star: '4.1',
    rating: '13292 Rating',
    kg: '2 kg',
    mrp: '120',
    screen: 'Foodgrains',
    actmrp: 'Rs 95',
    about:
      'Sugar is finished from organic sugar cane, the grains are light cream colored. It is an improved option as opposed to refined sugar that is pure white in color.',
    about2:
      "It is an immense supply of energy and has necessary minerals with no harsh chemicals or additives. Sugar is sucrose that becomes glucose. Sugar's glycolic acid can be very supportive in retaining the wellbeing and look of your skin.",
  },
  {
    image: require('../../../../assets/images/food/salt/two.jpg'),
    brand: 'BB POPULAR',
    name: 'Sugar',
    star: '4',
    rating: '43184 Rating',
    kg: '5kg',
    mrp: '275',
    screen: 'Foodgrains',
    actmrp: 'Rs 207',
    about:
      'Sugar is finished from organic sugar cane, the grains are light cream colored. It is an improved option as opposed to refined sugar that is pure white in color.',
    about2:
      "It is an immense supply of energy and has necessary minerals with no harsh chemicals or additives. Sugar is sucrose that becomes glucose. Sugar's glycolic acid can be very supportive in retaining the wellbeing and look of your skin.",
  },

  {
    image: require('../../../../assets/images/food/salt/three.jpg'),
    brand: 'TATA SALT',
    name: 'Iodized',
    star: '4.3',
    rating: '33571 Rating',
    kg: '1 kg-Pouch',
    mrp: '20',
    screen: 'Foodgrains',
    actmrp: 'Rs 19.80',
    about:
      'Tata and quality are synonymous in the world today. Tata Iodized Salt has been a staple in kitchens for generations now. This salt was first manufactured by Tata in a vacuum sealed pack, around the year 1983. ',
    about2:
      'Salt is one of the most important ingredients we use in food and cooking. It is a good method for food fortification and it also adds taste and flavour to any dish.',
  },

  {
    image: require('../../../../assets/images/food/salt/four.jpg'),
    brand: 'BB COMBO',
    name: 'BB popular Sugar 5kg+ BB Royal Honey 500 gm',
    star: '4.1',
    rating: '1856 Rating',
    kg: 'Combo -2Ithems',
    mrp: '471',
    screen: 'Foodgrains',
    actmrp: 'Rs 356',
    about:
      'bb Royal Honey is 100% pure and natural multi-floral honey, sourced from theƒ€š‚ pine forests atƒ€š‚ the Himalayan foothills. Filled with natural goodness, this export quality premium honey is a healthy substitute to sugar.',
    about2:
      'Enjoy the pure creation of nature with our BB royal honey.It is minimally processed without affecting the natural taste,aroma and flavour .Our BB royal honey is free from any type of adulteration like jaggery,invert syrup,corn syrup,molasses etc.I',
  },
];

import Scroll from '../../../components/innerscreens/Scroll';

import BakerDisplay from '../../../components/innerscreens/BakerDisplay';
import Contentheader from '../../../components/innerscreens/Contentheader';

import {useNavigation} from '@react-navigation/native';
export default function (props) {
  const navigation = useNavigation();

  return <Sugar {...props} navigation={navigation} />;
}
class Sugar extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View>
        <Contentheader />
        <View style={styles.headertwo}>
          <Text>SALT, SUGAR & JAGGERY</Text>
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
