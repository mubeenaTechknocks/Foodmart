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
  TouchableOpacity,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Header from '../components/header';
import {useNavigation} from '@react-navigation/native';
const header = [
  {
    text: 'Add New Address',
    color: '#689f39',
    name: 'arrow-left',
    ic: 'SimpleLineIcons',
  },
];

export default function (props) {
  const navigation = useNavigation();

  return <Address {...props} navigation={navigation} />;
}

class Address extends React.Component {
  render() {
    const {navigation} = this.props;
    return (
      <>
        <StatusBar backgroundColor="#87BE56" barStyle="light-content" />

        <SafeAreaView
          style={{
            backgroundColor: 'white',
            height: Dimensions.get('window').height,
          }}>
          <View>
            <Header data={header} />
          </View>
          <View style={{flexDirection: 'column'}}>
            <Text
              style={{
                color: '#4a4a4a',
                paddingLeft: 20,
                fontWeight: 'bold',
                fontSize: 18,
                paddingTop: 20,
              }}>
              Personal Details
            </Text>
            <View
              style={{
                flexDirection: 'row',
                paddingLeft: 30,
                paddingTop: 10,
              }}>
              <View
                style={{
                  flexDirection: 'column',
                  width: 165,
                }}>
                <Text style={{color: '#969696', paddingLeft: 5}}>
                  Enter First Name
                </Text>
                <Text
                  style={{
                    borderColor: '#eeeeee',
                    paddingLeft: 5,
                    borderBottomWidth: 1,
                    paddingTop: 10,
                    color: '#4a4a4a',
                    fontSize: 20,
                  }}>
                  {' '}
                </Text>
              </View>
              <View
                style={{flexDirection: 'column', marginLeft: 5, width: 185}}>
                <Text style={{color: '#969696', paddingLeft: 5}}>
                  Enter Last Name
                </Text>
                <Text
                  style={{
                    borderColor: '#eeeeee',
                    paddingLeft: 5,
                    borderBottomWidth: 1,
                    paddingTop: 10,
                    color: '#4a4a4a',
                    fontSize: 20,
                  }}>
                  {' '}
                </Text>
              </View>
            </View>
            <Text
              style={{
                color: '#969696',
                paddingLeft: 5,
                paddingLeft: 30,
                paddingTop: 8,
              }}>
              * Contact number to say hello
            </Text>
            <Text
              style={{
                borderColor: '#eeeeee',
                marginHorizontal: 30,
                borderBottomWidth: 1,
                paddingTop: 10,
                color: '#4a4a4a',
                fontSize: 20,
              }}>
              {'  '}
            </Text>
            <Text
              style={{
                color: '#4a4a4a',
                paddingLeft: 20,
                fontWeight: 'bold',
                fontSize: 18,
                paddingTop: 20,
              }}>
              Address Details
            </Text>
            <View
              style={{
                flexDirection: 'row',
                paddingLeft: 30,
                paddingTop: 10,
              }}>
              <View
                style={{
                  flexDirection: 'column',
                  width: 165,
                }}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={{color: 'red'}}>*</Text>
                  <Text style={{color: '#969696', paddingLeft: 5}}>
                    House no
                  </Text>
                </View>
                <Text
                  style={{
                    borderColor: '#eeeeee',
                    paddingLeft: 5,
                    borderBottomWidth: 1,
                    paddingTop: 10,
                    color: '#4a4a4a',
                    fontSize: 20,
                  }}>
                  {' '}
                </Text>
              </View>
              <View
                style={{flexDirection: 'column', marginLeft: 5, width: 185}}>
                <Text style={{color: '#969696', paddingLeft: 5}}>
                  Apartment name
                </Text>
                <Text
                  style={{
                    borderColor: '#eeeeee',
                    paddingLeft: 5,
                    borderBottomWidth: 1,
                    paddingTop: 10,
                    color: '#4a4a4a',
                    fontSize: 20,
                  }}>
                  {' '}
                </Text>
              </View>
            </View>
            <Text
              style={{
                color: '#969696',
                paddingLeft: 5,
                paddingLeft: 30,
                paddingTop: 8,
              }}>
              Street details to locate you
            </Text>
            <Text
              style={{
                borderColor: '#eeeeee',
                marginHorizontal: 30,
                borderBottomWidth: 1,
                paddingTop: 10,
                color: '#4a4a4a',
                fontSize: 20,
              }}>
              {'  '}
            </Text>
            <Text
              style={{
                color: '#969696',
                paddingLeft: 5,
                paddingLeft: 30,
                paddingTop: 8,
              }}>
              Landmark for easy reach out
            </Text>
            <Text
              style={{
                borderColor: '#eeeeee',
                marginHorizontal: 30,
                borderBottomWidth: 1,
                paddingTop: 10,
                color: '#4a4a4a',
                fontSize: 20,
              }}>
              {'  '}
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  color: '#7b3f49',
                  paddingLeft: 20,
                  fontSize: 18,
                  paddingTop: 20,
                  fontWeight: 'bold',
                }}>
                *
              </Text>
              <Text
                style={{
                  color: '#959595',
                  paddingLeft: 1,
                  fontWeight: 'bold',
                  fontSize: 18,
                  paddingTop: 20,
                }}>
                Area Details
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                paddingLeft: 30,
                paddingTop: 10,
              }}>
              <View
                style={{
                  flexDirection: 'column',
                  width: 165,
                }}>
                <Text style={{color: '#969696', paddingLeft: 5}}>City</Text>
                <Text
                  style={{
                    borderColor: '#eeeeee',
                    paddingLeft: 5,
                    borderBottomWidth: 1,
                    paddingTop: 10,
                    color: '#4a4a4a',
                    fontSize: 20,
                  }}>
                  {' '}
                </Text>
              </View>
              <View
                style={{flexDirection: 'column', marginLeft: 5, width: 185}}>
                <Text style={{color: '#969696', paddingLeft: 5}}>
                  * Pincode
                </Text>
                <Text
                  style={{
                    borderColor: '#eeeeee',
                    paddingLeft: 5,
                    borderBottomWidth: 1,
                    paddingTop: 10,
                    color: '#4a4a4a',
                    fontSize: 20,
                  }}>
                  {' '}
                </Text>
              </View>
            </View>
            <Text
              style={{
                color: '#969696',
                paddingLeft: 5,
                paddingLeft: 30,
                paddingTop: 8,
              }}>
              Choose nick name for this address
            </Text>
            <View
              style={{flexDirection: 'row', paddingLeft: 30, paddingTop: 15}}>
              <Text
                style={{
                  color: '#5a5a5a',
                  borderRadius: 5,
                  borderColor: '#d0d0d0',
                  borderWidth: 1,
                  paddingHorizontal: 15,
                  paddingLeft: 15,
                  paddingVertical: 10,
                  fontWeight: 'bold',
                  fontSize: 15,
                }}>
                Home
              </Text>
              <Text
                style={{
                  color: '#5a5a5a',
                  borderRadius: 5,
                  borderColor: '#d0d0d0',
                  borderWidth: 1,
                  paddingHorizontal: 15,
                  paddingLeft: 15,
                  paddingVertical: 10,
                  fontWeight: 'bold',
                  fontSize: 15,
                  marginLeft: 10,
                }}>
                Office
              </Text>
              <Text
                style={{
                  color: '#5a5a5a',
                  borderRadius: 5,
                  borderColor: '#d0d0d0',
                  borderWidth: 1,
                  paddingHorizontal: 15,
                  paddingLeft: 15,
                  paddingVertical: 10,
                  fontWeight: 'bold',

                  fontSize: 15,
                  marginLeft: 10,
                }}>
                Other
              </Text>
            </View>
            <Text
              style={{
                color: '#969696',
                paddingLeft: 5,
                paddingLeft: 30,
                paddingTop: 8,
              }}>
              Nice name this address
            </Text>
            <Text
              style={{
                borderColor: '#d0d0d0',
                marginHorizontal: 30,
                borderBottomWidth: 1,
                paddingTop: 10,
                color: '#4a4a4a',
                fontSize: 20,
              }}>
              {'  '}
            </Text>
          </View>
          <View
            style={{
              height: 50,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#454543',
              marginTop: 38,
            }}>
            <TouchableOpacity onPress={() => navigation.navigate('Delivery')}>
              <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15}}>
                ADD ADDRESS
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </>
    );
  }
}
const styles = StyleSheet.create({});
