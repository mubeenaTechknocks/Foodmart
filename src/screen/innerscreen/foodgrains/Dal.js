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
  {scrolltext: 'Toor,Channa & Moong Dal'},
  {scrolltext: 'Urad & Other Dals'},
  {scrolltext: 'Cereals & Millets'},
];

const displaylist = [
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
      'Toor Dal is the most widely-used form of the lentil. It is used in popular recipes. It tastes delicious when cooked and can be digested easily. It also has a long shelf life. ',
    about2:
      'It contains folic acid, essential for foetal development during pregnancy. It is an excellent source of nutrients, plant protein and dietary fiber. It is also an excellent source of carbohydrate, which your body needs for energy. It can also reduce the risk of chronic diseases.',
  },
  {
    image: require('../../../../assets/images/food/dal/two.jpg'),
    brand: 'BB POPULAR',
    name: 'Peanuts/Mungahali/Shengdana-Raw',
    star: '3.9',
    screen: 'Foodgrains',
    rating: '63521 Rating',
    kg: '1 kg - Pouch',
    mrp: '220',
    actmrp: 'Rs 125',
    about:
      'Raw Peanuts are the unique Health Nut. Every oval-shaped kernel or seed is comprised of two off-white lobes that are enclosed by a brownish-red skin. They have B vitamins, Vitamin E, protein, fiber and necessary minerals. Peanuts have a strong, creamy and nutty flavor. ',
    about2:
      'The antioxidants and folic acid in peanuts may provide some protection against cancer. It is rich in calcium which helps promotes healthy bones. It has higher bioflavonoid resveratrol content than grapes. This bioflavonoid is believed to improve blood flow in the brain by as much as 30%, thus greatly reducing the risk of stroke.',
  },

  {
    image: require('../../../../assets/images/food/dal/four.jpg'),
    brand: 'BB POPULAR',
    name: 'Moong Dal',
    star: '4.1',
    screen: 'Foodgrains',
    rating: '11248 Rating',
    kg: '2 kg-Pouch',
    mrp: '380',
    actmrp: 'Rs 270',
    about:
      'Moong beans is a popular food among vegetarians since it contains a lot of proteins and fiber. It is one of the easiest dals to digest and for this reason it is often given to people recovering from an illness, specially a stomach upset. ',
    about2:
      ' It has antioxidants which is very healthy for the good functioning of the human body. It is a good balanced diet and could be included in our daily. ',
  },

  {
    image: require('../../../../assets/images/food/dal/one.jpg'),
    brand: 'BB POPULAR',
    name: 'Toor/Arhar Dal',
    star: '4',
    screen: 'Foodgrains',
    rating: '308 Rating',
    kg: '5kg -pouch',
    mrp: '399',
    actmrp: 'Rs 275',
    about:
      'Dals or lentils are a staple in Indian cooking. Every Indian home will see at least one dal dish on the table during lunch and dinner. The unpolished Toor Dal from the house of Tata is a high quality product that is nutrient heavy and used in a variety of preparations in most parts of India. ',
    about2:
      'It is unpolished and retains its soft outer covering which acts as precious fibre for the system, even as this dal provides essential protein, magnesium, potassium and other minerals to the body. ',
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
      'Toor Dal is the most widely-used form of the lentil. It is used in famous recipes. It contains a thick gelatinous or meaty texture, & takes a little longer to cook than moong or masoor dal. It is fine for health and fulfills the energy.',
    about2:
      'They are mainly used as the base for curriessuch as sambar, dal etc. They also make excellent sandwich and salad stuffing. Sweet meats and desserts in the South also use toor dal as a base ',
  },
];

import Scroll from '../../../components/innerscreens/Scroll';

import BakerDisplay from '../../../components/innerscreens/BakerDisplay';
import Contentheader from '../../../components/innerscreens/Contentheader';

import {useNavigation} from '@react-navigation/native';
export default function (props) {
  const navigation = useNavigation();

  return <Dals {...props} navigation={navigation} />;
}

class Dals extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View>
        <Contentheader />
        <View style={styles.headertwo}>
          <Text>DALS & PULSES</Text>
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
