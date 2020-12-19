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
  {scrolltext: 'Mangoes'},
  {scrolltext: 'Kiwi,Melcon  Fruit'},
  {scrolltext: 'Apples & Pomegranate'},
  {scrolltext: 'Banana,Sapota & Papaya'},
  {scrolltext: 'Seasonal Fruits'},
];
const vegimages = [
  {
    image: require('../../../../assets/images/fruits/coco.jpg'),
    vegname: 'Coconut - Medium',
    kg: '1 PC',
    screen: 'Fruits',
    mrp: 'Rs 31.25',
    actmrp: 'Rs 25',
    about:
      'Coconut is a very stable fruit. It is a mature fruit of the cocos nucifera palm. The fruit is nearly spherical to oval in shape and measure between 5-10 inches in width. Its rough external husk is light green, and turns gray as the nut grown-up. The husk is about 1-2 inches in thickness and made of tough fibers. ',
    about2:
      'Coconut is to stabilizing blood sugar, lowering cholesterol, healing, hydration and even replacing blood plasma in an emergency.',
  },
  {
    image: require('../../../../assets/images/fruits/tender.jpg'),
    vegname: 'Tender Coconut -Medium',
    kg: '1 PC',
    mrp: 'Rs 46.25',
    actmrp: 'Rs 37',
    screen: 'Fruits',
    about:
      'Coconut is a very stable fruit. It is a mature fruit of the cocos nucifera palm. The fruit is nearly spherical to oval in shape and measure between 5-10 inches in width. Its rough external husk is light green, and turns gray as the nut grown-up. The husk is about 1-2 inches in thickness and made of tough fibers. ',
    about2:
      'Coconut is to stabilizing blood sugar, lowering cholesterol, healing, hydration and even replacing blood plasma in an emergency.',
  },
  {
    image: require('../../../../assets/images/fruits/pome.jpg'),
    vegname: 'pomegranate',
    kg: '4 PCS-(approx.800 to ..)',
    mrp: 'Rs 161.25',
    actmrp: 'Rs 129',
    screen: 'Fruits',
    about:
      'With ruby color and an intense floral, sweet-tart flavor, the pomegranate delivers both taste and beauty. You can remove the skin and the membranes to get at the delicious fruit with nutty seeds. Fresho Pomegranates are finely sorted and graded to deliver the best tasting pomegranates to you.',
    about2:
      'With ruby color and an intense floral, sweet-tart flavor, the pomegranate delivers both taste and beauty. You can remove the skin and the membranes to get at the delicious fruit with nutty seeds. Fresho Pomegranates are finely sorted and graded to deliver the best tasting pomegranates to you.',
  },
  {
    image: require('../../../../assets/images/fruits/watermelon.jpg'),
    vegname: 'Watermelon-Small',
    kg: '1 PC-1.7 -2.5 kg',
    mrp: 'Rs 36.25',
    screen: 'Fruits',
    actmrp: 'Rs 16.80',
    about:
      'With greenish black to smooth dark green surface, Fresho watermelons are globular in shape and are freshly picked for you directly from our farmers The juicy, sweet and grainy textured flesh is filled with 12-14% of sugar content, making it a healthy alternative to sugary carbonated drinks. Flesh colour of these watermelons are pink to red with dark brown/black seeds.',
    about2:
      'Watermelons have excellent hydrating properties with 90% water content. Rich in anti-oxidant flavonoids that protects against prostate, breast, colon, pancreatic and lung cancers. They are an excellent source of lycopene which protects skin against harmful UV rays. It is also a great source for A, C, B-complex vitamins, iron and fiber which boosts body metabolism. ',
  },

  {
    image: require('../../../../assets/images/fruits/apple.jpg'),
    vegname: 'Apple-Red Delicious/Washington-Regular',
    kg: '$PC',
    screen: 'Fruits',
    mrp: 'Rs 206.25',
    actmrp: 'Rs 165',
    about:
      'The bright red coloured and heart shaped Red Delicious apples are crunchy, juicy and slightly sweet. Red Delicious Apples are a natural source of fibre and are fat free. They contain a wide variety of anti-oxidants and polynutrients. ',
    about2:
      "Apples are one of the healthiest fruits. Rich in vitamin C and dietary fiber which keep our digestive and immune system healthy. Protects from Alzheimers, type 2 diabetes and cancer.It's a natural teeth whitener and prevent bad breath. Eating apple peel lowers the risk of obesity. Apple mask is an excellent cure for wrinkles",
  },
];

import Scroll from '../../../components/innerscreens/Scroll';
import Display from '../../../components/innerscreens/DisplayList';
import Contentheader from '../../../components/innerscreens/Contentheader';
import {useNavigation} from '@react-navigation/native';
export default function (props) {
  const navigation = useNavigation();

  return <Seasonal {...props} navigation={navigation} />;
}
class Seasonal extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View>
        <Contentheader />
        <View style={styles.headertwo}>
          <Text>FRESH FRUITS</Text>
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
          <Display data={vegimages}></Display>
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
