import React from 'react';
import {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  View,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  TextInput,
  FlatList,
} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';

const renderItem = ({item}) => <Item title={item.title} />;
import Foundation from 'react-native-vector-icons/Foundation';
import LinearGradient from 'react-native-linear-gradient';
export default class Search extends Component {
  render() {
    return (
      <>
        <StatusBar backgroundColor="#87BE56" barStyle="light-content" />

        <View style={{backgroundColor: 'white'}}>
        <LinearGradient
          colors={['#D0F04F', '#87BE56']}
          start={{x: 0, y: 1}}
          end={{x: 1, y: 1}}>
      <View style={{height:35}}/>
      </LinearGradient>
          <LinearGradient
            colors={['#D0F04F', '#87BE56']}
            start={{x: 0, y: 1}}
            end={{x: 1, y: 1}}>
            <View
              style={{
                flexDirection: 'column',
                // backgroundColor: '#689f39',
                height: 110,
              }}>
              <View style={{flexDirection: 'row'}}>
                <SimpleLineIcons
                  name="arrow-left"
                  style={{
                    fontSize: 25,
                    color: 'white',
                    marginTop: 15,
                    marginLeft: 10,
                    flex: 3.5,
                    marginBottom: 10,
                  }}
                />
                <View style={{flex: 3, marginTop: 15}}>
                  <Text style={styles.text}>Search</Text>
                </View>
                <MaterialCommunityIcons
                  name="qrcode-scan"
                  style={{
                    fontSize: 25,
                    color: 'white',
                    marginTop: 15,
                    marginLeft: 10,
                    flex: 1,
                    marginBottom: 10,
                  }}
                />
                <Foundation
                  name="microphone"
                  style={{
                    fontSize: 25,
                    color: 'white',
                    marginTop: 15,
                    marginLeft: 10,
                    flex: 0.6,
                    marginBottom: 10,
                  }}
                />
              </View>

              <View style={styles.inputbox}>
                <EvilIcons
                  name="search"
                  size={25}
                  color="#8F8F8F"
                  style={{marginLeft: -22}}
                />
                <TextInput
                  placeholder={'Search 18000+ products'}
                  placeholderTextColor={'#8F8F8F'}
                />
              </View>
            </View>
          </LinearGradient>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            contentContainerStyle={{flexGrow:1}}
            >
            <View>
          <View>
            <Text
              style={{
                fontSize: 18,
                paddingHorizontal: 15,
                paddingVertical: 10,
                color: '#87BE56',
              }}>
              Popular Searches
            </Text>
          </View>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
          <View style={{height:205}}/>
        </View></ScrollView></View>
      </>
    );
  }
}
const styles = StyleSheet.create({
  inputbox: {
    backgroundColor: 'white',
    width: '96%',
    height: 40,
    marginHorizontal: 9,
    marginTop: 10,
    borderRadius: 3,
    paddingLeft: 30,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 5,
  },

  icon1: {
    fontSize: 25,
    color: 'white',
    marginTop: 15,
    marginLeft: 10,
    flex: 1,
    marginBottom: 10,
  },
  text: {
    fontSize: 19,
    color: 'white',
    flex: 5,
    fontWeight: 'bold',
  },
});
const DATA = [
  {
    id: '1',
    title: 'rice',
  },
  {
    id: '2',
    title: 'bread',
  },
  {
    id: '3',
    title: 'biscuits',
  },
  {
    id: '4',
    title: 'cheese',
  },
  {
    id: '5',
    title: 'vegetables',
  },
  {
    id: '6',
    title: 'mango',
  },
  {
    id: '7',
    title: 'tea',
  },
  {
    id: '8',
    title: 'namkeen',
  },
  {
    id: '9',
    title: 'egg',
  },
  {
    id: '10',
    title: 'mop',
  },
];
const Item = ({title}) => (
  <View style={{backgroundColor: 'white', flexDirection: 'row'}}>
    <Text
      style={{
        fontSize: 18,
        paddingHorizontal: 15,
        paddingVertical: 5,
        flex: 8,
        color: '#5a5a5a',
      }}>
      {title}
    </Text>
    <Feather
      name="arrow-up-left"
      style={{
        fontSize: 26,
        color: '#87BE56',
        marginTop: 5,
        marginLeft: 10,
        flex: 1,
        marginBottom: 10,
      }}
    />
  </View>
);