import * as React from 'react';
import {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Dimensions,
  StyleSheet,
  Image,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Properties} from '../config/properties';
function Sub_tree({label}) {
  return (
    <TouchableOpacity>
    <View style={styles.text}>
      <Text style={styles.innerText}>{label}</Text>
      <TouchableOpacity onPress={() => {}}></TouchableOpacity>
    </View></TouchableOpacity>
  );
}

export default class CategoryComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {expandCard: false};
  }

  render() {
    return (
      <View style={{}}>
        <TouchableOpacity
          style={styles.container}
          onPress={() => {
            this.setState({expandCard: !this.state.expandCard});
          }}>
          <Image
            style={styles.images}
            resizeMode="contain"
            source={this.props.list.images}
          />
          <Text
            style={{
              fontWeight: this.state.expandCard ? 'bold' : '100',
              marginLeft: 10,
              fontSize: 17,
              color: '#4a4a4a',
              flex: 7,
            }}>
            {this.props.list.label}
          </Text>

          <AntDesign
            name={this.state.expandCard ? 'upcircleo' : 'downcircleo'}
            size={20}
            style={styles.icon}
          />
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <FlatList
            data={this.state.expandCard ? this.props.list.datalist : ''}
            renderItem={({item}) => <Sub_tree label={item.title} />}
            keyExtrator={(item) => item.id}
            style={{marginLeft: 25}}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width - 30,
    minHeight: 65,
    backgroundColor: 'white',
    borderColor: '#cccccc',
    borderTopWidth: 0.35,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 5,
    paddingVertical: 10,
    marginLeft: 25,
  },
  text: {
    padding: 12,
    paddingTop: 15,
    justifyContent: 'space-between',
    fontSize: 18,
    flexDirection: 'row',
    height: 50,
    backgroundColor: 'white',
    borderColor: '#cccccc',
    borderTopWidth: 0.35,
    marginLeft: 0,
  },
  innerText: {marginLeft: -10, color: '#4a4a4a'},
  images: {flex: 1, height: 37, width: 37, marginLeft: 8 + -25},
  icon: {
   // marginLeft: -10,
    color: '#537e2c',
    flex: 1 / 2-5,
  },
});
