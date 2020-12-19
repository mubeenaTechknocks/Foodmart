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
  {scrolltext: 'brown,Wheat & Multigrain'},
  {scrolltext: 'Milk,White & Sandwich'},
  {scrolltext: 'Buns,Pavs & Pizza Base'},
];

const displaylist = [
  {
    image: require('../../../../assets/images/Bakery/breads/one.jpg'),
    brand: 'FRESHO SIGNATURE',
    name: 'Fruit Tea Cake',
    screen: 'Bakery',
    star: '4',
    rating: '25364 Rating',
    kg: 'Combo-2 Items',
    mrp: ' Rs 108',
    actmrp: 'Rs 100',
    about:
      'Freshly Baked bread is one of lifes greatest simple pleasures and at Bigbasket we decided to give you just that. We start baking our breads once you order using the finest ingredients available. ',
    about2:
      'We recommend you consume this bread within 2 days or refrigerate if you intend to use it longer. Rich in Fibre, No caramel, No Artificial Colours, Baked on Order',
  },
  {
    image: require('../../../../assets/images/Bakery/breads/three.jpg'),
    brand: 'BRITANNIA',
    name: 'Fruit Cake',
    star: '3.9 ',
    rating: '53214 Rating',
    screen: 'Bakery',
    kg: '120 g',
    mrp: '22.50',
    actmrp: 'Rs 20.10',
    about:
      'Freshly Baked bread is one of lifes greatest simple pleasures and at Bigbasket we decided to give you just that. We start baking our breads once you order using the finest ingredients available. ',
    about2:
      'We recommend you consume this bread within 2 days or refrigerate if you intend to use it longer. Rich in Fibre, No caramel, No Artificial Colours, Baked on Order',
  },
  {
    image: require('../../../../assets/images/Bakery/breads/two.jpg'),
    brand: 'FRESHO SIGNATURE',
    name: 'Tea Cake - Banana Walnut',
    star: '4.1 ',
    rating: '36241 Rating',
    kg: '200 g  ',
    mrp: '162',
    actmrp: 'Rs 159 ',
    screen: 'Bakery',
    about:
      'Freshly Baked bread is one of lifes greatest simple pleasures and at Bigbasket we decided to give you just that. We start baking our breads once you order using the finest ingredients available. ',
    about2:
      'We recommend you consume this bread within 2 days or refrigerate if you intend to use it longer. Rich in Fibre, No caramel, No Artificial Colours, Baked on Order',
  },

  {
    image: require('../../../../assets/images/Bakery/breads/four.jpg'),
    brand: 'FRESHO SIGNATURE',
    name: 'Marble Tea Cake',
    star: '4.2',
    rating: '56324 Rating',
    kg: '250 g ',
    mrp: '160',
    screen: 'Bakery',
    actmrp: 'Rs 159',
    about:
      'Freshly Baked bread is one of lifes greatest simple pleasures and at Bigbasket we decided to give you just that. We start baking our breads once you order using the finest ingredients available. ',
    about2:
      'We recommend you consume this bread within 2 days or refrigerate if you intend to use it longer. Rich in Fibre, No caramel, No Artificial Colours, Baked on Order',
  },

  {
    image: require('../../../../assets/images/Bakery/breads/one.jpg'),
    brand: 'FRESHO SIGNATURE',
    name: ' Choco Chip Tea Cake',
    star: '4.2',
    screen: 'Bakery',
    rating: '265874 Rating',
    kg: '250 g',
    mrp: '160',
    actmrp: 'Rs 159',
    about:
      'Freshly Baked bread is one of lifes greatest simple pleasures and at Bigbasket we decided to give you just that. We start baking our breads once you order using the finest ingredients available. ',
    about2:
      'We recommend you consume this bread within 2 days or refrigerate if you intend to use it longer. Rich in Fibre, No caramel, No Artificial Colours, Baked on Order',
  },
  {
    image: require('../../../../assets/images/Bakery/breads/one.jpg'),
    brand: 'MOTHER DAIRY',
    name: 'Misti Doi',
    screen: 'Bakery',
    star: '4.1',
    rating: '1350 Ratings',
    kg: '85 g -Cup',
    mrp: '22.50',
    actmrp: 'Rs 20',
    about:
      'Freshly Baked bread is one of lifes greatest simple pleasures and at Bigbasket we decided to give you just that. We start baking our breads once you order using the finest ingredients available. ',
    about2:
      'We recommend you consume this bread within 2 days or refrigerate if you intend to use it longer. Rich in Fibre, No caramel, No Artificial Colours, Baked on Order',
  },
];

import Scroll from '../../../components/innerscreens/Scroll';
import BakerDisplay from '../../../components/innerscreens/BakerDisplay';
import Contentheader from '../../../components/innerscreens/Contentheader';
import {useNavigation} from '@react-navigation/native';
export default function (props) {
  const navigation = useNavigation();

  return <Bread {...props} navigation={navigation} />;
}

class Bread extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View>
        <Contentheader />
        <View style={styles.headertwo}>
          <Text>BREADS & BUNS</Text>
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
