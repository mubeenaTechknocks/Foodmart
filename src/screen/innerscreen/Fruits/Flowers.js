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

  return <Flower {...props} navigation={navigation} />;
}
const horizontalscroll = [
  {scrolltext: 'Marigold'},
  {scrolltext: 'Other Flowers'},
  {scrolltext: 'Roses'},
];
const vegimages = [
  {
    image: require('../../../../assets/images/flower/rose.jpg'),
    vegname: 'Cut Roses',
    kg: '250 g',
    mrp: 'Rs 87.50',
    actmrp: 'Rs 70',
    screen: 'Fruits',
    about:
      'This cut roses with different (3-4) colours, can be used for garlands in the home, decorate in festivals and pooja. Product image shown is for representation purpose only, the actual product may vary based on season, produce & availability.',
    about2:
      'Please note that fresh fruit and vegetables items will be billed based on exact weight during order processing (in case the actual weight exceeds the requested weight by more than 10%, you will be charged only for 10% excess weight).',
  },
  {
    image: require('../../../../assets/images/flower/maryg.jpg'),
    vegname: 'Marigold-Orange',
    kg: '100 g',
    mrp: 'Rs 25',
    actmrp: 'Rs 20',
    screen: 'Fruits',
    about:
      'Marigolds have daisy-like or twice, carnation-like flower heads and are produced separately or in clusters. Marigolds come in special colours, yellow and orange being the most common. It is used for pooja needs and floral decoration. Product image shown is for representation purpose only, the actual product may vary based on season, produce & availability.',
    about2:
      'Marigolds are loaded with anti-bacterial, anti-inflammatory and antiseptic properties, and are administered for several health conditions. Fresho marigold orange contains marigold extracts, pro-vitamin B5, vitamins A, C and E, vegetable glycerine, hydrolysed wheat protein, cream base, food colours and natural preservatives. It neutralises free radicals and prevents cell damage.',
  },
  {
    image: require('../../../../assets/images/flower/jam.jpg'),
    vegname: 'Chrysanthemum(Shevanti)',
    kg: '250 g',
    mrp: 'Rs 70',
    screen: 'Fruits',
    actmrp: 'Rs 56',
    about:
      "This versatile and low-maintenance flower is perfect for every setting, and with its long shelf life, you'll be falling in love with the Chrysanthemum every day! Perfect for your everyday puja.",
    about2:
      'Chrysanthemum are loaded with anti-bacterial, anti-inflammatory and antiseptic properties, and are administered for several health conditions. Fresho marigold orange contains marigold extracts, pro-vitamin B5, vitamins A, C and E, vegetable glycerine, hydrolysed wheat protein, cream base, food colours and natural preservatives. It neutralises free radicals and prevents cell damage.',
  },
  {
    image: require('../../../../assets/images/flower/banleaf.jpg'),
    vegname: 'Banana Leaf',
    kg: '5 PCS',
    screen: 'Fruits',
    mrp: 'Rs 22.70',
    actmrp: 'Rs 22',
    about:
      'Product image shown is for representation purpose only, the actually product may vary based on season, produce & availability.',
    about2: 'Can be used for cooking and serving',
  },

  {
    image: require('../../../../assets/images/flower/yellow.jpg'),
    vegname: 'Marigold-Yellow',
    kg: '250 g',
    screen: 'Fruits',
    mrp: 'Rs 42.50',
    actmrp: 'Rs 34',
    about:
      'Marigolds have daisy-like or twice, carnation-like flower heads and are produced separately or in clusters. Marigolds come in special colours, yellow and orange being the most common. It is used for pooja needs and floral decoration. ',
    about2:
      'You can use marigold as ingestion which means tea infusion. Marigold can be used as lotions and creams for wounds. It can also be used as gargles or mouthwashes.',
  },
];

import Scroll from '../../../components/innerscreens/Scroll';

import Display from '../../../components/innerscreens/DisplayList';
import Contentheader from '../../../components/innerscreens/Contentheader';

class Flower extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View>
        <Contentheader />
        <View style={styles.headertwo}>
          <Text>FLOWER BOUQUETS, BUNCHES</Text>
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
