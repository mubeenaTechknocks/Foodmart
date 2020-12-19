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

  return <Sprouts {...props} navigation={navigation} />;
}
const horizontalscroll = [
  {scrolltext: 'cut Fruits,Tender coconut'},
  {scrolltext: 'Cut & Peeled Veggies'},
  {scrolltext: 'Fresh Salads & sprouts'},
  {scrolltext: 'Recipe packs'},
];
const vegimages = [
  {
    image: require('../../../../assets/images/sprouts/ab.jpg'),
    vegname: 'Sprouts-Mixed Gram',
    kg: '200 g',
    mrp: 'Rs 33.75',
    screen: 'Fruits',
    actmrp: 'Rs 27',
    about:
      'Sprouts Mixed gram are fine for health which contains greater concentration of nutrients like Vitamin E, A, C & K, iron, potassium, phyto chemicals, bioflavonoids, antioxidants, protein and chemo-protectants. It can be served at any point throughout the meal. Sprouts are referred to as medicine because of their health promoting properties. ',
    about2:
      'Mixed gram sprouts ensure blood purification and strengthens the immune system to protect against several diseases. It also helps to alleviate itchy scalp because of its anti-fungal properties. It contains omega 3 fatty acids which are vital for the nourishment of hair follicles.',
  },

  {
    image: require('../../../../assets/images/exotic/corn.jpg'),
    vegname: 'Garlic Peeled',
    kg: '100 g-Multipack',
    mrp: 'Rs 138.75',
    actmrp: 'Rs 111',
    screen: 'Fruits',
    about:
      'With garlic supplementation significantly reducing aortic plaque deposits of cholesterol-fed rabbits. Supplementation with garlic extract inhibited vascular calcification in human patients with high blood cholesterol. The known vasodilative effect of garlic is possibly caused by catabolism of garlic-derived polysulfides to hydrogen sulfide in red blood cells (RBCs), a reaction that is dependent on reduced thiols in or on the RBC membrane.',
    about2:
      'Please note that fresh fruit and vegetables items will be billed based on exact weight during order processing (in case the actual weight exceeds the requested weight by more than 10%, you will be charged only for 10% excess weight).',
  },
  {
    image: require('../../../../assets/images/sprouts/co.jpg'),
    vegname: 'Baby Corn-Peeled',
    kg: '250 g',
    screen: 'Fruits',
    mrp: 'Rs 51.25',
    actmrp: 'Rs 41',
    about:
      "Baby corns are small in size and handpicked before they mature. We deliver them to you fresh and peeled, so no more postponing that corn dish you wanted to make because you didn't get the time. ",
    about2:
      'In addition to its delicious sweet taste, baby corns are high in dietary fiber, low in fat and a great source of essential nutrients. They are also high in potassium and folic acid.',
  },

  {
    image: require('../../../../assets/images/sprouts/ten.jpg'),
    vegname: 'Tender Coconut-Medium',
    kg: '1PC',
    screen: 'Fruits',
    mrp: 'Rs46.25',
    actmrp: 'Rs 37',
    about:
      'Dry Copra/Coconut is rich in dietary fibre and it helps in having a healthy heart. It improves brain function, boosts the immune system, reduces anaemia and the risk of cancer.',
    about2:
      'Product image shown is for representation purpose only, actual product may vary based on season, production and availability.',
  },
];

import Scroll from '../../../components/innerscreens/Scroll';
import Display from '../../../components/innerscreens/DisplayList';
import Contentheader from '../../../components/innerscreens/Contentheader';

class Sprouts extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View>
        <Contentheader />
        <View style={styles.headertwo}>
          <Text>CUTS & SPROUTS</Text>
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
