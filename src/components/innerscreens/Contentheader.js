import React, {Component} from 'react';
import {StyleSheet, TextInput, View, Text, StatusBar} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import LinearGradient from 'react-native-linear-gradient';
import {Dimensions} from 'react-native';
import {
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
export default function (props) {
  const navigation = useNavigation();

  return <Contentheader {...props} navigation={navigation} />;
}
class Contentheader extends Component {
  render() {
    return (
      <View>
        <LinearGradient
          colors={['#D0F04F', '#87BE56']}
          start={{x: 0, y: 1}}
          end={{x: 1, y: 1}}>
          <StatusBar
            backgroundColor="#87BE56"
            barStyle="dark-content"></StatusBar>
          <View style={styles.header}>
            <TouchableHighlight
              onPress={() => this.props.navigation.navigate('HomeScreen')}>
              <Ionicons
                name="menu-outline"
                style={{fontSize: 35, color: 'white', marginLeft: 5}}
              />
            </TouchableHighlight>
            <Text style={{fontSize: 18, color: 'white'}}>Food Mart</Text>
            <EvilIcons
              style={{fontSize: 35, color: 'white'}}
              name="search"></EvilIcons>
          </View>
        </LinearGradient>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    height: 60,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
