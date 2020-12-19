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
  {scrolltext: 'Organic Vegetables'},
  {scrolltext: 'Organic Fruits'},
  {scrolltext: 'Organic Fruit & vegetables'},
];
const vegimages = [
  {
    image: require('../../../../assets/images/fruits/banana.jpg'),
    vegname: 'Tomato-local,organically Grown',
    kg: '500 g',
    mrp: 'Rs 27.50',
    screen: 'Fruits',
    actmrp: 'Rs 22',
    about:
      'Fresho brings to you an exquisite range of locally grown organic tomatoes, which are now available at bigbasket. These organic tomatoes are free from harmful pesticides and insecticides and thus have a very natural and tangy taste, which is attributed to its healthy soil growth. The ripe and firm tomatoes are a luscious addition to any meal.',
    about2:
      'Organic tomatoes are free from harmful chemicals and toxins, plus they are also rich in antioxidants that helps fight diseases like cancer. It also a healthy source of Vitamin C and A (being rich in beta-carotene) along with niacin and folate.',
  },
  {
    image: require('../../../../assets/images/fruits/coco.jpg'),
    vegname: 'Onion-Organically Grown',
    kg: '1 kg',
    screen: 'Fruits',
    mrp: 'Rs 28.75',
    actmrp: 'Rs 23',
    about:
      'It is organically grown and handpicked from farm Product image shown is for representation purpose only, the actually product may vary based on season, produce & availability.',
    about2:
      'Please note that fresh fruit and vegetables items will be billed based on exact weight during order processing (in case the actual weight exceeds the requested weight by more than 10%, you will be charged only for 10% excess weight).',
  },
  {
    image: require('../../../../assets/images/fruits/tender.jpg'),
    vegname: 'Ginger-Organically Grown',
    kg: '100 g',
    screen: 'Fruits',
    mrp: 'Rs 20',
    actmrp: 'Rs 16',
    about:
      'Fresho Organic products are organically grown and handpicked by expert.  Product image shown is for representation purpose only, the actually product may vary based on season, produce & availability. ',
    about2:
      'Please note that fresh fruit and vegetables items will be billed based on exact weight during order processing ',
  },
  {
    image: require('../../../../assets/images/fruits/pome.jpg'),
    vegname: 'Chilly-Green,Organically Grown',
    kg: '100 g',
    mrp: 'Rs 10',
    screen: 'Fruits',
    actmrp: 'Rs 8',
    about:
      'Fresho organically grown green chillies are meant to send shivers up your spine - literally! These chillies are grown in special organic farms, from where they are packaged in hygienic and clean environments to ensure purity. These green chillies are definitely a staple in your refrigerator to create aromatic delicacies.',
    about2:
      'Green chillies are a spicy treat but they are great for your health. It is rich in a variety of vitamins like A and C. Alongside, it is also laden with Capsaicin, which is known for boosting metabolism and also reducing hunger pangs, thus helping you lose weight.',
  },

  {
    image: require('../../../../assets/images/fruits/watermelon.jpg'),
    vegname: 'Coconut-Organically Grown',
    kg: '1 PC',
    mrp: 'Rs 36.25',
    actmrp: 'Rs 29',
    screen: 'Fruits',
    about:
      'It is organically grown and handpicked from farm Product image shown is for representation purpose only',
    about2:
      'Product image shown is for representation purpose only, the actually product may vary based on season, produce & availability.',
  },
];

import Scroll from '../../../components/innerscreens/Scroll';
import Display from '../../../components/innerscreens/DisplayList';
import Contentheader from '../../../components/innerscreens/Contentheader';
import {useNavigation} from '@react-navigation/native';
export default function (props) {
  const navigation = useNavigation();

  return <Organics {...props} navigation={navigation} />;
}
class Organics extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View>
        <Contentheader />
        <View style={styles.headertwo}>
          <Text>ORGANIC FRUITS & VEGETABLES</Text>
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
