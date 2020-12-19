import React, {Component, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
const axios = require('axios');
import {Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function (props) {
  const navigation = useNavigation();

  return <Display {...props} navigation={navigation} />;
}
class Display extends Component {
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
    const {navigation} = this.props;
    return (
      <View style={{padding: 24}}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <View style={styles.container}>
            <View>
              <FlatList
                data={data}
                keyExtractor={(id) => id}
                renderItem={({item}) => (
                  <View style={styles.displaybox}>
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate('Product', {
                          screen: this.props.route.params.screen,
                          id: item.id,
                          price: item.price,
                          name: item.name,
                          productImage: item.productImage,
                        })
                      }>
                      <View>
                        <Image
                          style={{
                            height: 160,
                            width: 160,
                            resizeMode: 'contain',
                          }}
                          source={{
                            uri:
                              'http://192.168.42.112:3000/' + item.productImage,
                          }}
                        />
                      </View>
                    </TouchableOpacity>
                    <View style={styles.descriptionview}>
                      {/* <Text style={{fontSize:13,color:'#8F8F8F'}}>{data.brand}</Text> */}
                      <Text style={{fontSize: 13}}>{item.name}</Text>
                      <View style={styles.starview}>
                        <View style={styles.ratingbox}>
                          <Ionicons
                            style={{fontSize: 10, color: '#7CB944'}}
                            name="star "></Ionicons>
                          {/* <Text style={{fontSize:10,color:'#8F8F8F'}}>{data.star}</Text> */}
                        </View>
                        {/* <Text style={{fontSize:10,color:'#8F8F8F'}}>{data.rating}</Text> */}
                      </View>
                      <TouchableOpacity style={styles.inputbox}>
                        {/* <Text style = {{color:'#8F8F8F'}}>{data.kg}</Text> */}
                        <EvilIcons
                          style={{fontSize: 25, color: '#8F8F8F'}}
                          name="chevron-down"></EvilIcons>
                      </TouchableOpacity>
                      <View style={{flexDirection: 'row', marginTop: 3}}>
                        <Text style={{color: '#8F8F8F', fontSize: 12}}>
                          MRP:
                        </Text>
                        <Text style={styles.textmrp}>{item.price}</Text>
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          width: 150,
                        }}>
                        {/* <Text>{data.actmrp}</Text> */}
                        <TouchableOpacity style={styles.add}>
                          <Text style={{color: 'white'}}>ADD</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                )}
              />
            </View>
          </View>
        )}
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
    paddingTop: 15,
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
  typeview: {
    height: 15,
    width: 100,
    backgroundColor: '#E4E3E2',
    borderRadius: 4,
    paddingLeft: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bblogo: {
    width: 10,
    height: 10,
  },
  ratingbox: {
    height: 15,
    width: 25,
    backgroundColor: '#B0D9AE',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
  },
  starview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 93,
  },
});
