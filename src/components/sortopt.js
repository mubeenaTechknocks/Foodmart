import * as React from 'react';
import {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Image,
} from 'react-native';
import Footer1 from '../components/footer';
export default class Sortopt extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor() {
    super();

    this.state = {
      flagImage1: false,
      flagImage2: true,
      flagImage3: true,
      flagImage4: true,
      flagImage5: true,
      flagImage6: true,
      flagImage7: true,
    };
  }

  render() {
    return (
      <View>
        <View
          style={{
            display: 'flex',
            width: Dimensions.get('window').width,
            minHeight: 50,
            backgroundColor: 'white',
            flexDirection: 'column',
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text
              style={{
                marginLeft: 20,
                fontSize: 16,
                paddingVertical: 10,
              }}>
              Popularity
            </Text>
            <TouchableOpacity
              onPress={() => {
                this.setState({flagImage1: !this.state.flagImage1});
              }}
              style={{paddingTop: 5, paddingRight: 10}}>
              <Image
                style={{height: 32, width: 32}}
                source={
                  this.state.flagImage1 === true
                    ? require('../../assets/filter/circleout.jpg')
                    : require('../../assets/filter/circlein.jpg')
                }
              />
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text
              style={{
                marginLeft: 20,
                fontSize: 16,
                paddingVertical: 10,
              }}>
              Price - Low to High
            </Text>
            <TouchableOpacity
              onPress={() => {
                this.setState({flagImage2: !this.state.flagImage2});
              }}
              style={{paddingTop: 5, paddingRight: 10}}>
              <Image
                style={{height: 32, width: 32}}
                source={
                  this.state.flagImage2 === true
                    ? require('../../assets/filter/circleout.jpg')
                    : require('../../assets/filter/circlein.jpg')
                }
              />
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text
              style={{
                marginLeft: 20,
                fontSize: 16,
                paddingVertical: 10,
              }}>
              Price - High to Low
            </Text>
            <TouchableOpacity
              onPress={() => {
                this.setState({flagImage3: !this.state.flagImage3});
              }}
              style={{paddingTop: 5, paddingRight: 10}}>
              <Image
                style={{height: 32, width: 32}}
                source={
                  this.state.flagImage3 === true
                    ? require('../../assets/filter/circleout.jpg')
                    : require('../../assets/filter/circlein.jpg')
                }
              />
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text
              style={{
                marginLeft: 20,
                fontSize: 16,
                paddingVertical: 10,
              }}>
              Alphabetical
            </Text>
            <TouchableOpacity
              onPress={() => {
                this.setState({flagImage4: !this.state.flagImage4});
              }}
              style={{paddingTop: 5, paddingRight: 10}}>
              <Image
                style={{height: 32, width: 32}}
                source={
                  this.state.flagImage4 === true
                    ? require('../../assets/filter/circleout.jpg')
                    : require('../../assets/filter/circlein.jpg')
                }
              />
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text
              style={{
                marginLeft: 20,
                fontSize: 16,
                paddingVertical: 10,
              }}>
              Rupee Saving - High to Low
            </Text>
            <TouchableOpacity
              onPress={() => {
                this.setState({flagImage5: !this.state.flagImage5});
              }}
              style={{paddingTop: 5, paddingRight: 10}}>
              <Image
                style={{height: 32, width: 32}}
                source={
                  this.state.flagImage5 === true
                    ? require('../../assets/filter/circleout.jpg')
                    : require('../../assets/filter/circlein.jpg')
                }
              />
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text
              style={{
                marginLeft: 20,
                fontSize: 16,
                paddingVertical: 10,
              }}>
              Rupee Saving - Low to High
            </Text>
            <TouchableOpacity
              onPress={() => {
                this.setState({flagImage6: !this.state.flagImage6});
              }}
              style={{paddingTop: 5, paddingRight: 10}}>
              <Image
                style={{height: 32, width: 32}}
                source={
                  this.state.flagImage6 === true
                    ? require('../../assets/filter/circleout.jpg')
                    : require('../../assets/filter/circlein.jpg')
                }
              />
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text
              style={{
                marginLeft: 20,
                fontSize: 16,
                paddingVertical: 10,
              }}>
              % Off - High to Low
            </Text>
            <TouchableOpacity
              onPress={() => {
                this.setState({flagImage7: !this.state.flagImage7});
              }}
              style={{paddingTop: 5, paddingRight: 10}}>
              <Image
                style={{height: 32, width: 32}}
                source={
                  this.state.flagImage7 === true
                    ? require('../../assets/filter/circleout.jpg')
                    : require('../../assets/filter/circlein.jpg')
                }
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
