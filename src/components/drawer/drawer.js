import React from 'react';
import {
  Modal,
  View,
  Dimensions,
  StyleSheet,
  Animated,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  FlatList,
  ScrollView,
} from 'react-native';
import {Properties} from '../../config/properties';
import Loginscreen from '../../screen/login';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

// export default function (props) {
//   const navigation = useNavigation();

//   return <Drawer {...props} navigation={navigation} />;
// }

function Sub_tree({label}) {
  return (
    <TouchableOpacity>
      <Text style={styles.list}>{label}</Text>
    </TouchableOpacity>
  );
}

class ShopByCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expandCard: false,
    };
  }

  render() {
    return (
      <View style={styles.cmp}>
        <TouchableOpacity
          onPress={() => {
            this.setState({expandCard: !this.state.expandCard});
          }}
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={styles.Shoptxt}>{this.props.list.label}</Text>

          <Ionicons
            name={this.state.expandCard ? 'remove-sharp' : 'add'}
            size={30}
            color="#87BE56"
            style={{marginTop: 5}}
          />
        </TouchableOpacity>
        <FlatList
          data={this.state.expandCard ? this.props.list.datalist : ''}
          renderItem={({item}) => <Sub_tree label={item.title} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
  }
}

function Btn({label}) {
  return (
    <View style={styles.btn}>
      <Text
        style={{
          color: '#fff',
          margin: 2,
          fontSize: 20,
          fontFamily: Properties.fonts.default,
        }}>
        {label}
      </Text>
    </View>
  );
}

class Drawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expandCard: false,
      rot: false,
      SlideInLeft: new Animated.Value(0),
      w: '80%',
      sh: 'rgba(0,0,0,0.2)',
    };
  }

  _start = () => {
    return Animated.parallel([
      Animated.timing(this.state.SlideInLeft, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  _close = () => {
    this.setState({sh: 'rgba(0,0,0,0)', w: '40%'});
    this.props.hide();
    this.setState({sh: 'rgba(0,0,0,0.2)', w: '80%'});
  };

  render() {
    let {SlideInLeft} = this.state;
    return (
      <Animated.View
        style={{
          transform: [
            {
              translateY: SlideInLeft.interpolate({
                inputRange: [0, 1],
                outputRange: [600, 0],
              }),
            },
          ],
        }}>
        <Modal visible={this.props.visible}>
          <View style={styles.modal}>
            <View style={[styles.menu, {width: this.state.w}]}>
              <View
                style={{
                  width: this.state.rot ? 0 : 'auto',
                  height: this.state.rot ? 0 : 'auto',
                }}>
                <View style={styles.sign}>
                  <TouchableOpacity
                    onPress={() => {
                      navigate('Loginscreen');
                    }}>
                    <Btn label="Login" />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      navigate('Loginscreen');
                    }}>
                    <Btn label="Sign Up" />
                  </TouchableOpacity>
                </View>
                <View style={styles.cont}>
                  <Text style={styles.txt}>Home</Text>
                  <Text style={styles.txt}>Smart Basket</Text>
                  <TouchableOpacity
                    onPress={() => {
                      this.setState({rot: !this.state.rot});
                    }}
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text style={[styles.txt, {fontWeight: 'bold'}]}>
                      Shop By Category
                    </Text>
                    <Text
                      style={[
                        styles.txt,
                        {
                          color: '#87BE56',
                          fontFamily: 'Poppins-Bold',
                          transform: [
                            {rotate: this.state.rot ? '90deg' : '0deg'},
                          ],
                        },
                      ]}>
                      {'>'}
                    </Text>
                  </TouchableOpacity>

                  <Text style={styles.txt}>True Beauty Store</Text>
                  <Text style={styles.txt}>bbstar Membership</Text>
                  <Text style={styles.txt}>Customer Service</Text>
                  <Text style={styles.txt}>bb cookbook</Text>
                  <Text style={styles.txt}>Gift Card</Text>
                  <Text style={styles.txt}>bb Life</Text>
                </View>
              </View>
              <View style={{height: this.state.rot ? 'auto' : 0}}>
                <View
                  style={[
                    styles.back,
                    {
                      height: this.state.rot ? 90 : 0,
                      paddingTop: this.state.rot ? 10 : 0,
                    },
                  ]}>
                  <TouchableOpacity
                    onPress={() => {
                      this.setState({rot: !this.state.rot});
                    }}
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                      alignItems: 'flex-start',
                      marginBottom: 5,
                    }}>
                    <Ionicons
                      name="arrow-back-circle"
                      size={25}
                      color="#fff"
                      style={{marginLeft: 10}}
                    />
                    <Text
                      style={{
                        color: '#fff',
                        fontSize: 18,
                        marginLeft: 5,
                        marginTop: 1,
                      }}>
                      Main Menu
                    </Text>
                  </TouchableOpacity>
                  <View style={{}}>
                    <Text
                      style={{
                        color: '#fff',
                        fontSize: 20,
                        margin: 10,
                        paddingBottom: 10,
                        alignItems: 'center',
                        marginLeft: 90,
                      }}>
                      Shop By Category
                    </Text>
                  </View>
                </View>
                <ScrollView
                  style={{height: Dimensions.get('window').height - 90}}>
                  {DATA.map((datas) => (
                    <ShopByCart list={datas} key={datas.label} />
                  ))}
                </ScrollView>
              </View>
            </View>
            <TouchableHighlight
              underlayColor="rgba(a,a,a ,1)"
              style={[styles.exp, {backgroundColor: this.state.sh}]}
              onPress={() => this._close()}>
              <View />
            </TouchableHighlight>
          </View>
        </Modal>
      </Animated.View>
    );
    this._start();
  }
}
const DATA = [
  {
    label: 'Fruits & Vegetables',

    datalist: [
      {
        id: '1',
        title: 'All Fruits & Vegetables',
      },
      {
        id: '2',
        title: 'Fresh Vegetables',
      },
      {
        id: '3',
        title: 'Herbs & Seasonings',
      },
      {
        id: '4',
        title: 'Fresh Fruits',
      },
      {
        id: '5',
        title: 'Exotic Fruits & Veggies',
      },
      {
        id: '6',
        title: 'Organic Fruits & Vegetables',
      },
      {
        id: '7',
        title: 'Cuts and Sprouts',
      },
      {
        id: '8',
        title: 'Flower Bouquets, Bunches',
      },
    ],
  },
  {
    label: 'Foodgrains, Oil and Masala',

    datalist: [
      {
        id: '1',
        title: 'All Foodgrains, Oil and Masala',
      },
      {
        id: '2',
        title: 'Atta, Flours & Sooji',
      },
      {
        id: '3',
        title: 'Dals & Pulses',
      },
      {
        id: '4',
        title: 'Rice & Rice Products',
      },
      {
        id: '5',
        title: 'Organic Staples ',
      },
      {
        id: '6',
        title: 'Salt, Sugar & Jaggery',
      },
      {
        id: '7',
        title: 'Edible Oils & Ghee',
      },
      {
        id: '8',
        title: 'Masalas & Spices',
      },
      {
        id: '9',
        title: 'Dry Fruits',
      },
    ],
  },
  {
    label: 'Bakery, Cakes & Diary ',

    datalist: [
      {
        id: '1',
        title: 'All Bakery, Cakes & Diary',
      },
      {
        id: '2',
        title: 'Breads & Buns',
      },
      {
        id: '3',
        title: 'Cookies, Rusk & Khari',
      },
      {
        id: '4',
        title: 'Gourmet Breads',
      },
      {
        id: '5',
        title: 'Ice Creams & Desserts',
      },
      {
        id: '6',
        title: 'Bakery Snacks',
      },
      {
        id: '7',
        title: 'Cakes & Pastries',
      },
    ],
  },
  {
    label: 'Beverages',

    datalist: [
      {
        id: '1',
        title: 'All Beverages',
      },
      {
        id: '2',
        title: 'Energy & Soft drinks',
      },
      {
        id: '3',
        title: 'Water',
      },
      {
        id: '4',
        title: 'Tea',
      },
      {
        id: '5',
        title: 'Coffee',
      },
      {
        id: '6',
        title: 'Health Drink, Supplement',
      },
      {
        id: '7',
        title: 'Fruit Juices & Drinks',
      },
    ],
  },
  {
    label: 'Snacks & Branded Foods',

    datalist: [
      {
        id: '1',
        title: 'All Snacks & Branded Foods',
      },
      {
        id: '2',
        title: 'Noodle, Pasta, Vermicell',
      },
      {
        id: '3',
        title: 'Bakery, Cakes & Diary',
      },
      {
        id: '4',
        title: 'Breakfast Cereals',
      },
      {
        id: '5',
        title: 'Biscuits & Cookies',
      },
      {
        id: '6',
        title: 'Frozen Veggies & Snacks',
      },
      {
        id: '7',
        title: 'Spreads, Sauces, Ketchup',
      },
      {
        id: '8',
        title: 'Snacks & Namkeen',
      },
      {
        id: '9',
        title: 'Ready to cook & Eat',
      },
      {
        id: '10',
        title: 'Chocolates and Candles',
      },
      {
        id: '11',
        title: 'Pickles & Chutney ',
      },
      {
        id: '12',
        title: 'Indian Mithal',
      },
    ],
  },
  {
    label: 'Beauty & Hygiene',

    datalist: [
      {
        id: '1',
        title: 'All Beauty & Hygiene',
      },
      {
        id: '2',
        title: 'Feminine Hygiene',
      },
      {
        id: '3',
        title: 'oral care',
      },
      {
        id: '4',
        title: 'Bath & Hand Wash',
      },
      {
        id: '5',
        title: 'Health & Medicine',
      },
      {
        id: '6',
        title: 'Hair Care',
      },
      {
        id: '7',
        title: "Men's Grooming",
      },
      {
        id: '8',
        title: 'Skin Care',
      },
      {
        id: '9',
        title: 'Fragrances & Deos',
      },
      {
        id: '10',
        title: 'Makeup',
      },
    ],
  },
  {
    label: 'Cleaning & Household',

    datalist: [
      {
        id: '1',
        title: 'All Cleaning & Household',
      },
      {
        id: '2',
        title: 'Detergents & Dishwash',
      },
      {
        id: '3',
        title: 'All Purpose Cleaners',
      },
      {
        id: '4',
        title: 'Disposables, Garbage Bag',
      },
      {
        id: '5',
        title: 'Fresheners & Repellents',
      },
      {
        id: '6',
        title: 'Mops, Brushes & Scrubs',
      },
      {
        id: '7',
        title: 'Pooja Needs',
      },
      {
        id: '8',
        title: 'Stationary',
      },
      {
        id: '9',
        title: 'Bins & Bathroom Ware',
      },
      {
        id: '10',
        title: 'Party & Festive Needs',
      },
      {
        id: '11',
        title: 'Car & Shoe Care',
      },
    ],
  },
  {
    label: 'Kitchen, Garden & Pets',

    datalist: [
      {
        id: '1',
        title: 'All Kitchen, Garden & Pets',
      },
      {
        id: '2',
        title: 'Appliances & Electricals',
      },
      {
        id: '3',
        title: 'Pet Food & Accessories',
      },
      {
        id: '4',
        title: 'Cookware & Non Stick',
      },
      {
        id: '5',
        title: 'Kitchen Accessories',
      },
      {
        id: '6',
        title: 'Gardening   ',
      },
      {
        id: '7',
        title: 'Steel Utensils',
      },
      {
        id: '8',
        title: 'Bakeware',
      },
      {
        id: '9',
        title: 'Crockery & Cutlery',
      },
      {
        id: '10',
        title: 'Storage & Accessories',
      },
      {
        id: '11',
        title: 'Flask & Casserole',
      },
    ],
  },
  {
    label: 'Egg, Meat and Fish',

    datalist: [
      {
        id: '1',
        title: 'All Egg, Meat and Fish',
      },
      {
        id: '2',
        title: 'Eggs ',
      },
      {
        id: '3',
        title: 'Poultry ',
      },
      {
        id: '4',
        title: 'Mutton & Lamb',
      },
      {
        id: '5',
        title: 'Sausages, Bacon & Salami',
      },
      {
        id: '6',
        title: 'Fish & Seafood ',
      },
      {
        id: '7',
        title: 'Pork & Other Meats',
      },
      {
        id: '8',
        title: 'Marinades',
      },
    ],
  },
  {
    label: 'Goumet & World Food',

    datalist: [
      {
        id: '1',
        title: 'All Goumet & World Food',
      },
      {
        id: '2',
        title: 'Oils & Vinegar',
      },
      {
        id: '3',
        title: 'Snacks, Dry Fruits, Nuts',
      },
      {
        id: '4',
        title: 'Pasta, Soup & Noodles',
      },
      {
        id: '5',
        title: 'Dairy & Cheese ',
      },
      {
        id: '6',
        title: 'Cereals & Breakfast',
      },
      {
        id: '7',
        title: 'Sauces, Spreads & Dips',
      },
      {
        id: '8',
        title: 'Chocolates & Biscuits',
      },
      {
        id: '9',
        title: 'Cooking & Baking Needs',
      },
      {
        id: '10',
        title: 'Drinks & Beverages',
      },
      {
        id: '11',
        title: 'Tinned & Processed Food',
      },
    ],
  },
  {
    label: 'Baby Care',

    datalist: [
      {
        id: '1',
        title: 'All Baby Care',
      },
      {
        id: '2',
        title: 'Baby Food & Formula',
      },
      {
        id: '3',
        title: 'Baby Bath & Hygiene',
      },
      {
        id: '4',
        title: '  Diapers & Wipes',
      },
      {
        id: '5',
        title: ' Mothers & Maternity ',
      },
      {
        id: '6',
        title: 'Feeding & Nursing',
      },
      {
        id: '7',
        title: 'Baby Accessories',
      },
    ],
  },
];

const styles = StyleSheet.create({
  modal: {
    display: 'flex',
    flexDirection: 'row',
    elevation: 2,
  },
  exp: {
    height: Dimensions.get('window').height,
    width: '20%',
  },
  menu: {
    height: Dimensions.get('window').height,

    backgroundColor: '#ffffff',
    elevation: 9,
  },
  sign: {
    backgroundColor: '#87BE56',
    height: 80,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  back: {
    backgroundColor: '#87BE56',
    height: 80,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingTop: 10,
  },
  btn: {
    borderWidth: 1,
    borderColor: '#ffffff',
    width: 110,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    borderRadius: 2,
  },
  cont: {
    padding: 10,
  },
  txt: {
    fontSize: 18,
    marginTop: 10,
    color: Properties.color.grey,
    fontFamily: Properties.fonts.default,
  },
  sbc: {},
  Shoptxt: {
    fontSize: 15,
    marginTop: 10,
    color: Properties.color.grey,
    fontFamily: Properties.fonts.default,
  },
  cmp: {
    margin: 5,
  },
  list: {
    marginTop: 5,
    marginLeft: 10,
    color: Properties.color.grey,
    fontFamily: Properties.fonts.default,
    fontSize: 16,
  },
});

module.exports = Drawer;
