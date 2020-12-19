import React, {Component, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
const axios = require('axios');
import {Dimensions} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';

import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
export default class Display extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true,
    };
  }

  async componentDidMount() {
    await axios
      .get('http://192.168.42.112:3000/api/' + this.props.route.params.screen)
      .then((res) => {
        this.setState({data: res.data});
        this.setState({isLoading: false});
      })
      .catch((error) => console.error(error));
  }
  render() {
    const {data, isLoading} = this.state;

    return (
      <View style={{padding: 24}}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <View>
            <LinearGradient
              colors={['#D0F04F', '#87be56']}
              start={{x: 0, y: 1}}
              end={{x: 1, y: 1}}
              style={styles.header}>
              <EvilIcons
                style={{
                  fontSize: 50,
                  color: 'white',
                  marginTop: 0,
                  marginLeft: 10,
                }}
                name="chevron-left"
              />
              <View style={{flexDirection: 'row'}}>
                <EvilIcons
                  style={{fontSize: 35, color: 'white', paddingRight: 14}}
                  name="search"
                />
                <EvilIcons
                  style={{fontSize: 35, color: 'white', paddingRight: 14}}
                  name="share-google"
                />
                <EvilIcons
                  style={{fontSize: 34, color: 'white', paddingRight: 14}}
                  name="cart"
                />
              </View>
            </LinearGradient>
            <View>
              <Text style={styles.name}>{this.props.route.params.name}</Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.prize}>
                  {this.props.route.params.price}
                </Text>
                <Text style={styles.mrp}>
                  MRP:
                  <Text style={{textDecorationLine: 'line-through'}}>
                    {this.props.route.params.price + 10}
                  </Text>
                </Text>
              </View>
            </View>
            <ScrollView
              style={{backgroundColor: '#e9e9e9', height: 500}}
              contentInsetAdjustmentBehavior="automatic"
              contentContainerStyle={{flexGrow: 1}}>
              <View>
                <View style={{height: 376}}>
                  <View
                    style={{
                      marginTop: 1,
                      backgroundColor: 'white',
                      height: 375,
                      //width: Dimensions.get('window').width - 20,
                      paddingHorizontal: 20,
                    }}>
                    <Image
                      source={{
                        uri:
                          'http://192.168.42.112:3000/' +
                          this.props.route.params.productImage,
                      }}
                      resizeMode="contain"
                      style={{flex: 1, width: '80%', height: undefined}}
                    />
                  </View>
                </View>
                <View style={{backgroundColor: 'white', marginTop: 10}}>
                  <Text style={styles.delivery}>
                    Stadard Delivery: Tomorrow 8:00 AM - 5:00 PM
                  </Text>
                </View>
                <View style={{backgroundColor: 'white', marginTop: 10}}>
                  <Text style={{fontSize: 21, color: '#555', padding: 10}}>
                    About this Product
                  </Text>
                </View>
                <View style={{backgroundColor: 'white', marginTop: 1}}>
                  <TouchableOpacity>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}>
                      <Text style={{fontSize: 17, color: '#555', padding: 10}}>
                        About the Product
                      </Text>
                      <AntDesign
                        name="minus"
                        style={{fontSize: 23, color: '#999', paddingRight: 10}}
                      />
                    </View>
                  </TouchableOpacity>
                  <Text
                    style={{
                      fontSize: 14,
                      color: '#555',
                      paddingLeft: 30,
                      paddingBottom: 15,
                    }}>
                    {this.props.route.params.name}
                  </Text>
                </View>
                <View
                  style={{
                    backgroundColor: 'white',
                    marginTop: 1,
                    marginBottom: 10,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <Text style={{fontSize: 17, color: '#555', padding: 10}}>
                      Variable weight policy
                    </Text>
                    <AntDesign
                      name="minus"
                      style={{fontSize: 23, color: '#999', paddingRight: 10}}
                    />
                  </View>
                  <Text
                    style={{
                      fontSize: 14,
                      color: '#555',
                      paddingLeft: 30,
                      paddingBottom: 15,
                    }}>
                    Please note that fresh fruit and vegetables items will be
                    billed based on exact weight during order processing (in
                    case the actual weight exceeds the requested weight by more
                    than 10%, you will be charged only for 10% excess weight).
                  </Text>
                </View>
              </View>
            </ScrollView>
            <View
              style={{
                height: 45,
                flexDirection: 'row',
                backgroundColor: '#36541c',
              }}>
              <TouchableOpacity style={styles.savebg1}>
                <EvilIcons
                  style={{fontSize: 31, color: 'white', paddingRight: 5}}
                  name="archive"
                />
                <Text style={styles.save}>SAVE FOR LATER</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.savebg2}>
                <EvilIcons
                  style={{fontSize: 30, color: 'white', paddingRight: 5}}
                  name="cart"
                />
                <Text style={styles.save}>ADD TO CART</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
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
  name: {
    fontSize: 23,
    padding: 5,
    paddingLeft: 10,
  },
  prize: {
    paddingBottom: 5,
    fontSize: 16,
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  mrp: {
    paddingTop: 3,
    fontSize: 13,
    paddingLeft: 15,
    color: '#999',
  },
  delivery: {
    padding: 10,
    fontSize: 16,
    paddingLeft: 42,
    color: '#555',
  },
  save: {
    color: 'white',
    fontSize: 14,
  },
  savebg1: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#444',
    height: 45,
  },
  savebg2: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#87be56',
    height: 45,
  },
});
