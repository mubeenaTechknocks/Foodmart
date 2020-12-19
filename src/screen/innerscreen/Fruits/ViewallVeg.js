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

  return <Vegetablesf {...props} navigation={navigation} />;
}
const horizontalscroll = [
  {scrolltext: 'Fresh vegetables'},
  {scrolltext: 'FreshFruits'},
  {scrolltext: 'Herbs & seasonings'},
  {scrolltext: 'Exotic Fruits & Veggies'},
];
const vegimages = [
  {
    image: require('../../../../assets/images/fruits/pome.jpg'),
    vegname: 'pomegranate',
    kg: '4 PCS-(approx.800 to ..)',
    mrp: 'Rs 161.25',
    screen: 'Fruits',
    actmrp: 'Rs 129',
    about:
      'With ruby color and an intense floral, sweet-tart flavor, the pomegranate delivers both taste and beauty. You can remove the skin and the membranes to get at the delicious fruit with nutty seeds. Fresho Pomegranates are finely sorted and graded to deliver the best tasting pomegranates to you. ',
    about2:
      'Whole fruit can be refrigirated upto 2 months. Fresh seeds and juice can be refrigerated for upto 5 days.',
  },

  {
    image: require('../../../../assets/images/exotic/corn.jpg'),
    vegname: 'Garlic Peeled',
    kg: '100 g-Multipack',
    mrp: 'Rs 138.75',
    actmrp: 'Rs 111',
    screen: 'Fruits',
    about:
      'Garlic is made of several heads wrapped in thin whitish layers. They are firm and have a mild flavour. Once crushed, they emit a strong and pungent aroma.',
    about2:
      'Garlic combats sickness, including the common cold and cough. They reduce blood pressure, the risk of heart diseases and kills intestinal worms and harmful bacteria. Additionally garlics improve athletic performance.',
  },
  {
    image: require('../../../../assets/images/exotic/mush.jpg'),
    vegname: 'Mushrooms-Button',
    kg: '200 g',
    mrp: 'Rs 61.25',
    screen: 'Fruits',
    actmrp: 'Rs 49',
    about:
      'Buttom mushrooms are very small sized mushrooms with smooth round caps and short stems. They have a mild flavour with a good texture that becomes more fragrant and meaty when cooked. ',
    about2:
      'Button mushrooms boost our immune system. They have anticancer benefits. They contain good amounts of riboflavin which is necessary to maintain oral health. They are very low in calories and rich in fiber.',
  },

  {
    image: require('../../../../assets/images/sprouts/ten.jpg'),
    vegname: 'Tender Coconut-Medium',
    kg: '1PC',
    screen: 'Fruits',
    mrp: 'Rs46.25',
    actmrp: 'Rs 37',
    about:
      'Tender Coconut is a minimally processed young coconut & is fresh,natural and healthy.Its a pure & tasty energy drink with rich vitamins,minerals,glucose,fructose,proteins.It has high potassium content & contains antioxidants.',
    about2:
      ".Other biological active ingredients include L-arginine,ascorbic acid & magnesium.Its a nature's gift for mankind. ",
  },
  {
    image: require('../../../../assets/images/sprouts/tend.jpg'),
    vegname: 'Tender Coconut-Small',
    kg: '1 PC',
    screen: 'Fruits',
    mrp: 'Rs 45',
    actmrp: 'Rs 36',
    about:
      'Tender Coconut is a minimally processed young coconut & is fresh,natural and healthy.Its a pure & tasty energy drink with rich vitamins,minerals,glucose,fructose,proteins.It has high potassium content & contains antioxidants.',
    about2:
      ".Other biological active ingredients include L-arginine,ascorbic acid & magnesium.Its a nature's gift for mankind. ",
  },
];

import Scroll from '../../../components/innerscreens/Scroll';
import Display from '../../../components/innerscreens/DisplayList';
import Contentheader from '../../../components/innerscreens/Contentheader';

class Vegetablesf extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View>
        <Contentheader />
        <View style={styles.headertwo}>
          <Text>FRESH FRUITS & VEGETABLES</Text>
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
