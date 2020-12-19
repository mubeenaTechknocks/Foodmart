import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions,
  TouchableHighlight,
} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';

import {useNavigation} from '@react-navigation/native';
export default function (props) {
  const navigation = useNavigation();

  return <Products {...props} navigation={navigation} />;
}
class Products extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const screens = this.props.route.params.screen;
    return (
      <SafeAreaView style={{flex: 1}}>
        <StatusBar backgroundColor="#87be56" barStyle="light-content" />
        <View>
          <LinearGradient
            colors={['#D0F04F', '#87be56']}
            start={{x: 0, y: 1}}
            end={{x: 1, y: 1}}
            style={styles.header}>
            <TouchableHighlight
              onPress={() =>
                this.props.navigation.navigate(this.props.route.params.screen)
              }>
              <EvilIcons
                style={{
                  fontSize: 50,
                  color: 'white',
                  marginTop: 0,
                  marginLeft: 10,
                }}
                name="chevron-left"
              />
            </TouchableHighlight>
            <View style={{flexDirection: 'row'}}>
              <EvilIcons
                style={{fontSize: 35, color: 'white', paddingRight: 14}}
                name="search"
              />
              <EvilIcons
                style={{fontSize: 35, color: 'white', paddingRight: 14}}
                name="share-google"
              />
              <EvilIcons
                style={{fontSize: 34, color: 'white', paddingRight: 14}}
                name="cart"
              />
            </View>
          </LinearGradient>

          <View>
            <Text style={styles.name}>{this.props.route.params.name}</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.prize}>
                MRP: {this.props.route.params.price2}
              </Text>
              <Text style={styles.mrp}>
                MRP:
                <Text style={{textDecorationLine: 'line-through'}}>
                  {' '}
                  {this.props.route.params.price}
                </Text>
              </Text>
            </View>
          </View>
        </View>

        <ScrollView
          style={{backgroundColor: '#e9e9e9'}}
          contentInsetAdjustmentBehavior="automatic"
          contentContainerStyle={{flexGrow: 1}}>
          <View style={{height: 376}}>
            <View
              style={{
                marginTop: 1,
                backgroundColor: 'white',
                height: 375,
                width: Dimensions.get('window').width,
              }}>
              <Image
                source={this.props.route.params.productImage}
                resizeMode="contain"
                style={{
                  flex: 1,

                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              />
            </View>
          </View>

          <View style={{backgroundColor: 'white', marginTop: 10}}>
            <Text style={styles.delivery}>
              Stadard Delivery: Tomorrow 8:00AM - 5:00PM
            </Text>
          </View>
          <View style={{backgroundColor: 'white', marginTop: 10}}>
            <Text style={{fontSize: 21, color: '#555', padding: 10}}>
              About this Product
            </Text>
          </View>
          <View style={{backgroundColor: 'white', marginTop: 1}}>
            <TouchableOpacity>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text style={{fontSize: 17, color: '#555', padding: 10}}>
                  About the Product
                </Text>
                <AntDesign
                  name="minus"
                  style={{fontSize: 23, color: '#999', paddingRight: 10}}
                />
              </View>
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 14,
                color: '#555',
                paddingLeft: 30,
                paddingBottom: 15,
              }}>
              {this.props.route.params.about1}
            </Text>
          </View>
          <View
            style={{backgroundColor: 'white', marginTop: 1, marginBottom: 10}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 17, color: '#555', padding: 10}}>
                Variable weight policy
              </Text>
              <AntDesign
                name="minus"
                style={{fontSize: 23, color: '#999', paddingRight: 10}}
              />
            </View>
            <Text
              style={{
                fontSize: 14,
                color: '#555',
                paddingLeft: 30,
                paddingBottom: 15,
              }}>
              {this.props.route.params.about2}
            </Text>
          </View>
        </ScrollView>

        <View
          style={{
            height: 45,
            flexDirection: 'row',
            backgroundColor: '#36541c',
          }}>
          <TouchableOpacity style={styles.savebg1}>
            <EvilIcons
              style={{fontSize: 31, color: 'white', paddingRight: 5}}
              name="archive"
            />
            <Text style={styles.save}>SAVE FOR LATER</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.savebg2}>
            <EvilIcons
              style={{fontSize: 30, color: 'white', paddingRight: 5}}
              name="cart"
            />
            <Text style={styles.save}>ADD TO CART</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: '#689f39',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 23,
    padding: 5,
    paddingLeft: 10,
  },
  prize: {
    paddingBottom: 5,
    fontSize: 16,
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  mrp: {
    paddingTop: 3,
    fontSize: 13,
    paddingLeft: 15,
    color: '#999',
  },
  delivery: {
    padding: 10,
    fontSize: 16,
    paddingLeft: 42,
    color: '#555',
  },
  save: {
    color: 'white',
    fontSize: 14,
  },
  savebg1: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#444',
    height: 45,
  },
  savebg2: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#87be56',
    height: 45,
  },
});

// const Onion = [{ pic: require('../../assets/Images/pro/pro1.jpeg'),  }];
// const Potato = [{ pic: require('../../assets/Images/pro/carrot.jpeg'), qty: 2, u: 'kg', }];

// const flower = [{ pic: require('../../assets/Images/pro/flower.jpeg'),  }];
// const vazha_ila = [{ pic: require('../../assets/Images/pro/vazha_ila.jpeg'),  }];
// const Coconut = [{ pic: require('../../assets/Images/pro/coco.jpg'),  }];
// const oilrb = [{ pic: require('../../assets/Images/pro/oil-rb.jpeg'),  }];
// const wheat = [{ pic: require('../../assets/Images/pro/wheat.jpeg'),  }];
// const moonf = [{ pic: require('../../assets/Images/pro/moonf.jpeg'),  }];
// const mcurd = [{ pic: require('../../assets/Images/pro/mcurd.jpeg'),  }];

// const VEG1 = [ "Onion is a vegetable which is almost like a staple in Indian food.This is also known to be one of the essential ingredients of raw salads." ];
// const VEG2 = [ "Fresho Potatoes are nutrient-dense, non-fattening and have reasonable amount of calories. Include them in your regular meals so that the body receives a good supply of carbohydrates, dietary fibers and essential minerals such as copper, magnesium, and iron. In India, potatoes are probably the second-most consumed vegetables after onions."  ]

// const FL1 = ["Marigolds have daisy-like or twice, carnation-like flower heads and are produced separately or in clusters. Marigolds come in special colours, yellow and orange being the most common. It is used for pooja needs and floral decoration. Product image shown is for representation purpose only, the actual product may vary based on season, produce & availability."]
const VEG3 = [
  'Coconut is a extremely steady fruit. It is a grown-up fruit of the cocos nucifera palm. The fruit is approximately spherical to oval in shape and measure between 5-10 inches in width. Its has hard external husk.',
];
// const whe = ["Atta is made from the choicest grains - heavy on the palm, golden amber in colour and hard in a bite. It is carefully ground using modern chakki grinding process for the perfect balance of colour, taste."]
