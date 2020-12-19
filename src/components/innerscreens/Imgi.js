import * as React from 'react';
import {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native';

export default class Imgi extends React.Component {
  render() {
    return (
      <View
        style={{
          marginTop: 9,
          marginBottom: 4,
          backgroundColor: 'transparent',
          height: 185,
        }}>
        {this.props.data.map((data) => (
          <Image
            source={data.pic}
            resizeMode="contain"
            style={{flex: 1, width: '100%', height: undefined}}
          />
        ))}
      </View>
    );
  }
}
