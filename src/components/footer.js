import * as React from 'react';
import {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Image,
  StyleSheet,
} from 'react-native';

export default class Footer1 extends React.Component {
  render() {
    return (
      <View
        style={{
          width: Dimensions.get('window').width,
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          bottom: 0,
          backgroundColor: 'white',
          height: 110,
        }}>
        <View style={styles.container}>
          <Text style={styles.text1}>163 Products aviliable</Text>
          <View style={{flexDirection: 'row', paddingTop: 15}}>
            <View style={this.props.data == true ? styles.A : styles.B}>
              <Text style={styles.text2}> CLEAR ALL</Text>
            </View>
            <Text style={styles.text3}>DONE</Text>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderTopColor: '#b6b6b6',
    borderTopWidth: 0.5,

    width: Dimensions.get('window').width,
  },
  text1: {
    fontSize: 15,
    color: '#757575',
    paddingTop: 10,
  },
  text2: {
    marginRight: 15,
    fontSize: 15,
    borderWidth: 0.5,
    borderRadius: 3,
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 8,

    borderColor: '#8f8f8f',
    color: '#4a4a4a',
  },
  text3: {
    fontSize: 15,
    borderRadius: 3,
    backgroundColor: '#4a4a4a',
    paddingVertical: 8,
    paddingHorizontal: 35,

    color: 'white',
  },
  A: {display: 'flex'},
  B: {display: 'none'},
});
