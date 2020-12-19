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
  {scrolltext: 'Almonds'},
  {scrolltext: 'Cashews'},
  {scrolltext: 'Raisins'},
  {scrolltext: 'Other Dry Fruits'},
  {scrolltext: 'Mukhwas'},
];

const displaylist = [
  {
    image: require('../../../../assets/images/food/dryfruits/one.jpg'),
    brand: 'BB ROYAL',
    name: 'Almond/Badam-Californian,Giri',
    star: '4',
    screen: 'Foodgrains',
    rating: '13482 Rating',
    kg: '200 gm-Pouch',
    mrp: '240',
    actmrp: 'Rs 180',
    about:
      'Almonds are light brown-skinned, firm, ripe seeds of the almond fruit. They have a wealthy yet subtle bitter-sweet flavour. These are riches of nutrients, particularly dietary fibre, mono-unsaturated fatty acids, and protein, B complex vitamins.',
    about2:
      'Also, it is wealthy in vitamin E and minerals such as potassium, zinc, iron, calcium, selenium, manganese.',
  },
  {
    image: require('../../../../assets/images/food/dryfruits/two.jpg'),
    brand: 'BB ROYAL',
    name: 'Organic-Almond/Badam',
    star: '3.9',
    screen: 'Foodgrains',
    rating: '3184 Rating',
    kg: '1kg',
    mrp: '1599',
    actmrp: 'Rs 1200',
    about:
      'BB Royal Organic Almonds are of Indian Origin almonds and it’s sourced from the certified organic farms.',
    about2:
      ' Naturally, Indian origin almonds vary in size, grade, texture, colour and taste when compared to imported almonds.',
  },

  {
    image: require('../../../../assets/images/food/dryfruits/three.jpg'),
    brand: 'BB ROYAL',
    name: 'Organic-Cashew/Kaju Whole Premium',
    star: '4.3',
    screen: 'Foodgrains',
    rating: '33571 Rating',
    kg: '500 g',
    mrp: '899',
    actmrp: 'Rs 649',
    about:
      'Cashew Whole is enhanced with high calorie and fat content. It contains several health advantages because of their rich mineral content.',
    about2:
      ' It is rich in iron, zinc, copper and manganese for metabolism. It is enormous for adding a creamy texture to your dishes with no overpowering other flavours. You can also enjoy the entire cashews as a snack on their own',
  },

  {
    image: require('../../../../assets/images/food/dryfruits/four.jpg'),
    brand: 'BB POPULAR',
    name: 'Cashew/Kaju-Whole',
    star: '4',
    screen: 'Foodgrains',
    rating: '11905 Rating',
    kg: '200 g',
    mrp: '300',
    actmrp: 'Rs 208',
    about:
      'Cashew Whole is enhanced with high calorie and fat content. It contains several health advantages because of their rich mineral content. ',
    about2:
      ' It is rich in iron, zinc, copper and manganese for metabolism. It is enormous for adding a creamy texture to your dishes with no overpowering other flavours. You can also enjoy the entire cashews as a snack on their own',
  },
];

import Scroll from '../../../components/innerscreens/Scroll';

import BakerDisplay from '../../../components/innerscreens/BakerDisplay';
import Contentheader from '../../../components/innerscreens/Contentheader';

import {useNavigation} from '@react-navigation/native';
export default function (props) {
  const navigation = useNavigation();

  return <Dry_Fruits {...props} navigation={navigation} />;
}
class Dry_Fruits extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View>
        <Contentheader />
        <View style={styles.headertwo}>
          <Text>DRY FRUITS</Text>
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
