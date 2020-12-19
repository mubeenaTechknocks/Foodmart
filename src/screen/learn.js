// import React, {Component, useState} from 'react';
// import {
//   ActivityIndicator,
//   FlatList,
//   Text,
//   View,
//   Image,
//   StyleSheet,
// } from 'react-native';
// const axios = require('axios');
// export default class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       data: [],
//       isLoading: true,
//     };
//   }
//   //without axios url fetch
//   //componentDidMount() {
//   // fetch('http://192.168.18.14:3000/api/posts/')
//   //   .then((res) => res.json())
//   //   .then((data) => {
//   //     this.setState({data});
//   //     this.setState({isLoading: false});
//   //   })
//   //   .catch((error) => console.error(error));
//   //}
//   async componentDidMount() {
//     await axios
//       .get('http://192.168.0.104:3000/api/posts/')
//       .then((res) => {
//         this.setState({data: res.data});
//         this.setState({isLoading: false});
//       })
//       .catch((error) => console.error(error));
//   }
//   render() {
//     const {data, isLoading} = this.state;

//     return (
//       <View style={{padding: 24}}>
//         {isLoading ? (
//           <ActivityIndicator />
//         ) : (
//           <View>
//             <View style={{backgroundColor: 'pink'}}>
//               <Text>working</Text>

//               <FlatList
//                 data={data}
//                 keyExtractor={(id) => id}
//                 renderItem={({item}) => (
//                   <View>
//                     <Text>
//                       {item.name}, {item.price}
//                     </Text>

//                     <Image
//                       resizeMode="contain"
//                       style={{
//                         flex: 1,
//                         height: 20,
//                         borderRadius: 2,
//                       }}
//                       source={{
//                         uri: 'http://192.168.18.14:3000/' + item.productImage,
//                       }}
//                     />
//                   </View>
//                 )}
//               />
//             </View>
//           </View>
//         )}
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({});



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
              <View style={{ backgroundColor: 'white',
    height:hp("17%"),
    width: Dimensions.get('window').width,
    flexDirection: 'row',
    marginTop: 2,
    //flexWrap: 'wrap',
    padding: wp("1%"),
    //paddingTop: 5,
   // paddingLeft: 0,
    elevation: 2,paddingRight:wp("3%"),}}>
                <TouchableOpacity>
                  <View style={{}}>
                    <Image
                      style={{height:hp("12%"),
                      marginLeft: -wp("8%"),
                      resizeMode: 'contain',marginTop:hp("1.5%")}}
                      source={require('../../assets/basket/one.jpg')}
                    />
                  </View>
                </TouchableOpacity>
                <View style={{ backgroundColor: 'white',
                        paddingLeft: 0,
                     // width: 210,
                       // marginLeft: -wp("2%"),
                      }}>
                                      <Text style={{fontSize: 13,
                        color: '#4a4a4a',
                        paddingTop: 15,
                        flexWrap: 'nowrap',}}>Fresho - Onion</Text>
                                      <Text style={{color: '#8F8F8F', fontSize: 12, marginTop: 2}}>1 kg</Text>
                                      <Text style={{ textDecorationLine: 'line-through',
                        textDecorationStyle: 'solid',
                        fontSize: 12,
                        color: '#8F8F8F',
                        paddingTop: 20,
                                      }}>Rs 37.7</Text>
                                      <Text style={{ color: 'black',
                        fontSize: 14,
                        fontWeight: 'bold',
                        textDecorationStyle: 'solid',
                        marginTop: 1,}}>Rs 30</Text>

                                    <View style={{ flexDirection: 'row',
                      justifyContent: 'flex-end',
                      width: 150,
                      marginTop: -25,
                      marginLeft: 100,}}>
                    <TouchableOpacity style={{borderColor: '#87BE56',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 3,
                    borderWidth: 1.1,
                    paddingHorizontal: 5,}}>
                                      <Entypo style={{ color: '#87BE56',
                    fontWeight: 'bold',
                    fontSize: 18,}} name="plus" />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ color: '#87BE56',
                    height: 30,
                    width: 35,
                    justifyContent: 'center',
                    alignItems: 'center',}}>
                                      <Text style={{color: '#87BE56',
                    fontWeight: 'bold',
                    fontSize: 17,}}>1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{borderColor: '#87BE56',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 3,
                      borderWidth: 1.1,
                      paddingHorizontal: 5,}}>
                      <Entypo style={{ color: '#87BE56',
                      fontWeight: 'bold',
                      fontSize: 18,}} name="minus" />
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
