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

  return <Basket2 {...props} navigation={navigation} />;
}

class Basket2 extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <>
        <StatusBar backgroundColor="#87BE56" baRstyle="light-content" />
       
        <SafeAreaView
          style={{
            backgroundColor: 'white',
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
          }}>
             {/* <LinearGradient
          colors={['#D0F04F', '#87BE56']}
          start={{x: 0, y: 1}}
          end={{x: 1, y: 1}}>
      <View style={{height:20}}/>
      </LinearGradient> */}
          <View>
            <Header data={headerbasket} />
          </View>

          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            contentContainerStyle={{flexGrow:1}}
            >
              <View>
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
             <View style={{ backgroundColor: 'white',height:hp("18%"),width: "100%",flexDirection: 'row',marginTop: hp(".5%"),padding: wp("1%"),elevation: 2,paddingRight:0,paddingBottom:hp("2%")}}>
              <View  style={{ justifyContent:"space-between",flexDirection:"row",width:wp("100%"),paddingRight:wp("3%")}}>
                  <Image style={{height:hp("15%"),marginLeft: -wp("8%"),resizeMode: 'contain',marginTop:hp("1.2%")}}
                      source={require('../../assets/basket/one.jpg')}
                  />
                  <View style={{flexDirection:"column",backgroundColor:"white",marginLeft: -wp("8%"),marginTop: hp("3%")}}>
                    <Text style={{fontSize: wp("4.5%"),color: '#4a4a4a',}}>
                      Fresho - Onion
                    </Text>
                    <Text style={{color: '#8F8F8F', fontSize: wp("3.5%"), marginTop: hp(".5%")}}>
                    1 kg
                    </Text>
                    <Text style={{ textDecorationLine: 'line-through',marginTop: hp("1%"),textDecorationStyle: 'solid',fontSize: wp("3%"),color: '#8F8F8F',}}>
                      Rs 37.7
                    </Text>
                    <Text style={{ color: 'black',fontSize: wp("4.1%"),fontWeight: 'bold',textDecorationStyle: 'solid',marginTop: 1,}}>
                      Rs 30
                    </Text>
                  </View>
                  <View style={{justifyContent:"flex-end",marginLeft:wp("3%")}}>
                  <View style={{ flexDirection: 'row',justifyContent: 'flex-end',backgroundColor:"white",height:hp("6%"),justifyContent:"center",alignItems:"center"}}>
                    <TouchableOpacity style={styles.iconbox}>
                       <Entypo style={styles.icon} name="plus" />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ color: '#87BE56',justifyContent: 'center',alignItems: 'center',}}>
                     <Text style={{color: '#87BE56', fontWeight: 'bold', fontSize: wp("4"),paddingHorizontal:wp("2%")}}>1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconbox}>
                       <Entypo style={styles.icon} name="minus" />
                    </TouchableOpacity>
                  </View>
              </View>
              </View>

              <View
                style={{ width: wp("25%"), backgroundColor: '#36474f',justifyContent: 'center',alignItems: 'center',flexDirection: 'column',height: hp("18%"),marginTop:-hp(".5%")}}>
                <AntDesign
                  style={{color: 'white', fontSize: hp("3.5%")}}
                  name="delete"
                />
                <Text style={{color: '#87BE56',fontSize: hp("2.6%")}}>Remove</Text>
                <Text style={{color: '#87BE56',fontSize: hp("2.6%")}}>Item</Text>
              </View>
              <View
                style={{
                  width: wp("25%"),marginTop:-hp(".5%"),
                  backgroundColor: '#87BE56',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                  height: hp("18%"),
                }}>
                <Ionicons
                  style={{color: 'white', fontSize: hp("3.5%")}}
                  name="bookmark-outline"
                />
                <Text style={{color: '#36474f',fontSize: hp("2.6%")}}>Save For</Text>
                <Text style={{color: '#36474f',fontSize: hp("2.6%")}}>Later</Text>
              </View>
          </View>
      </ScrollView>
  </View>


  <View style={{backgroundColor: '#eeeeee'}}>
            <ScrollView
              contentInsetAdjustmentBehavior="automatic"
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{flexDirection: 'row', flexGrow: 1}}>
             <View style={{ backgroundColor: 'white',height:hp("18%"),width: "100%",flexDirection: 'row',marginTop: hp(".5%"),padding: wp("1%"),elevation: 2,paddingRight:0,paddingBottom:hp("2%")}}>
              <View  style={{ justifyContent:"space-between",flexDirection:"row",width:wp("100%"),paddingRight:wp("3%")}}>
                  <Image style={{height:hp("15%"),marginLeft: -wp("8%"),resizeMode: 'contain',marginTop:hp("1.2%")}}
                      source={require('../../assets/basket/two.jpg')}
                  />
                  <View style={{flexDirection:"column",backgroundColor:"white",marginLeft: -wp("8%"),marginTop: hp("3%")}}>
                    <Text style={{fontSize: wp("4.5%"),color: '#4a4a4a',}}>
                 Fresho Potato
                    </Text>
                    <Text style={{color: '#8F8F8F', fontSize: wp("3.5%"), marginTop: hp(".5%")}}>
                    1 kg
                    </Text>
                    <Text style={{ textDecorationLine: 'line-through',marginTop: hp("1%"),textDecorationStyle: 'solid',fontSize: wp("3%"),color: '#8F8F8F',}}>
                    Rs 112.50
                    </Text>
                    <Text style={{ color: 'black',fontSize: wp("4.1%"),fontWeight: 'bold',textDecorationStyle: 'solid',marginTop: 1,}}>
                    Rs 90
                    </Text>
                  </View>
                  <View style={{justifyContent:"flex-end",marginLeft:wp("3%")}}>
                  <View style={{ flexDirection: 'row',justifyContent: 'flex-end',backgroundColor:"white",height:hp("6%"),justifyContent:"center",alignItems:"center"}}>
                    <TouchableOpacity style={styles.iconbox}>
                       <Entypo style={styles.icon} name="plus" />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ color: '#87BE56',justifyContent: 'center',alignItems: 'center',}}>
                     <Text style={{color: '#87BE56', fontWeight: 'bold', fontSize: wp("4"),paddingHorizontal:wp("2%")}}>1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconbox}>
                       <Entypo style={styles.icon} name="minus" />
                    </TouchableOpacity>
                  </View>
              </View>
              </View>

              <View
                style={{ width: wp("25%"), backgroundColor: '#36474f',justifyContent: 'center',alignItems: 'center',flexDirection: 'column',height: hp("18%"),marginTop:-hp(".5%")}}>
                <AntDesign
                  style={{color: 'white', fontSize: hp("3.5%")}}
                  name="delete"
                />
                <Text style={{color: '#87BE56',fontSize: hp("2.6%")}}>Remove</Text>
                <Text style={{color: '#87BE56',fontSize: hp("2.6%")}}>Item</Text>
              </View>
              <View
                style={{
                  width: wp("25%"),marginTop:-hp(".5%"),
                  backgroundColor: '#87BE56',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                  height: hp("18%"),
                }}>
                <Ionicons
                  style={{color: 'white', fontSize: hp("3.5%")}}
                  name="bookmark-outline"
                />
                <Text style={{color: '#36474f',fontSize: hp("2.6%")}}>Save For</Text>
                <Text style={{color: '#36474f',fontSize: hp("2.6%")}}>Later</Text>
              </View>
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
             <View style={{ backgroundColor: 'white',height:hp("18%"),width: "100%",flexDirection: 'row',marginTop: hp(".5%"),padding: wp("1%"),elevation: 2,paddingRight:0,paddingBottom:hp("2%")}}>
              <View  style={{ justifyContent:"space-between",flexDirection:"row",width:wp("100%"),paddingRight:wp("3%")}}>
                  <Image style={{height:hp("14%"),marginLeft: -wp("1%"),resizeMode: 'contain',marginTop:hp("1.2%")}}
                      source={require('../../assets/basket/three.jpg')}
                  />
                  <View style={{flexDirection:"column",backgroundColor:"white",marginLeft: -wp("8%"),marginTop: hp("3%")}}>
                    <Text style={{fontSize: wp("4.5%"),color: '#4a4a4a',}}>
                    Fresh Paneer
                    </Text>
                    <Text style={{color: '#8F8F8F', fontSize: wp("3.5%"), marginTop: hp(".5%")}}>
                    200 g - Pouch
                    </Text>
                    <Text style={{ textDecorationLine: 'line-through',marginTop: hp("1%"),textDecorationStyle: 'solid',fontSize: wp("3%"),color: '#8F8F8F',}}>
                    Rs 95
                    </Text>
                    <Text style={{ color: 'black',fontSize: wp("4.1%"),fontWeight: 'bold',textDecorationStyle: 'solid',marginTop: 1,}}>
                    Rs 90
                    </Text>
                  </View>
                  <View style={{justifyContent:"flex-end",marginLeft:wp("3%")}}>
                  <View style={{ flexDirection: 'row',justifyContent: 'flex-end',backgroundColor:"white",height:hp("6%"),justifyContent:"center",alignItems:"center"}}>
                    <TouchableOpacity style={styles.iconbox}>
                       <Entypo style={styles.icon} name="plus" />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ color: '#87BE56',justifyContent: 'center',alignItems: 'center',}}>
                     <Text style={{color: '#87BE56', fontWeight: 'bold', fontSize: wp("4"),paddingHorizontal:wp("2%")}}>1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconbox}>
                       <Entypo style={styles.icon} name="minus" />
                    </TouchableOpacity>
                  </View>
              </View>
              </View>

              <View
                style={{ width: wp("25%"), backgroundColor: '#36474f',justifyContent: 'center',alignItems: 'center',flexDirection: 'column',height: hp("18%"),marginTop:-hp(".5%")}}>
                <AntDesign
                  style={{color: 'white', fontSize: hp("3.5%")}}
                  name="delete"
                />
                <Text style={{color: '#87BE56',fontSize: hp("2.6%")}}>Remove</Text>
                <Text style={{color: '#87BE56',fontSize: hp("2.6%")}}>Item</Text>
              </View>
              <View
                style={{
                  width: wp("25%"),marginTop:-hp(".5%"),
                  backgroundColor: '#87BE56',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                  height: hp("18%"),
                }}>
                <Ionicons
                  style={{color: 'white', fontSize: hp("3.5%")}}
                  name="bookmark-outline"
                />
                <Text style={{color: '#36474f',fontSize: hp("2.6%")}}>Save For</Text>
                <Text style={{color: '#36474f',fontSize: hp("2.6%")}}>Later</Text>
              </View>
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
             <View style={{ backgroundColor: 'white',height:hp("18%"),width: "100%",flexDirection: 'row',marginTop: hp(".5%"),padding: wp("1%"),elevation: 2,paddingRight:0,paddingBottom:hp("2%")}}>
              <View  style={{ justifyContent:"space-between",flexDirection:"row",width:wp("100%"),paddingRight:wp("3%")}}>
                  <Image style={{height:hp("14%"),marginLeft: -wp("1%"),resizeMode: 'contain',marginTop:hp("1.2%")}}
                      source={require('../../assets/basket/four.jpg')}
                  />
                  <View style={{flexDirection:"column",backgroundColor:"white",marginLeft: -wp("8%"),marginTop: hp("3%")}}>
                    <Text style={{fontSize: wp("4.5%"),color: '#4a4a4a',}}>
                    Lakme - Kajal
                    </Text>
                    <Text style={{color: '#8F8F8F', fontSize: wp("3.5%"), marginTop: hp(".5%")}}>
                    2 pcs
                    </Text>
                    <Text style={{ textDecorationLine: 'line-through',marginTop: hp("1%"),textDecorationStyle: 'solid',fontSize: wp("3%"),color: '#8F8F8F',}}>
                    Rs 310
                    </Text>
                    <Text style={{ color: 'black',fontSize: wp("4.1%"),fontWeight: 'bold',textDecorationStyle: 'solid',marginTop: 1,}}>
                    Rs 300
                    </Text>
                  </View>
                  <View style={{justifyContent:"flex-end",marginLeft:wp("3%")}}>
                  <View style={{ flexDirection: 'row',justifyContent: 'flex-end',backgroundColor:"white",height:hp("6%"),justifyContent:"center",alignItems:"center"}}>
                    <TouchableOpacity style={styles.iconbox}>
                       <Entypo style={styles.icon} name="plus" />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ color: '#87BE56',justifyContent: 'center',alignItems: 'center',}}>
                     <Text style={{color: '#87BE56', fontWeight: 'bold', fontSize: wp("4"),paddingHorizontal:wp("2%")}}>1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconbox}>
                       <Entypo style={styles.icon} name="minus" />
                    </TouchableOpacity>
                  </View>
              </View>
              </View>

              <View
                style={{ width: wp("25%"), backgroundColor: '#36474f',justifyContent: 'center',alignItems: 'center',flexDirection: 'column',height: hp("18%"),marginTop:-hp(".5%")}}>
                <AntDesign
                  style={{color: 'white', fontSize: hp("3.5%")}}
                  name="delete"
                />
                <Text style={{color: '#87BE56',fontSize: hp("2.6%")}}>Remove</Text>
                <Text style={{color: '#87BE56',fontSize: hp("2.6%")}}>Item</Text>
              </View>
              <View
                style={{
                  width: wp("25%"),marginTop:-hp(".5%"),
                  backgroundColor: '#87BE56',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                  height: hp("18%"),
                }}>
                <Ionicons
                  style={{color: 'white', fontSize: hp("3.5%")}}
                  name="bookmark-outline"
                />
                <Text style={{color: '#36474f',fontSize: hp("2.6%")}}>Save For</Text>
                <Text style={{color: '#36474f',fontSize: hp("2.6%")}}>Later</Text>
              </View>


          </View>


          
      </ScrollView>

      <View
            style={{
              height:hp("10%"),
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
          <View style={{height:hp("15%")}}/>
  </View>
  
  </View>
</ScrollView>
        </SafeAreaView>
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
    height:hp("17%"),
    width: Dimensions.get('window').width,
    flexDirection: 'row',
    marginTop: 2,
    flexWrap: 'wrap',
    padding: wp("1%"),
    //paddingTop: 5,
   // paddingLeft: 0,
    elevation: 2,paddingRight:wp("3%"),
  },
  image1: {
    height:hp("12%"),
    marginLeft: -wp("8%"),
    resizeMode: 'contain',marginTop:hp("1.5%")
  },
  textbox: {
    backgroundColor: 'white',
    paddingLeft: 0,
   // width: 210,
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
  iconbox: {borderColor: '#87BE56',justifyContent: 'center',borderRadius: 3,borderWidth: 1.1,paddingHorizontal:wp("2.5%"),paddingVertical:wp("2%")},
  icon: { color: '#87BE56',fontWeight: 'bold',fontSize: wp("5%"),},
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
