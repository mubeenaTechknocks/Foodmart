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
import {useNavigation} from '@react-navigation/native';
export default function (props) {
  const navigation = useNavigation();

  return <Sby {...props} navigation={navigation} />;
}
class Sby extends React.Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        {this.props.data.map((data) => (
          <TouchableOpacity
            style={styles.imgbg}
            onPress={() =>
              navigation.navigate(data.datas, {screen: data.data1})
            }>
            <Image
              source={data.pic}
              resizeMode="contain"
              style={{flex: 1, width: '100%', height: 155}}
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
    backgroundColor: '#cbcccb',
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
    elevation: 20,
    height: 155,
    backgroundColor: 'green',
  },
});
