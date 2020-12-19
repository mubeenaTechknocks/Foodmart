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

  return <Fresh_fruits {...props} navigation={navigation} />;
}
const horizontalscroll = [
  {scrolltext: 'Mangoes'},
  {scrolltext: 'Kiwi,Melcon,Citrus Fruit'},
  {scrolltext: 'Apples & Pomegranate'},
  {scrolltext: 'Banana,Sapota & Papaya'},
  {scrolltext: 'Seasonal Fruits'},
];
const vegimages = [
  {
    image: require('../../../../assets/images/fruits/pome.jpg'),
    vegname: 'pomegranate',
    kg: '4 PCS-(approx.800 to ..)',
    mrp: 'Rs 148.75',
    actmrp: 'Rs 119',
    screen: 'Fruits',
    about:
      'With ruby color and an intense floral, sweet-tart flavor, the pomegranate delivers both taste and beauty. You can remove the skin and the membranes to get at the delicious fruit with nutty seeds. Fresho Pomegranates are finely sorted and graded to deliver the best tasting pomegranates to you.',
    about2:
      'Pomegranate juice lowers bad cholesterol and raises good cholesterol. Reduces the risk of heart stoke. Gives a boost of energy and freshness. So, this is specially recommended for women during menopause. Good for pregnant women as it prevents brain damage in infants.',
  },

  {
    image: require('../../../../assets/images/fruits/banana.jpg'),
    vegname: 'BANANA-Yelakki',
    kg: '1 kg',
    mrp: 'Rs 105',
    screen: 'Fruits',
    actmrp: 'Rs 65',
    about:
      'Tiny and small sized, this variety is called Yelakki in Bangalore and Elaichi in Mumbai. Despite its small size, they are naturally flavoured, aromatic and sweeter compared to regular bananas. Yelakki bananas are around 3- 4 inches long and contain a thinner skin and better shelf life than Robusta bananas. ',
    about2:
      'One banana supplies 30 percent of the daily vitamin B6 requirement and is rich in vitamin C and potassium. It reduces appetite and promotes weight loss, while also boosting the immune system and keeping the bones strong. It is very good for pregnant women and athletes.',
  },
  {
    image: require('../../../../assets/images/fruits/watermelon.jpg'),
    vegname: 'Watermelon-Small',
    kg: '1 PC-1.7 -2.5 kg',
    mrp: 'Rs 36.25',
    screen: 'Fruits',
    actmrp: 'Rs 16.80',
    about:
      'With greenish black to smooth dark green surface, Fresho watermelons are globular in shape and are freshly picked for you directly from our farmers .The juicy, sweet and grainy textured flesh is filled with 12-14% of sugar content, making it a healthy alternative to sugary carbonated drinks. Flesh colour of these watermelons are pink to red with dark brown/black seeds.',
    about2:
      'Rich in anti-oxidant flavonoids that protects against prostate, breast, colon, pancreatic and lung cancers. They are an excellent source of lycopene which protects skin against harmful UV rays. It is also a great source for A, C, B-complex vitamins, iron and fiber which boosts body metabolism. ',
  },
  {
    image: require('../../../../assets/images/fruits/coco.jpg'),
    vegname: 'Coconut - Medium',
    kg: '1 PC',
    screen: 'Fruits',
    mrp: 'Rs 32.50',
    actmrp: 'Rs 26',
    about:
      'Coconut is a very stable fruit. It is a mature fruit of the cocos nucifera palm. The fruit is nearly spherical to oval in shape and measure between 5-10 inches in width. Its rough external husk is light green, and turns gray as the nut grown-up. The husk is about 1-2 inches in thickness and made of tough fibers. ',
    about2:
      'Coconut is to stabilizing blood sugar, lowering cholesterol, healing, hydration and even replacing blood plasma in an emergency.',
  },
  {
    image: require('../../../../assets/images/fruits/tender.jpg'),
    vegname: 'Tender Coconut -Medium',
    kg: '1 PC',
    mrp: 'Rs 46.25',
    actmrp: 'Rs 37',
    screen: 'Fruits',
    about:
      'Young, fresh and healthy tender coconuts are a pure, tasty and nutritious energy drink that keeps body hydrated round the clock. Tender coconut is the most refreshing drink and best to quench your thirst in the summer.',
    about2:
      'Coconuts are a source of quick energy and refreshment. They improve digestion and immune system health.They also prevent heart diseases by increasing good cholesterol and protect cells from cancer and ageing as they contain Cytokinin.',
  },
];

import Scroll from '../../../components/innerscreens/Scroll';
import Display from '../../../components/innerscreens/DisplayList';
import Contentheader from '../../../components/innerscreens/Contentheader';

class Fresh_fruits extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View>
        <Contentheader />
        <View style={styles.headertwo}>
          <Text>FRESH FRUITS</Text>
        </View>

        <ScrollView horizontal={true} style={styles.scrollview}>
          <Scroll data={horizontalscroll}></Scroll>
        </ScrollView>

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
    backgroundColor: '#689f39',
  },
  filter: {
    height: 40,
    width: Dimensions.get('window').width,
    backgroundColor: '#D7ECC5',
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
