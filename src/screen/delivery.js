import React from 'react';
import {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  View,
  ScrollView,
  Dimensions,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Header from '../components/header';

const header = [
  {
    text: 'Delivery Opions',
    color: '#689f39',
    name: 'arrow-left',
    ic: 'SimpleLineIcons',
  },
];
export default class Delivery extends React.Component {
  render() {
    return (
      <>
        <StatusBar backgroundColor="#87BE56" barStyle="light-content" />

        <SafeAreaView
          style={{
            backgroundColor: '#d0d0d0',
            height: Dimensions.get('window').height,
          }}>
          <View>
            <Header data={header} />
          </View>
          <View
            style={{
              height: 85,
              backgroundColor: 'white',
              elevation: 3,
              paddingHorizontal: 10,
              flexDirection: 'column',
            }}>
            <View
              style={{
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View style={{flexDirection: 'row', paddingTop: 10}}>
                <Ionicons
                  style={{fontSize: 20, color: '#4a4a4a', paddingTop: -5}}
                  name="location-outline"
                />
                <Text
                  style={{
                    color: '#4a4a4a',
                    paddingLeft: 5,
                    fontWeight: 'bold',
                  }}>
                  Deliver to: Mubeena Kabeer
                </Text>
                <Text style={{color: '#969696', paddingLeft: 5}}>
                  (Default)
                </Text>
              </View>
              <View style={{paddingTop: 10}}>
                <Text
                  style={{
                    color: '#5a5a5a',
                    borderRadius: 3,
                    borderColor: '#8f8f8f',
                    borderWidth: 1,
                    paddingHorizontal: 7,
                    paddingVertical: 1,
                    //fontWeight: 'bold',
                    paddingLeft: 8,
                    fontSize: 12,
                  }}>
                  Change
                </Text>
              </View>
            </View>
            <View style={{paddingTop: 5, paddingHorizontal: 5}}>
              <Text style={{color: '#5e5e5e'}}>
                Century Club Ln, Mamangalam, 560005, Banglore, Pin - 560038
              </Text>
            </View>
          </View>
          <View style={{height: 15, backgroundColor: '#d0d0d0'}} />

          <View
            style={{
              height: 50,
              backgroundColor: 'white',
              elevation: 3,
              paddingHorizontal: 10,
              flexDirection: 'column',
            }}>
            <View
              style={{
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View style={{flexDirection: 'row', paddingTop: 10}}>
                <MaterialCommunityIcons
                  style={{fontSize: 20, color: '#4a4a4a', paddingTop: -5}}
                  name="gift-outline"
                />
                <Text
                  style={{
                    color: '#4a4a4a',
                    paddingLeft: 5,
                    fontWeight: 'bold',
                    fontSize: 15,
                  }}>
                  Is this a gift order ?
                </Text>
              </View>
              <View style={{paddingTop: 12}}>
                <Text
                  style={{
                    color: '#5a5a5a',
                    borderRadius: 3,
                    borderColor: '#8f8f8f',
                    borderWidth: 1,
                    paddingHorizontal: 7,
                    paddingVertical: 2,
                    // fontWeight: 'bold',
                    paddingLeft: 8,
                    fontSize: 12,
                  }}>
                  Add Message
                </Text>
              </View>
            </View>
          </View>
          <View style={{height: 15, backgroundColor: '#d0d0d0'}} />
          <View
            style={{
              height: 60,
              backgroundColor: '#eeeeee',
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 10,
              paddingLeft: 15,
            }}>
            <Text
              style={{
                color: '#4a4a4a',
                fontSize: 16,
                fontWeight: 'bold',
                paddingTop: 18,
              }}>
              Default Delivery Option
            </Text>
            <View style={{paddingTop: 10}}>
              <Text
                style={{color: '#4a4a4a', fontWeight: 'bold', fontSize: 12}}>
                1 Shipment
              </Text>
              <Text
                style={{
                  color: '#4a4a4a',
                  fontWeight: 'bold',
                  fontSize: 12,
                  paddingTop: 5,
                }}>
                Delivery Charges: Rs 50
              </Text>
            </View>
          </View>
          <View style={{backgroundColor: 'white', height: 1}}></View>
          <View style={{height: 200, backgroundColor: '#eeeeee'}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 15,
                paddingTop: 15,
              }}>
              <Text
                style={{color: '#4a4a4a', fontWeight: 'bold', fontSize: 14}}>
                Shipment 1: Standard Delivery
              </Text>
              <Text
                style={{
                  color: '#5a5a5a',
                  borderRadius: 3,
                  borderColor: '#8f8f8f',
                  borderWidth: 1,
                  paddingHorizontal: 7,
                  paddingVertical: 2,
                  // fontWeight: 'bold',
                  paddingLeft: 8,
                  fontSize: 12,
                }}>
                View 4 items
              </Text>
            </View>
            <View
              style={{
                backgroundColor: 'white',
                height: 35,
                marginHorizontal: 15,
                marginTop: 15,
                borderRadius: 5,
                borderWidth: 1.2,
                borderColor: '#a8aaa9',
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 5,
              }}>
              <EvilIcons
                style={{fontSize: 24, color: '#4a4a4a', paddingTop: 0}}
                name="clock"
              />
              <Text style={{color: '#4a4a4a', paddingLeft: 3, fontSize: 13}}>
                29 Aug, Sat 12:00 PM - 3:00 PM
              </Text>
              <AntDesign
                name="downcircleo"
                style={{fontSize: 17, color: '#4a4a4a', marginLeft: 140}}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                paddingHorizontal: 16,
                fontSize: 10,
                paddingTop: 8,
              }}>
              <Text style={{color: '#4a4a4a'}}>Delivery Charge: Rs 50</Text>
              <Ionicons
                style={{fontSize: 20, color: '#b0b0b0', paddingLeft: 5}}
                name="ios-information-circle-outline"
              />
            </View>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#87BE56',
                marginHorizontal: 40,
                marginTop: 20,
                borderRadius: 5,
              }}>
              <Text
                style={{
                  color: '#36474f',
                  fontSize: 16,
                  fontWeight: 'bold',
                  paddingVertical: 10,
                }}>
                PROCEED TO PAY
              </Text>
            </View>
          </View>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({});
