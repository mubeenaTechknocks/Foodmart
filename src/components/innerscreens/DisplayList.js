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
import {Dimensions} from 'react-native';
import greendot from '../../../assets/images/greendot.png';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

import {useNavigation} from '@react-navigation/native';
export default function (props) {
  const navigation = useNavigation();

  return <DisplayList {...props} navigation={navigation} />;
}
class DisplayList extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        {this.props.data.map((data) => (
          <View style={styles.displaybox}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Productd', {
                  price2: data.actmrp,
                  price: data.mrp,
                  name: data.vegname,
                  productImage: data.image,
                  about1: data.about,
                  about2: data.about2,
                  screen: data.screen,
                })
              }>
              <Image
                style={{height: 120, width: 120, resizeMode: 'contain'}}
                source={data.image}></Image>
            </TouchableOpacity>
            <View style={styles.descriptionview}>
              <Text style={{fontSize: 14, color: '#8F8F8F'}}>FRESHO</Text>
              <Text style={{fontSize: 13}}>{data.vegname}</Text>

              <TouchableOpacity style={styles.inputbox}>
                <Text style={{color: '#8F8F8F'}}>{data.kg}</Text>
                <EvilIcons
                  style={{fontSize: 25, color: '#8F8F8F'}}
                  name="chevron-down"></EvilIcons>
              </TouchableOpacity>
              <View style={{flexDirection: 'row', marginTop: 10}}>
                <Text style={{color: '#8F8F8F', fontSize: 12}}>MRP:</Text>
                <Text style={styles.textmrp}>{data.mrp}</Text>
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text>{data.actmrp}</Text>
                <TouchableOpacity style={styles.add}>
                  <Text style={{color: 'white'}}>ADD</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  displaybox: {
    backgroundColor: 'white',
    height: 180,
    width: Dimensions.get('window').width,
    flexDirection: 'row',
    marginTop: 2,
    flexWrap: 'wrap',
    padding: 30,
  },

  descriptionview: {
    backgroundColor: 'white',
    paddingLeft: 30,
    width: 180,
  },
  inputbox: {
    height: 30,
    width: 160,
    borderWidth: 0.5,
    borderColor: '#8F8F8F',
    borderRadius: 2,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
  },
  textmrp: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    fontSize: 13,
    color: '#8F8F8F',
  },
  add: {
    backgroundColor: '#E76067',
    height: 30,
    width: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
  },
});
