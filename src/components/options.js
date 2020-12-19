import React from 'react';
import {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Foodgrains from '../screen/Foodgrains';

export default function (props) {
  const navigation = useNavigation();

  return <Options {...props} navigation={navigation} />;
}
class Options extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pressIn: false,
    };
  }
  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        {this.props.data.map((data) => (
          <TouchableOpacity
            style={styles.imgbg}
            onPressIn={() => this.setState({pressIn: true})}
            onPressOut={() => this.setState({pressIn: false})}
            onPress={() =>
              navigation.navigate(data.datas, {screen: data.data1})
            }>
            <Image
              style={{
                backgroundColor: this.state.pressIn ? '#537e2c' : '#cbcccb',
                flex: 1,
                height: data.h,
                width: data.w,
                margin: 0.5,
              }}
              source={data.image}
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
    marginHorizontal: 9.8,
    backgroundColor: '#cbcccb',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  imgbg: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    elevation: 30,
  },
  img: {flex: 1, height: 140, width: 132, margin: 0.5, marginTop: 0},
});
