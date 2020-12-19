import React, {Component} from 'react';
import {StyleSheet, TextInput, View, Text, StatusBar} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';

import FeatherI from 'react-native-vector-icons/Feather';
export default class Header extends Component {
  render() {
    return (
      <>
        <StatusBar backgroundColor="#87BE56" barStyle="light-content" />
        <LinearGradient
          colors={['#D0F04F', '#87BE56']}
          start={{x: 0, y: 1}}
          end={{x: 1, y: 1}}>
          <View style={{ flexDirection:'column',height: 110}}>
            <View style={{flexDirection: 'row'}}>
              <Ionicons name="menu-outline" style={styles.icon1} />
              <View style={this.props.data == true ? styles.A : styles.B}>
                <EvilIcons style={styles.icon2} name="user" />
              </View>
              <View style={this.props.data == false ? styles.C : styles.B}>
                <Text style={styles.text}>Shop By Category</Text>
              </View>
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
  A: {display: 'flex', flex: 1},
  B: {display: 'none'},
  C: {display: 'flex', flex: 18, marginTop: 15},
  icon1: {
    fontSize: 35,
    color: 'white',
    marginTop: 10,
    marginLeft: 10,
    flex: 9,
  },
  text: {
    fontSize: 18,
    color: 'white',

    fontWeight: 'bold',
  },
  icon2: {
    fontSize: 35,
    color: 'white',
    marginTop: 15,
  },
});
