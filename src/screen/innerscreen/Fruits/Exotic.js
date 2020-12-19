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
  {scrolltext: 'Exotic fruits'},
  {scrolltext: 'Exotic Vegetables'},
];
const vegimages = [
  {
    image: require('../../../../assets/images/exotic/mush.jpg'),

    vegname: 'Mushrooms-Button',
    kg: '200 g',
    mrp: 'Rs 61.25',
    actmrp: 'Rs 49',
    screen: 'Fruits',
    about:
      'Buttom mushrooms are very small sized mushrooms with smooth round caps and short stems. They have a mild flavour with a good texture that becomes more fragrant and meaty when cooked. ',
    about2:
      'Button mushrooms boost our immune system. They have anticancer benefits. They contain good amounts of riboflavin which is necessary to maintain oral health. They are very low in calories and rich in fiber. ',
  },
  {
    image: require('../../../../assets/images/exotic/corn.jpg'),
    vegname: 'Sweet Corn',
    kg: '2 PC',
    screen: 'Fruits',
    mrp: 'Rs 36.25',
    actmrp: 'Rs 29',
    about:
      'Wrapped in lime coloured husks with silk, sweet corn contains numerous yellow succulent kernels that have a starchy and doughy consistency. The skin pops out as you bite into it. ',
    about2:
      "Sweet corn is good for vision and heart health. It is a good source of energy and reduces joint pains. Suggested as a regular diet for pregnant women and Alzheimer's patients. ",
  },
  {
    image: require('../../../../assets/images/exotic/cucumber.jpg'),
    vegname: 'Cucumber-English',
    kg: '500 g',
    screen: 'Fruits',
    mrp: 'Rs 25',
    actmrp: 'Rs 20',
    about:
      'English cucumber is a variety of seedless cucumber that is longer and slimmer than other varieties and have a higher water content. They do not have a layer of wax on them, and the skin is tender when ripe. ',
    about2:
      'Cucumbers keep our body hydrated. Its hard skin has good amount of fiber and minerals. Eating cucumber improves digestion and reduces stress.  It reduces the risk of breast, ovarian, uterine and prostate cancers. The anti-inflammatory compounds in cucumbers help remove waste from the body and reduce skin irritation and it contains anti-wrinkling and anti-ageing properties as well.',
  },
  {
    image: require('../../../../assets/images/exotic/avac.jpg'),
    vegname: 'Avacado',
    kg: '500 g',
    screen: 'Fruits',
    mrp: 'Rs 123.75',
    actmrp: 'Rs 99',
    about:
      'Avocados are oval shaped fruits with a thick green and a bumpy, leathery outer skin. They have a unique-texture, with a creamy and light green coloured flesh that has a buttery flavour and special aroma. Avocados are also known as an alligator pear or butter fruit.',
    about2:
      'Avocados improve digestion and are good for heart health and vision. They are rich in vitamins like C, E, K, B6, Magnesium, potassium and healthy fat. It prevents osteoporosis, cancer and reduces the risk of depression. They are also good for pregnant women as they are rich in folate that prevents neural tube defects in infants.',
  },

  {
    image: require('../../../../assets/images/exotic/bro.jpg'),
    vegname: 'Broccoli',
    kg: '500 g',
    screen: 'Fruits',
    mrp: 'Rs 106.25',
    actmrp: 'Rs 85',
    about:
      'With a shape resembling that of a cauliflower, Brocollis have clusters of small, tight flower heads. These heads turn bright green on cooking and tastes slightly bitter.',
    about2:
      'Broccoli prevents cancer and reduces cholesterol. Maintains bone and heart health. Good for skin, eyes and has anti-ageing properties.',
  },
];

import Scroll from '../../../components/innerscreens/Scroll';
import Display from '../../../components/innerscreens/DisplayList';
import Contentheader from '../../../components/innerscreens/Contentheader';
import {useNavigation} from '@react-navigation/native';
export default function (props) {
  const navigation = useNavigation();

  return <Exotic {...props} navigation={navigation} />;
}

class Exotic extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View>
        <Contentheader />
        <View style={styles.headertwo}>
          <Text>EXOTIC FRUITS & VEGGIES</Text>
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
