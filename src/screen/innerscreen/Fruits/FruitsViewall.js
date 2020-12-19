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

  return <Fruitall {...props} navigation={navigation} />;
}
const horizontalscroll = [
  {scrolltext: 'Fresh Vegetables'},
  {scrolltext: 'Herbs & Seasoning'},
  {scrolltext: 'French fruits'},
  {scrolltext: 'Exotic Fruits & Veggies'},
  {scrolltext: 'Organic Fruits & Vegetables'},
  {scrolltext: 'Cuts & Sprouts'},
  {scrolltext: 'Flowers Bouquets,Bun..'},
];

const displaylist = [
  {
    image: require('../../../../assets/images/fruits/banana.jpg'),

    vegname: 'Tomato-local,organically Grown',
    kg: '500 g',
    mrp: 'Rs 27.50',
    actmrp: 'Rs 22',
    screen: 'Fruits',
    about:
      'Fresho brings to you an exquisite range of locally grown organic tomatoes, which are now available at bigbasket. These organic tomatoes are free from harmful pesticides and insecticides and thus have a very natural and tangy taste, which is attributed to its healthy soil growth. The ripe and firm tomatoes are a luscious addition to any meal.',
    about2:
      'Tomatoes can be sliced up and used in salads or eaten on their own. You can boil and puree them for pasta sauces, stews, soups or even Pizza (works well with herbs like basil). You can scoop their interiors and stuff it veggies or meat to make stuffed tomatoes and bake them in the oven.',
  },
  {
    image: require('../../../../assets/images/fruits/tender.jpg'),
    vegname: 'Ginger-Organically Grown',
    kg: '100 g',
    mrp: 'Rs 20',
    screen: 'Fruits',
    actmrp: 'Rs 16',
    about:
      'Fresho Organic products are organically grown and handpicked by expert. Product image shown is for representation purpose only, the actually product may vary based on season, produce & availability.',
    about2:
      'Please note that fresh fruit and vegetables items will be billed based on exact weight during order processing ',
  },

  {
    image: require('../../../../assets/images/vegImage/oni.jpg'),
    vegname: 'ONION',
    kg: '1 kg',
    mrp: 'Rs 30',
    screen: 'Fruits',
    actmrp: 'Rs 19',
    about:
      'Onion is a vegetable which is almost like a staple in Indian food. This is also known to be one of the essential ingredients of raw salads. They come in different colours like white, red or yellow and are quite in demand in cold salads and hot soups. ',
    about2:
      'Onions are known to have antiseptic, antimicrobial and antibiotic properties which help you to get rid of infections. If a piece of onion is inhaled, it can slow down or stop nose bleeding. Those who have sleeping disorders or insomnia can have a good night sleep if they have an onion every day.',
  },

  {
    image: require('../../../../assets/images/vegImage/carr.jpg'),
    vegname: 'CARROT-LOCAL',
    kg: '250 g',
    screen: 'Fruits',
    mrp: 'Rs 17.50',
    actmrp: 'Rs 14',
    about:
      'A popular sweet-tasting root vegetable, Carrots are narrow and cone shaped. They have thick, fleshy, deeply colored root, which grows underground, and feathery green leaves that emerge above the ground. While these greens are fresh tasting and slightly bitter, the carrot roots are crunchy textured with a sweet and minty aromatic taste. Fresho brings you the flavour and richness of the finest crispy and juicy carrots that are locally grown and the best of the region. ',
    about2:
      'Carrots provide the highest content of vitamin A of all the vegetables. Brightly orange colored carrots have pigments like carotenoids and flavonoids, that provide several antioxidants and act as a defense against cancer.They aid in mainta',
  },
  {
    image: require('../../../../assets/images/vegImage/lf.jpg'),
    vegname: 'LADIES-FINGER',
    kg: '500 g',
    screen: 'Fruits',
    mrp: 'Rs 20',
    actmrp: 'Rs 16',
    about:
      'Ladies finger is a green vegetable with a tip at the end and a lighter green head, which is inedibe and to be thrown away. It tastes mild and slightly grassy. ',
    about2:
      'Ladies finger aids in digestion as it contains prebiotic fiber and controls obesity and cholesterol.',
  },

  {
    image: require('../../../../assets/images/vegImage/sp.jpg'),
    vegname: 'PALAK',
    kg: '100 g',
    mrp: 'Rs 10',
    screen: 'Fruits',
    actmrp: 'Rs 8',
    about:
      'We deliver palak leaves in the best hygienic packages which can be directly stored in the refrigerator. They keep well for upto 4 days.Palaks can be eaten raw or cooked. Cooked palaks help in absorption of essential minerals in the body. They can be boiled and added to salads, pastas, soups or fried and used in dal and curries.',
    about2:
      'Palak contains low fat and cholesterol, but a good amount of fiber. They lower the risk of cancer and the occurrence of asthma.',
  },
];

import Scroll from '../../../components/innerscreens/Scroll';
import Display from '../../../components/innerscreens/DisplayList';
import Contentheader from '../../../components/innerscreens/Contentheader';

class Fruitall extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View>
        <StatusBar
          backgroundColor="#7CB944"
          barStyle="dark-content"></StatusBar>
        <View style={styles.header}>
          <EvilIcons
            style={{fontSize: 35, color: 'white', marginTop: 20, marginLeft: 5}}
            name="navicon"></EvilIcons>
          <Text style={{fontSize: 18, color: 'white', marginTop: 10}}>
            bigbaket
          </Text>
          <EvilIcons
            style={{fontSize: 35, color: 'white', marginTop: 20}}
            name="search"></EvilIcons>
        </View>
        <View style={styles.headertwo}>
          <Text>FRUITS & VEGETABLES</Text>
        </View>

        <View>
          <ScrollView horizontal={true} style={styles.hscrollview}>
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
          <Display data={displaylist}></Display>
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
