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
  StyleSheet,
} from 'react-native';

export default class Sby extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {this.props.data.map((data) => (
          <TouchableOpacity style={styles.imgbg}>
            <Image
              source={data.pic}
              resizeMode="contain"
              style={{flex: 1, width: '100%', height: '100%'}}
            />
            
          </TouchableOpacity>
          
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    marginHorizontal: 10,
    height: 155,
  },
  imgbg: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  
    height: 155,
    
  },
});
