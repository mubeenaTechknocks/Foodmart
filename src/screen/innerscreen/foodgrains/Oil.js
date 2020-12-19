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
  {scrolltext: 'Blended Cooking Oils'},
  {scrolltext: 'Soya & Mustard Oils'},
  {scrolltext: 'Ghee & Vanaspati'},
  {scrolltext: 'Sunflower,Rice Bran Oil,Gingelly Oil'},
  {scrolltext: 'Olive & Canola Oils'},
  {scrolltext: 'Other Edible Oils'},
];
const displaylist = [
  {
    image: require('../../../../assets/images/food/Oil/fortune.jpg'),
    brand: 'FORTUNE',
    name: 'Refined Oil-Rice Bran',
    star: '4.2',
    screen: 'Foodgrains',
    rating: '1780 Ratings',
    kg: '5 L -Can',
    mrp: 'Rs 700',
    actmrp: 'Rs 599',
    about:
      'Fortune Refined - Rice bran oil is naturally enriched with various nutrients that explain into health benefits for all members in the family. ',
    about2: 'It is recommended by scientists and doctors all over the world.',
  },
  {
    image: require('../../../../assets/images/food/Oil/sunflower.jpg'),
    brand: 'FORTUNE',
    name: 'Sunflower Refined  Oil',
    star: '4.1',
    screen: 'Foodgrains',
    rating: '15591 Ratings',
    kg: '1L -Pouch',
    mrp: 'Rs 130',
    actmrp: 'Rs 109',
    about:
      'Fortune Sunflower Oil is a light, healthy and nutritious cooking oil. Being rich in vitamins and consisting mainly of polyunsaturated fatty acids, it makes food easy to digest.',
    about2:
      'Energy - 900 Kcal; Carbohydrates, Protein - 0g; Cholestrol - 0g; Fat - 100g; Saturated Fatty Acid NMT*- 12g; Mono Unsaturated Fatty Acid NMT* - 26g; ',
  },

  {
    image: require('../../../../assets/images/food/Oil/cowghee.jpg'),
    brand: 'NANDINI',
    name: 'Poor Cow Ghee',
    star: '4.1',
    screen: 'Foodgrains',
    rating: '4284 Ratings',
    kg: '1L -Pouch',
    mrp: 'Rs 470',
    actmrp: 'Rs 465',
    about:
      'Rich in proteins and whey, Ghee or clarified butter produced by Nandini is a pure substance that is derived from a simple process that involves boiling the butter and draining the buttermilk at the end of the boiling process.',
    about2:
      'This dairy product contains a strong protein element in terms of whey and casein, as well as milk solids like lactose. The clarified butter or Ghee is also rich in Vitamins like A and K, which aids in the lubrication of joints and better digestive health.',
  },

  {
    image: require('../../../../assets/images/food/Oil/saffola.jpg'),
    brand: 'SAFFOLA',
    name: 'Gold-Pro Healthy Lifestyle Edible Oil',
    star: '4.2',
    screen: 'Foodgrains',
    rating: '5967 Ratings',
    kg: '1L -Pouch',
    mrp: 'Rs 159',
    actmrp: 'Rs 132',
    about:
      'Are you pushing for a healthy lifestyle even amongst the hustles of the modern days? Today our food habits, stress & activity level affect both our health & heart.',
    about2:
      'Saffola Gold, Pro Healthy Lifestyle Edible Oil, takes care of you and your family by bringing together the benefits of natural Antioxidant, MUFA, PUFA and Vitamins A and D, thus the power of blended cooking oil offers Improved Nutritional Profile',
  },
  {
    image: require('../../../../assets/images/food/Oil/idhayam.jpg'),
    brand: 'IDHAYAM',
    name: 'Oil-Gingelly',
    star: '4.2',
    screen: 'Foodgrains',
    rating: ' 2525 Ratings',
    kg: '500 ml-Pouch',
    mrp: 'Rs 182',
    actmrp: 'Rs 181',
    about:
      'Idhayam Gingelly Oil ensures you the best health by pushing your Blood Pressure down, lowering your Cholesterol and keeps your skin healthy. ',
    about2:
      ' Its soft for heart that adds flavour to the cuisine. It provides good oral health too. It also includes mustard oil in the list of their product range. It helps to stay healthy and fit.',
  },
  {
    image: require('../../../../assets/images/food/Oil/saffola.jpg'),
    brand: 'SAFFOLA',
    name: 'Gold-Pro Healthy Lifestyle Edible Oil',
    star: '4.2',
    screen: 'Foodgrains',
    rating: '5967 Ratings',
    kg: '1L -Pouch',
    mrp: 'Rs 159',
    actmrp: 'Rs 132',
    about:
      'Are you pushing for a healthy lifestyle even amongst the hustles of the modern days? Today our food habits, stress & activity level affect both our health & heart.',
    about2:
      'But health can also be a part of your life when you find your own way of being healthy. Choose Saffola Gold cooking oil, which partners your journey for a healthy lifestyle so that you have a healthy heart.',
  },
  {
    image: require('../../../../assets/images/food/Oil/idhayam.jpg'),
    brand: 'IDHAYAM',
    name: 'Oil-Gingelly',
    star: '4.2',
    screen: 'Foodgrains',
    rating: ' 2525 Ratings',
    kg: '500 ml-Pouch',
    mrp: 'Rs 182',
    actmrp: 'Rs 181',
    about:
      'Tilnad is 100% pure edible grade Gingelly or Sesame Oil, Ideal for cooking and Body massage. ',
    about2:
      'Nirmal extends superior quality of oil production to sesame oil, extracted from the finest crop of India. KLF Nirmal produces sesame oil, which is extracted from premium seeds procured from farmers across the country.',
  },
];
import Scroll from '../../../components/innerscreens/Scroll';

import Contentheader from '../../../components/innerscreens/Contentheader';

import BakerDisplay from '../../../components/innerscreens/BakerDisplay';

import {useNavigation} from '@react-navigation/native';
export default function (props) {
  const navigation = useNavigation();

  return <Oil {...props} navigation={navigation} />;
}
class Oil extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View>
        <Contentheader />
        <View style={styles.headertwo}>
          <Text>EDIBLE OIL & GHEE</Text>
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
