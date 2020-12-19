import React from 'react';
import {Component} from 'react';
import {
  StyleSheet,
  Text,
  StatusBar,
  View,
  ScrollView,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import Header from '../components/header';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Address from './address';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
const headerbasket = [
  {
    text: 'Review Basket',
    color: '#689f39',
    name: 'menu',
  },
];
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
export default function (props) {
  const navigation = useNavigation();

  return <Basket {...props} navigation={navigation} />;
}

class Basket extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <>
        <StatusBar backgroundColor="#87BE56" baRstyle="light-content" />
        <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            contentContainerStyle={{flexGrow:1}}
            >
        <SafeAreaView
          style={{
            backgroundColor: 'white',
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
          }}>
             <LinearGradient
          colors={['#D0F04F', '#87BE56']}
          start={{x: 0, y: 1}}
          end={{x: 1, y: 1}}>
      <View style={{height:30}}/>
      </LinearGradient>
          <View>
            <Header data={headerbasket} />
          </View>
          <View style={styles.head}>
            <Text style={styles.headtxt1}>Fruits & Vegetables</Text>
            <Text style={{color: '#8f8f8f'}}>2 items</Text>
          </View>

          <View style={{backgroundColor: '#eeeeee'}}>
            <ScrollView
              contentInsetAdjustmentBehavior="automatic"
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{flexDirection: 'row', flexGrow: 1}}>
              <View style={styles.container}>
                <TouchableOpacity>
                  <View style={{}}>
                    <Image
                      style={styles.image1}
                      source={require('../../assets/basket/one.jpg')}
                    />
                  </View>
                </TouchableOpacity>
                <View style={styles.textbox}>
                  <Text style={styles.companyname}>Fresho - Onion</Text>
                  <Text style={styles.weight}>1 kg</Text>
                  <Text style={styles.cutprice}>Rs 37.7</Text>
                  <Text style={styles.price}>Rs 30</Text>

                  <View style={styles.cart}>
                    <TouchableOpacity style={styles.iconbox}>
                      <Entypo style={styles.icon} name="plus" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.itemno}>
                      <Text style={styles.itemtxt}>1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconbox}>
                      <Entypo style={styles.icon} name="minus" />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <View
                style={{
                  width: 100,
                  backgroundColor: '#36474f',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                  height: 135,
                  marginTop: 3,
                }}>
                <AntDesign
                  style={{color: 'white', fontSize: 25}}
                  name="delete"
                />
                <Text style={{color: '#87BE56'}}>Remove</Text>
                <Text style={{color: '#87BE56'}}>Item</Text>
              </View>
              <View
                style={{
                  width: 100,
                  backgroundColor: '#87BE56',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                  height: 135,
                  marginTop: 3,
                }}>
                <Ionicons
                  style={{color: 'white', fontSize: 25}}
                  name="bookmark-outline"
                />
                <Text style={{color: '#36474f'}}>Save For</Text>
                <Text style={{color: '#36474f'}}>Later</Text>
              </View>
            </ScrollView>
          </View>

          <View style={{backgroundColor: '#eeeeee', marginTop: -4}}>
            <ScrollView
              contentInsetAdjustmentBehavior="automatic"
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{flexDirection: 'row', flexGrow: 1}}>
              <View style={styles.container}>
                <TouchableOpacity>
                  <View style={{}}>
                    <Image
                      style={styles.image1}
                      source={require('../../assets/basket/two.jpg')}
                    />
                  </View>
                </TouchableOpacity>
                <View style={styles.textbox}>
                  <Text style={styles.companyname}>Fresho - Potato</Text>
                  <Text style={styles.weight}>1 kg</Text>
                  <Text style={styles.cutprice}>Rs 112.50</Text>
                  <Text style={styles.price}>Rs 90</Text>

                  <View style={styles.cart}>
                    <TouchableOpacity style={styles.iconbox}>
                      <Entypo style={styles.icon} name="plus" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.itemno}>
                      <Text style={styles.itemtxt}>2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconbox}>
                      <Entypo style={styles.icon} name="minus" />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <View
                style={{
                  width: 100,
                  backgroundColor: '#36474f',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                  height: 135,
                  marginTop: 3,
                }}>
                <AntDesign
                  style={{color: 'white', fontSize: 25}}
                  name="delete"
                />
                <Text style={{color: '#87BE56'}}>Remove</Text>
                <Text style={{color: '#87BE56'}}>Item</Text>
              </View>
              <View
                style={{
                  width: 100,
                  backgroundColor: '#87BE56',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                  height: 135,
                  marginTop: 3,
                }}>
                <Ionicons
                  style={{color: 'white', fontSize: 25}}
                  name="bookmark-outline"
                />
                <Text style={{color: '#36474f'}}>Save For</Text>
                <Text style={{color: '#36474f'}}>Later</Text>
              </View>
            </ScrollView>
          </View>

          <View style={styles.head}>
            <Text style={styles.headtxt1}>Bakery, Cakes & Diary</Text>
            <Text style={{color: '#8f8f8f'}}>1 item</Text>
          </View>

          <View style={{backgroundColor: '#eeeeee'}}>
            <ScrollView
              contentInsetAdjustmentBehavior="automatic"
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{flexDirection: 'row', flexGrow: 1}}>
              <View style={styles.container}>
                <TouchableOpacity>
                  <View style={{}}>
                    <Image
                      style={styles.image1}
                      source={require('../../assets/basket/three.jpg')}
                    />
                  </View>
                </TouchableOpacity>
                <View style={styles.textbox}>
                  <Text style={styles.companyname}>
                    Milky Mist - Paneer - Premium Fresh
                  </Text>
                  <Text style={{color: '#8F8F8F', fontSize: 12, marginTop: 0}}>
                    200 g - Pouch
                  </Text>
                  <View style={{height: 30}} />
                  <Text style={styles.price}>Rs 90</Text>

                  <View style={styles.cart}>
                    <TouchableOpacity style={styles.iconbox}>
                      <Entypo style={styles.icon} name="plus" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.itemno}>
                      <Text style={styles.itemtxt}>1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconbox}>
                      <Entypo style={styles.icon} name="minus" />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <View
                style={{
                  width: 100,
                  backgroundColor: '#36474f',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                  height: 135,
                  marginTop: 3,
                }}>
                <AntDesign
                  style={{color: 'white', fontSize: 25}}
                  name="delete"
                />
                <Text style={{color: '#87BE56'}}>Remove</Text>
                <Text style={{color: '#87BE56'}}>Item</Text>
              </View>
              <View
                style={{
                  width: 100,
                  backgroundColor: '#87BE56',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                  height: 135,
                  marginTop: 3,
                }}>
                <Ionicons
                  style={{color: 'white', fontSize: 25}}
                  name="bookmark-outline"
                />
                <Text style={{color: '#36474f'}}>Save For</Text>
                <Text style={{color: '#36474f'}}>Later</Text>
              </View>
            </ScrollView>
          </View>

          <View style={styles.head}>
            <Text style={styles.headtxt1}>Beauty & Hygiene</Text>
            <Text style={{color: '#8f8f8f'}}>1 item</Text>
          </View>

          <View style={{backgroundColor: '#eeeeee'}}>
            <ScrollView
              contentInsetAdjustmentBehavior="automatic"
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{flexDirection: 'row', flexGrow: 1}}>
              <View style={styles.container}>
                <TouchableOpacity>
                  <View style={{}}>
                    <Image
                      style={styles.image1}
                      source={require('../../assets/basket/four.jpg')}
                    />
                  </View>
                </TouchableOpacity>
                <View style={styles.textbox}>
                  <Text style={styles.companyname}>
                    Lakme - Kajal - Eyeconic, Twin Pack
                  </Text>
                  <Text style={{color: '#8F8F8F', fontSize: 12}}>2 pcs</Text>
                  <View style={{height: 30}} />
                  <Text style={styles.price}>Rs 310</Text>

                  <View style={styles.cart}>
                    <TouchableOpacity style={styles.iconbox}>
                      <Entypo style={styles.icon} name="plus" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.itemno}>
                      <Text style={styles.itemtxt}>1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconbox}>
                      <Entypo style={styles.icon} name="minus" />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <View
                style={{
                  width: 100,
                  backgroundColor: '#36474f',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                  height: 135,
                  marginTop: 3,
                }}>
                <AntDesign
                  style={{color: 'white', fontSize: 25}}
                  name="delete"
                />
                <Text style={{color: '#87BE56'}}>Remove</Text>
                <Text style={{color: '#87BE56'}}>Item</Text>
              </View>
              <View
                style={{
                  width: 100,
                  backgroundColor: '#87BE56',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                  height: 135,
                  marginTop: 3,
                }}>
                <Ionicons
                  style={{color: 'white', fontSize: 25}}
                  name="bookmark-outline"
                />
                <Text style={{color: '#36474f'}}>Save For</Text>
                <Text style={{color: '#36474f'}}>Later</Text>
              </View>
            </ScrollView>
          </View>
          <View
            style={{
              height: 55,
              backgroundColor: '#36474f',
              paddingHorizontal: 10,
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>
            <View
              style={{
                flexDirection: 'column',
                paddingTop: 6,
                marginLeft: 7,
              }}>
              <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15}}>
                Rs 520
              </Text>
              <Text style={{color: '#86be37', fontSize: 13, marginTop: 1}}>
                Saved Rs 30
              </Text>
            </View>
            <View
              style={{
                justifyContent: 'center',
                backgroundColor: '#87BE56',
                paddingHorizontal: 10,
                marginVertical: 10,
                borderRadius: 3,
              }}>
              <TouchableOpacity onPress={() => navigation.navigate('Address')}>
                <Text style={{color: '#36474f', fontSize: 16}}>CHECKOUT</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView></ScrollView>
      </>
    );
  }
}
const styles = StyleSheet.create({
  head: {
    height: 40,
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 10,
    backgroundColor: '#eeeeee',
    alignItems: 'center',
  },
  headtxt1: {color: '#4a4a4a', fontWeight: 'bold'},
  container: {
    backgroundColor: 'white',
    height: 135,
    width: Dimensions.get('window').width,
    flexDirection: 'row',
    marginTop: 2,
    flexWrap: 'wrap',
    padding: 15,
    paddingTop: 5,
    paddingLeft: 0,
    elevation: 2,
  },
  image1: {
    height: 125,
    marginLeft: -20,
    resizeMode: 'contain',
  },
  textbox: {
    backgroundColor: 'white',
    paddingLeft: 0,
    width: 210,
    marginLeft: -15,
  },
  companyname: {
    fontSize: 13,
    color: '#4a4a4a',
    paddingTop: 15,
    flexWrap: 'nowrap',
  },
  weight: {color: '#8F8F8F', fontSize: 12, marginTop: 2},
  cutprice: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    fontSize: 12,
    color: '#8F8F8F',
    paddingTop: 20,
  },
  price: {
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold',
    textDecorationStyle: 'solid',
    marginTop: 1,
  },
  cart: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: 150,
    marginTop: -25,
    marginLeft: 100,
  },
  iconbox: {
    borderColor: '#87BE56',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    borderWidth: 1.1,
    paddingHorizontal: 5,
  },
  icon: {
    color: '#87BE56',
    fontWeight: 'bold',
    fontSize: 18,
  },
  itemno: {
    color: '#87BE56',
    height: 30,
    width: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemtxt: {
    color: '#87BE56',
    fontWeight: 'bold',
    fontSize: 17,
  },
});
