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
  {scrolltext: 'Atta,Flours & Sooji'},
  {scrolltext: 'Dals& Pulses'},
  {scrolltext: 'Rice & Rice Products'},
  {scrolltext: 'Organic Staples'},
  {scrolltext: 'Salt,Sugar & Jaggey'},
  {scrolltext: 'Edible Oils & Ghee'},
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
    actmrp: 'Rs 95',
    screen: 'Foodgrains',
    about:
      'Sugar is finished from organic sugar cane, the grains are light cream colored. It is an improved option as opposed to refined sugar that is pure white in color. ',
    about2:
      " It is an immense supply of energy and has necessary minerals with no harsh chemicals or additives. Sugar is sucrose that becomes glucose. Sugar's glycolic acid can be very supportive in retaining the wellbeing and look of your skin.",
  },
  {
    image: require('../../../../assets/images/food/masala/four.jpg'),
    brand: 'BB ROYAL',
    name: 'Turmeric/Haldi -Powder',
    star: '4.1',
    rating: '1856 Rating',
    kg: '100g',
    mrp: '30',
    screen: 'Foodgrains',
    actmrp: 'Rs 21',
    about:
      'It is recommended to include turmeric powder to each and every preparation of yours, as it contains antiseptic properties. ',
    about2:
      ' Utilize it for marination or add it to the meat and vegetables while cooking. This will prevent your food from germs keeping it healthy to consume for a longer time.',
  },

  {
    image: require('../../../../assets/images/food/dal/one.jpg'),
    brand: 'BB ROYAL',
    name: 'Toor Dal/Arhar Dal-Desi',
    star: '4',
    rating: '8526 Rating',
    kg: '1 kg-Pouch',
    mrp: '170',
    screen: 'Foodgrains',
    actmrp: 'Rs 128',
    about:
      'Toor Dal completes the Indian platter with its distinctive inherent flavor, fragrance and nutrition. These are wealthy source of protein and simple to digest and cook. It is tasty flavor and contains high nutritional value.',
    about2:
      'Toor dal contains folic acid essential for fetal development in pregnancy. It is an excellent source of nutrients and plant protein, and they also contain dietary fiber.',
  },

  {
    image: require('../../../../assets/images/food/besan20.jpg'),
    type: 'BB RECOMMENDS',
    brand: 'BB ROYAL',
    name: 'Sooji Ordinary/Bombay Rava',
    star: '4.1',
    screen: 'Foodgrains',
    rating: ' 5694Ratings',
    kg: '1 kg-Pouch',
    mrp: 'Rs 60',
    actmrp: 'Rs 48',
    about:
      'The BB Royal Sooji or semolina is packed with health benefits. It is actually anything but ordinary because it has been sourced from the finest of durum wheat and then packaged hygenically so that it doesnt get affected by humidity. ',
    about2:
      'Sooji, is known for being light on the palette and having the goodness of digestive fibres from wheat. It melts in the mouth, making it light for infants too. It has minerals and vitamins, which boost your overall health. Being low in calorie, it also helps in managing your weight.',
  },
  {
    image: require('../../../../assets/images/food/dal/one.jpg'),
    brand: 'BB ROYAL',
    name: 'Toor Dal/Arhar Dal-Desi',
    star: '4',
    screen: 'Foodgrains',
    rating: '8526 Rating',
    kg: '1 kg-Pouch',
    mrp: '170',
    actmrp: 'Rs 128',
    about:
      'Toor Dal is the most widely-used form of the lentil. It is used in famous recipes. It contains a thick gelatinous or meaty texture, & takes a little longer to cook than moong or masoor dal.',
    about2:
      'It is fine for health and fulfills the energy. It contains a delectable taste with simple digestion and has long shelf life. Toor Dal contains rich nutritional value.',
  },
];

import Scroll from '../../../components/innerscreens/Scroll';

import BakerDisplay from '../../../components/innerscreens/BakerDisplay';
import Contentheader from '../../../components/innerscreens/Contentheader';
import {useNavigation} from '@react-navigation/native';
export default function (props) {
  const navigation = useNavigation();

  return <Allfoodgrains {...props} navigation={navigation} />;
}
class Allfoodgrains extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View>
        <Contentheader />
        <View style={styles.headertwo}>
          <Text>FOODGRAINS, OIL & MASALA</Text>
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
