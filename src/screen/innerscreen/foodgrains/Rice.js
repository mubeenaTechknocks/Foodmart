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
  {scrolltext: 'Boiles Rice & Steam Rice'},
  {scrolltext: 'Raw Rice'},
  {scrolltext: 'Poha,Sabudana & Murmura'},
  {scrolltext: 'Basumati Rice'},
];
const displaylist = [
  {
    image: require('../../../../assets/images/food/rice/basmati.jpg'),

    brand: 'BB ROYAL',
    name: 'Basmati rice-Rozana Premium',
    star: '3.9',
    screen: 'Foodgrains',
    rating: '1782 Ratings',
    kg: '5 KG -Pouch',
    mrp: 'Rs 510',
    actmrp: 'Rs 381',
    about:
      'India Gate Basmati Rice Feast Rozzana is defined by its long grains and amazing aromatic flavour. Having this rice is truly having a feast rozzana (a daily feast); combine it with your veggies and serve a nice pulao',
    about2:
      'Basmati rice has complex carbohydrates which mean that it can be digested easily and can be considered as an instant energy source. Rice has little protein, but the protein is rich in eight amino acids; plus as this is a gluten-free grain, people who are gluten-intolerant can consume this rice without problem.',
  },
  {
    image: require('../../../../assets/images/food/rice/poha.jpg'),
    brand: 'BB ROYAL',
    name: 'Poha/ Avalakki/Aval/Chivda -Thick',
    star: '4.1',
    screen: 'Foodgrains',
    rating: '258744 Ratings',
    kg: '1kg -Pouch',
    mrp: 'Rs 80',
    actmrp: 'Rs 49',
    about:
      "Avalakki, also known as flattened rice or beaten rice, as the name suggests are flakes made by flattening dehusked rice. It considered healthy because it doesn't contain any cholesterol and saturated fat. It could be used to make various breakfasts as well as snack dishes. ",
    about2:
      'It is a great snack for weight-watchers as it is cholesterol and fat free, also making them heart-healthy. It is easily digestible and filling making it light yet satisfying meals.',
  },

  {
    image: require('../../../../assets/images/food/rice/riceraw.jpg'),

    brand: 'BB POPULAR',
    name: 'Rice-Raw, Sona Masoori',
    star: '4.1',
    screen: 'Foodgrains',
    rating: '17314 Ratings',
    kg: '25 kg-(6-11 Months O...)',
    mrp: 'Rs 1625',
    actmrp: 'Rs 1186',
    about:
      'Sona masonry rice is softer that other assortment white rice and has got a distinctive flavor and taste. It will have more delectable and yummy element in it. It makes the meal yummy and healthy for all age group. It has an exceptional source of protein and high in the nutrients. ',
    about2:
      'Sona masoori rice does provide some protein. Sona masoori rice is both fat free and sodium free. Carbohydrates are an essential nutrient which provide your body with energy and promote the proper functioning of your heart, brain, liver and kidneys. A moderate amounts of low-fiber grains fit within a healthy diet.',
  },

  {
    image: require('../../../../assets/images/food/rice/rawrice.jpg'),
    brand: 'BB ROYAL',
    name: 'Raw rice-Sona Masoori',
    star: '4.2',
    screen: 'Foodgrains',
    rating: '7642 Ratings',
    kg: '10 kg(12-17 Months...',
    mrp: 'Rs 150',
    actmrp: 'Rs 79',
    about:
      'Organic Sonamasuri Rice is famous for being a staple food in the Southern regions of India. ',
    about2:
      ' It is aromatic, lightweight and considered to be of the best quality. It is perfect for preparing dishes like sweet pongal, fried rice, biryani, or can also be used for daily cooking.',
  },
  {
    image: require('../../../../assets/images/food/rice/idlirice.jpg'),
    brand: 'BB ROYAL',
    name: 'Idli Rice',
    star: '4',
    screen: 'Foodgrains',
    rating: ' 4720 Ratings',
    kg: '10 kg-Bag',
    mrp: 'Rs 570',
    actmrp: 'Rs 399',
    about:
      'Idli Rice Is Wholesome As It Is A Rich Supply Of Fibers And Is Effortless To Digest And Strong. It Is A Great Supply Of Carbohydrates And Proteins. They Are Light And It Can Create In Jiffy With Minimal Ingredients.',
    about2:
      ' It Makes Soft, Flaky Rice Flour Idli Flavor Yummy With Any Chutney, Sambar Or Even Podi. It Is Desired For Making Dosas And Idlis, As Well As Kanji For Babies And Elders. ',
  },
  {
    image: require('../../../../assets/images/food/rice/basmati.jpg'),
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
      'Ordinary Sooji is very tasty to prepare and enjoy it. It comes to use as the key ingredient in different Indian dishes. It is utilized widely in the kitchen for preparing a number of dishes. ',
    about2:
      'It is rich in fiber and very wholesome. It makes a very healthful and is very strong and good for people who are on diet. It is hygienically processed and is guaranteed for rich flavor and taste. ',
  },
];

import Scroll from '../../../components/innerscreens/Scroll';

import BakerDisplay from '../../../components/innerscreens/BakerDisplay';
import Contentheader from '../../../components/innerscreens/Contentheader';

import {useNavigation} from '@react-navigation/native';
export default function (props) {
  const navigation = useNavigation();

  return <Rice {...props} navigation={navigation} />;
}
class Rice extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View>
        <Contentheader />
        <View style={styles.headertwo}>
          <Text>RICE & RICE PRODUCTS</Text>
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
