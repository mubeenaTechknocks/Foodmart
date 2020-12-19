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
  {scrolltext: 'Atta Whole Wheat'},
  {scrolltext: 'Sooji,Maida & Besan'},
  {scrolltext: 'Rice & Other Flours'},
];
const displaylist = [
  {
    image: require('../../../../assets/images/food/wheat.jpg'),
    type: 'BB RECOMMENDS',
    brand: 'BB ROYAL',
    name: 'Wheat Flour(Chakki Atta)',
    star: '4',
    rating: '11891 Ratings',
    kg: '10 kg',
    mrp: 'Rs 450',
    actmrp: 'Rs 383',
    screen: 'Foodgrains',
    about:
      'Atta is made from the choicest grains - heavy on the palm, golden amber in colour and hard in a bite. It is carefully ground using modern chakki grinding process for the perfect balance of colour, taste and nutrition which also ensures that BB Royal atta contains 0% Maida. The dough made from BB Royal Atta absorbs more water, hence rotis remain softer for longer.',
    about2:
      'The dough made from BB Royal Atta absorbs more water, hence rotis remain softer for longer.',
  },
  {
    image: require('../../../../assets/images/food/Atta.jpg'),
    type: 'BB RECOMMENDS',
    brand: 'AASHIRVAAD',
    name: 'Atta- Whole Wheat',
    star: '4.1',
    screen: 'Foodgrains',
    rating: '23630 Ratings',
    kg: '10 kg-Pouch',
    mrp: 'Rs 490',
    actmrp: 'Rs 410',
    about:
      'Aashirvaad whole wheat atta is made of zero per cent maida and 100% atta, which makes it extremely nutritious since its packed with health benefits. This also means more fluffy and soft rotis at home. ',
    about2:
      'Whole wheat atta is comparatively healthier than bleached white flour, which is obtained after processing and 60% extraction from grain. If you are consuming whole wheat atta, you are eating food enriched with vitamin B1, B3, B2, folic acid, calcium, phosphorus, iron, fiber and zinc.',
  },

  {
    image: require('../../../../assets/images/food/maida.jpg'),
    type: 'BB RECOMMENDS',
    brand: 'BB ROYAL',
    name: 'Maida',
    screen: 'Foodgrains',
    star: '4',
    rating: '18814 Ratings',
    kg: '2 kg-Pouch',
    mrp: 'Rs 120',
    actmrp: 'Rs 68',
    about:
      'Maida is considered as bleached flour that has less protein compare to unbleached.',
    about2:
      'This flour is Bleached flour has less protein than unbleached. It is a extremely finely milled flour used in Indian cooking for making breads, pastries and various biscuits and in particular parottas. ',
  },

  {
    image: require('../../../../assets/images/food/besan.jpg'),
    type: 'BB RECOMMENDS',
    brand: 'BB ROYAL',
    name: 'Besan Flour',
    star: '4',
    screen: 'Foodgrains',
    rating: '6602 Ratings',
    kg: '1 kg-Pouch',
    mrp: 'Rs 150',
    actmrp: 'Rs 79',
    about:
      'Gram flour or besan, is a light yellow color pulses flour made by grinding chickpea (Bengal gram). It is rich in fiber and nutrients, that can improve heart health, stabilize blood sugar and prevent diabetes. ',
    about2:
      'Besan is used to make batter for fries like bhajjis, pakodas and vadas. It is also used to make desserts and various kinds of sweet dishes. It can be used as a natural scrub for the skin and is believed to enhance complexion. ',
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
    image: require('../../../../assets/images/food/wheat.jpg'),
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
];

import Scroll from '../../../components/innerscreens/Scroll';

import BakerDisplay from '../../../components/innerscreens/BakerDisplay';
import Contentheader from '../../../components/innerscreens/Contentheader';

import {useNavigation} from '@react-navigation/native';
export default function (props) {
  const navigation = useNavigation();

  return <Atta {...props} navigation={navigation} />;
}

class Atta extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View>
        <Contentheader />
        <View style={styles.headertwo}>
          <Text>ATTA,FLOURS & SOOJI</Text>
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
