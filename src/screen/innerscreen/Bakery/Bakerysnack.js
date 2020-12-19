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
  {scrolltext: 'Cheese & Gaelic Bread'},
  {scrolltext: 'Bread Sticks & Lavash'},
  {scrolltext: 'Organic& Free From'},
];

const displaylist = [
  {
    image: require('../../../../assets/images/Bakery/snacks/one.jpg'),
    brand: 'FRESHO SIGNATURE',
    name: 'Bread - Garlic',
    star: '4.1',
    rating: '36244 Rating',
    kg: '200 g',
    mrp: '66.50',
    actmrp: 'Rs 65',
    screen:"Bakery",
    about:
      'This artisan garlic bread is a real treat, perfect for any occasion, drenched in butter and herb mixture. Generally served along with pasta and other main courses, all around the world. ',
    about2:
      ' A mixture of butter or olive oil, oregano, chilly flakes, etc., can be spread on the bread to make it a perfect evening snack.',
  },
  {
    image: require('../../../../assets/images/Bakery/snacks/two.jpg'),
    brand: 'THE BAKERS DOZEN',
    name: 'Ragi Crackers',
    star: '3.9',
    rating: '63521 Rating',
    kg: '100 g - Pouch',
    mrp: '92.75',
    actmrp: 'Rs 90 ',screen:"Bakery",
    about:
      'Unique crunchy chips embodied with Ragi, we are loaded with garlic and are perfect with any dip that you may choose to have',
    about2:
      'Contains Whole Wheat Flour, Piain White Wheat Flour, Ragi Flour (17%), Garlic, Salt, Sesame Seeds, Honey, Oil.',
  },

  {
    image: require('../../../../assets/images/Bakery/snacks/four.jpg'),
    brand: 'THE BAKERS DOZEN',
    name: 'Lavash - 100% Wholewheat',
    star: '4.2',
    rating: '96325 Rating',
    kg: '100 g',
    mrp: '102.50',
    actmrp: 'Rs 100',screen:"Bakery",
    about: '100% Wholewheat',
    about2: 'Contains Wholewheat Flour (Atta), Yeast, Honey, Salt, Sesame',
  },

  {
    image: require('../../../../assets/images/Bakery/snacks/three.jpg'),
    brand: 'THE BAKERS DOZEN',
    name: 'Garlic Bread - 100% Wholewheat',
    star: ' ',
    rating: ' ',
    kg: '100 g',
    mrp: '90',screen:"Bakery",
    actmrp: 'Rs 85',
    about:
      'This artisan garlic bread is a real treat, perfect for any occasion, drenched in butter and herb mixture. Generally served along with pasta and other main courses, all around the world',
    about2:
      ' A mixture of butter or olive oil, oregano, chilly flakes, etc., can be spread on the bread to make it a perfect evening snack.',
  },

  {
    image: require('../../../../assets/images/Bakery/snacks/one.jpg'),
    brand: 'THE BAKERS DOZEN',
    name: 'Gingerbread Men',
    star: '4',screen:"Bakery",
    rating: '32541 Rating',
    kg: '250 g - Pack of 12',
    mrp: '202.50',
    actmrp: 'Rs 200',
    about:
      'Dabur Hommade Ginger Garlic paste is made from freshest garlic paste and ground ginger paste in one hygienically sealed bag.',
    about2:
      'It is thick and grainy, providing the texture of freshly ground paste at Home.  ',
  },
];
import Scroll from '../../../components/innerscreens/Scroll';
import BakerDisplay from '../../../components/innerscreens/BakerDisplay';
import Contentheader from '../../../components/innerscreens/Contentheader';
import {useNavigation} from '@react-navigation/native';
export default function (props) {
  const navigation = useNavigation();

  return <Bsnack {...props} navigation={navigation} />;
}

class Bsnack extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View>
        <Contentheader />
        <View style={styles.headertwo}>
          <Text>BAKERY SNACKS</Text>
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
