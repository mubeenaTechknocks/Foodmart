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
import {useNavigation} from '@react-navigation/native';
export default function (props) {
  const navigation = useNavigation();

  return <Herbs {...props} navigation={navigation} />;
}
const horizontalscroll = [
  {scrolltext: 'Lemon, Ginger & Garlic'},
  {scrolltext: 'Indian Herbs'},
  {scrolltext: ' Exotic Herbs'},
];
const vegimages = [
  {
    image: require('../../../../assets/images/herbal/lem.jpg'),
    vegname: 'Lemon',
    kg: '250 g',
    mrp: 'Rs 273.75',
    actmrp: 'Rs 19',
    screen: 'Fruits',
    about:
      'With a segmented flesh that has a unique pleasant aroma and a strong sour taste, lemons are round/oval and have a yellow, texturized external peel. ',
    about2:
      'Lemon promotes hydration and keeps the skin healthy. They help ease digestion, prevents kidney stones and freshens breath. Lemons are a very good source of Vitamin C.',
  },
  {
    image: require('../../../../assets/images/herbal/coria.jpg'),
    vegname: 'Coriander Leaves',
    kg: '100 g',
    mrp: 'Rs 11.25',
    screen: 'Fruits',
    actmrp: 'Rs 9',
    about:
      'Coriander leaves are green, fragile with a decorative appearance. They contain minimal aroma and have a spicy sweet taste. Now do not bother wasting time cutting off the roots as we value your money and time and provide you the freshest leafy edible parts . ',
    about2:
      'Coriander leaves fight food poisoning and lower blood sugar levels. They relieve urinary tract infections and help in maintaining a healthy menstrual cycle while preventing neurological inflammations and diseases. ',
  },
  {
    image: require('../../../../assets/images/herbal/chil.jpg'),
    vegname: 'Chilly-Green Long,Medium',
    kg: '250 g',
    screen: 'Fruits',
    mrp: 'Rs 22.50',
    actmrp: 'Rs 12.50',
    about:
      'Green chillis are the best kitchen ingredient to bring a dash of spiciness to recipes. The fresh flavour and sharp bite make them a must in almost all Indian dishes. This particular green chilli variety is big.',
    about2:
      'Rich in dietary fibre, so, it eases digestion. Protects against cancer and stimulates the cooling centre of the brain by lowering body temperature. This is the reason why in a hot place like India, chillies are consumed a lot. It also possesses anti-bacterial properties.',
  },
  {
    image: require('../../../../assets/images/herbal/ging.jpg'),
    vegname: 'Ginger,Organically Grown',
    kg: '100 g',
    mrp: 'Rs 20',
    screen: 'Fruits',
    actmrp: 'Rs 16',
    about:
      'Rich in dietary fibre, so, it eases digestion. Protects against cancer and stimulates the cooling centre of the brain by lowering body temperature. This is the reason why in a hot place like India, chillies are consumed a lot. It also possesses anti-bacterial properties.',
    about2:
      'Ginger root treats morning sickness. They reduce muscle pain, soreness and eases various stomach problems.',
  },

  {
    image: require('../../../../assets/images/herbal/garlic.jpg'),
    vegname: 'Garlic',
    kg: '250 g',
    screen: 'Fruits',
    mrp: 'Rs 61.25',
    actmrp: 'Rs 37.50',
    about:
      'Firm and fibrous ginger roots are stretched with multiple fingers that have light to dark tan skin and rings on it and is aromatic, spicy and pungent. The flavour gets intensified when the ginger is dried and lessens when cooked.',
    about2:
      'Ginger root treats morning sickness. They reduce muscle pain, soreness and eases various stomach problems.',
  },
];

import Scroll from '../../../components/innerscreens/Scroll';
import Display from '../../../components/innerscreens/DisplayList';
import Contentheader from '../../../components/innerscreens/Contentheader';

class Herbs extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View>
        <Contentheader />
        <View style={styles.headertwo}>
          <Text>HERBS & SEASONING</Text>
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
