import React from 'react';
import {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  View,
  Image,
  TouchableHighlight,
} from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
export default function (props) {
  const navigation = useNavigation();

  return <Header {...props} navigation={navigation} />;
}
class Header extends React.Component {
  render() {
    return (
      <LinearGradient
        colors={['#D0F04F', '#87BE56']}
        start={{x: 0, y: 1}}
        end={{x: 1, y: 1}}>
        <View style={styles.container}>
          {this.props.data.map((data) => (
            <View
              style={{
                height: 60,

                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 15,
              }}>
              <TouchableHighlight
                onPress={() => this.props.navigation.navigate('HomeScreen')}>
                <SimpleLineIcons
                  name={data.name}
                  size={17}
                  color="white"
                  style={{paddingVertical: 15, paddingLeft: 3}}
                />
              </TouchableHighlight>
              <View style={styles.textbox}>
                <Text style={styles.text}>{data.text}</Text>
              </View>
              <View style={data.name == 'menu' ? styles.A : styles.B}>
                <EvilIcons
                  name="search"
                  size={28}
                  color="white"
                  style={{marginLeft: -17}}
                />
              </View>
            </View>
          ))}
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {height: 55},

  textbox: {
    width: '93%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'white',

    fontWeight: '600',
  },
  A: {display: 'flex', flex: 1},
  B: {display: 'none'},
});
