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
    image: require('../../../../assets/images/Bakery/curd/one.jpg'),
    brand: 'MILKY MIST',
    name: 'Curd - Farm Fresh',
    star: '4',
    screen: 'Bakery',
    rating: '6220 Ratings',
    kg: '500 g-Pouch',
    mrp: '37.50',
    actmrp: 'Rs 35',
    about:
      'Milky Mist Curd Farm Fresh is a rich supply of calcium and proteins. Prepared from better quality pasteurized toned milk to provide you the right width and texture. The live and active bacterial culture included in Milky Mist Curd hells digestion and lets you live a strong active life.',
    about2:
      'Contains (per 100 g)Calories 61Total Fat 3 gCholesterol 0 gSodium 0 gPotassium 0 gTotal Carbs 4 gDietary Fiber 0 gSugars 0 gProtein 4 g',
  },
  {
    image: require('../../../../assets/images/Bakery/curd/two.jpg'),
    brand: 'AMUL',
    name: 'Masti Buttermilk -Spice',
    star: '4.2',
    screen: 'Bakery',
    rating: '10947 Ratings',
    kg: '1 l',
    mrp: '50',
    actmrp: 'Rs 47',
    about:
      'Milky Mist Curd Farm Fresh is a rich supply of calcium and proteins. Prepared from better quality pasteurized toned milk to provide you the right width and texture. The live and active bacterial culture included in Milky Mist Curd hells digestion and lets you live a strong active life.',
    about2:
      'Contains (per 100 g)Calories 61Total Fat 3 gCholesterol 0 gSodium 0 gPotassium 0 gTotal Carbs 4 gDietary Fiber 0 gSugars 0 gProtein 4 g',
  },

  {
    image: require('../../../../assets/images/Bakery/curd/three.jpg'),
    brand: 'MILKY MIST',
    name: 'Natural Set Curd',
    star: '4',
    screen: 'Bakery',
    rating: '1648 Ratings',
    kg: '1 kg- Cup',
    mrp: '100',
    actmrp: 'Rs 95',
    about:
      'Milky Mist Curd Farm Fresh is a rich supply of calcium and proteins. Prepared from better quality pasteurized toned milk to provide you the right width and texture. The live and active bacterial culture included in Milky Mist Curd hells digestion and lets you live a strong active life.',
    about2:
      'Contains (per 100 g)Calories 61Total Fat 3 gCholesterol 0 gSodium 0 gPotassium 0 gTotal Carbs 4 gDietary Fiber 0 gSugars 0 gProtein 4 g',
  },

  {
    image: require('../../../../assets/images/Bakery/curd/four.jpg'),
    brand: 'MOTHER DAIRY',
    name: 'Misti Doi',
    star: '4.1',
    screen: 'Bakery',
    rating: '1350 Ratings',
    kg: '85 g -  Cup',
    mrp: '22.50',
    actmrp: 'Rs 20',
    about:
      'Milky Mist Curd Farm Fresh is a rich supply of calcium and proteins. Prepared from better quality pasteurized toned milk to provide you the right width and texture. The live and active bacterial culture included in Milky Mist Curd hells digestion and lets you live a strong active life.',
    about2:
      'Contains (per 100 g)Calories 61Total Fat 3 gCholesterol 0 gSodium 0 gPotassium 0 gTotal Carbs 4 gDietary Fiber 0 gSugars 0 gProtein 4 g',
  },

  {
    image: require('../../../../assets/images/Bakery/curd/one.jpg'),
    brand: 'MILKY MIST',
    name: 'Fruit Yogurt - BlueBerry',
    star: '3.8',
    screen: 'Bakery',
    rating: '1036 Ratings',
    kg: '100 g',
    mrp: '32.50',
    actmrp: 'Rs 30',
    about:
      'Milky Mist Curd Farm Fresh is a rich supply of calcium and proteins. Prepared from better quality pasteurized toned milk to provide you the right width and texture. The live and active bacterial culture included in Milky Mist Curd hells digestion and lets you live a strong active life.',
    about2:
      'Contains (per 100 g)Calories 61Total Fat 3 gCholesterol 0 gSodium 0 gPotassium 0 gTotal Carbs 4 gDietary Fiber 0 gSugars 0 gProtein 4 g',
  },
  {
    image: require('../../../../assets/images/Bakery/curd/one.jpg'),
    brand: 'MOTHER DAIRY',
    name: 'Misti Doi',
    star: '4.1',
    screen: 'Bakery',
    rating: '1350 Ratings',
    kg: '85 g -  Cup',
    mrp: '22.50',
    actmrp: 'Rs 20',
    about:
      'Milky Mist Curd Farm Fresh is a rich supply of calcium and proteins. Prepared from better quality pasteurized toned milk to provide you the right width and texture. The live and active bacterial culture included in Milky Mist Curd hells digestion and lets you live a strong active life.',
    about2:
      'Contains (per 100 g)Calories 61Total Fat 3 gCholesterol 0 gSodium 0 gPotassium 0 gTotal Carbs 4 gDietary Fiber 0 gSugars 0 gProtein 4 g',
  },
];
import Scroll from '../../../components/innerscreens/Scroll';

import BakerDisplay from '../../../components/innerscreens/BakerDisplay';
import Contentheader from '../../../components/innerscreens/Contentheader';

import {useNavigation} from '@react-navigation/native';
export default function (props) {
  const navigation = useNavigation();

  return <Curd {...props} navigation={navigation} />;
}

class Curd extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View>
        <Contentheader />
        <View style={styles.headertwo}>
          <Text>CURD AND BUTTER MILK</Text>
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
