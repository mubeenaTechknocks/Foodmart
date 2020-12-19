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
  {scrolltext: 'Whole Spices'},
  {scrolltext: 'Powdered Spices'},
  {scrolltext: 'Cooking Pasters'},
  {scrolltext: 'Herbs & Seasoning'},
  {scrolltext: 'Blended Masalas'},
];

const displaylist = [
  {
    image: require('../../../../assets/images/food/masala/one.jpg'),
    brand: 'BB ROYAL',
    name: 'Cumin/Jeera-Whole',
    star: '4',
    rating: '25884 Rating',
    kg: '100 g',
    screen: 'Foodgrains',
    mrp: '50',
    actmrp: 'Rs 24',
    about:
      'Pro Nature Organic Cumin (whole) offers you one of the greatest and fresh Cumin, which is popularly well-known for special and important a spice that gives an extreme pleasure.',
    about2:
      ' It consists of many phyto-chemicals that are known to have antioxidant, anti-flatulent and carminative properties. It is 100% certified organic and have natural nutrients needed for a healthy diet.',
  },
  {
    image: require('../../../../assets/images/food/masala/two.jpg'),
    brand: 'BB ROYAL',
    name: 'Mustard/Rai -Small',
    star: '4.1',
    rating: '7596 Rating',
    kg: '200 g ',
    mrp: '50',
    actmrp: 'Rs 25',
    screen: 'Foodgrains',
    about:
      'Organic Mustard adds a different flavour to the food and it is a necessary part of the Indian cooking. Moreover, the seeds have always been well-known for their medical properties. It is free from synthetic chemicals and pesticides.',
    about2:
      'It contains magnesium, calcium, iron, zinc and protein. This amazing mustard seeds will prevent the risk of cancer, improves cardiovascular health, and cures aches.',
  },

  {
    image: require('../../../../assets/images/food/masala/three.jpg'),
    brand: 'BB ROYAL',
    name: 'Cooking Soda',
    star: '4',
    screen: 'Foodgrains',
    rating: '4226 Rating',
    kg: '50 g',
    mrp: '20',
    actmrp: 'Rs 7',
    about:
      'Cooking Soda is a general ingredient in many food recipes and found in almost every house. ',
    about2:
      'It is sodium bicarbonate, which is an antacid. Baking soda contains been broadly used as a household cleaner and a health and beauty product for an amount of years.',
  },

  {
    image: require('../../../../assets/images/food/masala/four.jpg'),
    brand: 'BB ROYAL',
    name: 'Turmeric/Haldi -Powder',
    star: '4.1',
    rating: '1856 Rating',
    kg: '100g',
    screen: 'Foodgrains',
    mrp: '30',
    actmrp: 'Rs 21',
    about:
      'It is recommended to include turmeric powder to each and every preparation of yours, as it contains antiseptic properties. Utilize it for marination or add it to the meat and vegetables while cooking. ',
    about2:
      'This will prevent your food from germs keeping it healthy to consume for a longer time.BB Royal Organic Turmeric powder is prepared from organically grown turmeric.',
  },
];

import Scroll from '../../../components/innerscreens/Scroll';

import BakerDisplay from '../../../components/innerscreens/BakerDisplay';
import Contentheader from '../../../components/innerscreens/Contentheader';

import {useNavigation} from '@react-navigation/native';
export default function (props) {
  const navigation = useNavigation();

  return <Spices {...props} navigation={navigation} />;
}
class Spices extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View>
        <Contentheader />
        <View style={styles.headertwo}>
          <Text>MASALA</Text>
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
