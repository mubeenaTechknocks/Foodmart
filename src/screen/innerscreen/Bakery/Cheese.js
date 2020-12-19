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

const displaylist = [
  {
    image: require('../../../../assets/images/Bakery/cheese/one.jpg'),
    brand: 'AMUL',
    name: 'Butter - Pasteurised',
    star: '4.1',
    screen: 'Bakery',
    rating: '34042 Ratings',
    kg: '100 g -Carton',
    mrp: '49.50',
    actmrp: 'Rs 48',
    about:
      'Amul Pasteurised Processed Cheddar Cheese is made from Cheese: Sodium Citrate: Common Salt: Citric Acid: permitted natural color - Annatto. Emulsifier and Class II preservatives. It is made from graded cow/buffalo milk using microbial rennet.',
    about2: 'Wholesome cheese.Good source of Calcium and milk Proteins.',
  },
  {
    image: require('../../../../assets/images/Bakery/cheese/two.jpg'),
    brand: 'AMUL',
    name: 'Cheese Slices',
    star: '4.2',
    screen: 'Bakery',
    rating: '9592 Ratings',
    kg: '100 g - Pouch',
    mrp: '72',
    actmrp: 'Rs 71 ',
    about:
      'Amul Pasteurised Processed Cheddar Cheese is made from Cheese: Sodium Citrate: Common Salt: Citric Acid: permitted natural color - Annatto. Emulsifier and Class II preservatives. It is made from graded cow/buffalo milk using microbial rennet.',
    about2: 'Wholesome cheese.Good source of Calcium and milk Proteins.',
  },

  {
    image: require('../../../../assets/images/Bakery/cheese/three.jpg'),
    brand: 'MILKY MIST',
    name: 'Cheese - Mozzarella Pizza',
    star: '3.9',
    screen: 'Bakery',
    rating: '1402 Ratings',
    kg: '200 g- Pouch',
    mrp: '122.50',
    actmrp: 'Rs 120',
    about:
      'Mozzarella is an excellent source of milk proteins, which are palatable. it has a slightly salty blandish taste and pleasant aroma.',
    about2:
      'When baked along with pizzas, it melts uniformly, beautifully engulfing all other ingredients of the pizza surface.',
  },

  {
    image: require('../../../../assets/images/Bakery/cheese/four.jpg'),
    brand: 'NANDINI',
    name: 'Cooking Butter - Unsalted',
    star: '4.1',
    screen: 'Bakery',
    rating: '850 Ratings',
    kg: '500 g - Carton',
    mrp: '231.50',
    actmrp: 'Rs 230',
    about:
      'Mozzarella is an excellent source of milk proteins, which are palatable. it has a slightly salty blandish taste and pleasant aroma.',
    about2:
      'When baked along with pizzas, it melts uniformly, beautifully engulfing all other ingredients of the pizza surface.',
  },

  {
    image: require('../../../../assets/images/Bakery/cheese/one.jpg'),
    brand: 'MILKY MIST',
    name: 'Cheese - Shredded Mozzarella ',
    star: '3.7',
    screen: 'Bakery',
    rating: '175 Ratings',
    kg: '500 g',
    mrp: '253.50',
    actmrp: 'Rs 250',
    about:
      'Mozzarella is an excellent source of milk proteins, which are palatable. it has a slightly salty blandish taste and pleasant aroma.',
    about2:
      'When baked along with pizzas, it melts uniformly, beautifully engulfing all other ingredients of the pizza surface.',
  },
  {
    image: require('../../../../assets/images/Bakery/cheese/four.jpg'),
    brand: 'NANDINI',
    name: 'Cooking Butter - Unsalted',
    star: '4.1',
    screen: 'Bakery',
    rating: '850 Ratings',
    kg: '500 g - Carton',
    mrp: '231.50',
    actmrp: 'Rs 230',
    about:
      'When baked along with pizzas, it melts uniformly, beautifully engulfing all other ingredients of the pizza surface.',
    about2: 'Wholesome cheese.Good source of Calcium and milk Proteins.',
  },
];

import Scroll from '../../../components/innerscreens/Scroll';

import BakerDisplay from '../../../components/innerscreens/BakerDisplay';
import Contentheader from '../../../components/innerscreens/Contentheader';

import {useNavigation} from '@react-navigation/native';
export default function (props) {
  const navigation = useNavigation();

  return <Cheese {...props} navigation={navigation} />;
}

class Cheese extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View>
        <Contentheader />
        <View style={styles.headertwo}>
          <Text>CHEESE AND BUTTER</Text>
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
