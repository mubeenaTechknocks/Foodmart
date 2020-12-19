import React from 'react';
import {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  View,
  ScrollView,
  Modal,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

var wid = Dimensions.get('window').width / 2 - 15;

import Filteropt from '../components/filteropt';
import Sortopt from '../components/sortopt';
import Footer1 from '../components/footer';
import LinearGradient from 'react-native-linear-gradient';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

export default class FilterFoodgrains extends React.Component {
  render() {
    return (
      <>
        <StatusBar backgroundColor="#87BE56" barStyle="light-content" />

        <SafeAreaView>
          <ScrollView contentContainerStyle={{flexGrow: 1}}>
            <View style={styles.container2}>
              <View style={styles.container}>
                <LinearGradient
                  colors={['#D0F04F', '#87BE56']}
                  start={{x: 0, y: 1}}
                  end={{x: 1, y: 1}}>
                  <View style={styles.head}>
                    <EvilIcons style={styles.icon} name="close" />
                    <View style={styles.textbox}>
                      <Text style={styles.text}>Filter</Text>
                    </View>
                  </View>
                </LinearGradient>
                <View style={styles.box}>
                  <TouchableOpacity
                    style={styles.buttons}
                    onPress={() => {
                      this.refs.scroll.scrollTo({x: 0});
                    }}>
                    <Text style={styles.button}>Refine by</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.buttons}
                    onPress={() => {
                      this.refs.scroll.scrollTo({
                        x: Dimensions.get('window').width * 2,
                      });
                    }}>
                    <Text style={styles.button}>Sort by</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                horizontal={true}
                pagingEnabled={true}
                indicatorStyle="black"
                showsHorizontalScrollIndicator={false}
                ref={'scroll'}
                contentContainerStyle={styles.horiscroll}>
                <View style={{flexDirection: 'column'}}>
                  <View>
                    <View style={styles.container4} />

                    <View style={styles.refinecontainer}>
                      {DATA.map((datas) => (
                        <Filteropt list={datas} key={datas.label} />
                      ))}
                    </View>
                  </View>
                </View>
                <View style={styles.container3}>
                  <View>
                    <View style={styles.container5} />
                    <View style={styles.sortcontainer}>
                      <Sortopt data={sort} />
                    </View>
                  </View>
                </View>
              </ScrollView>
            </View>
          </ScrollView>
          <View>
            <Footer1 data={true} />
          </View>
        </SafeAreaView>
      </>
    );
  }
}
const styles = StyleSheet.create({
  container: {backgroundColor: 'white'},

  head: {
    // backgroundColor: '#689f39',
    height: 55,
  },
  textbox: {
    width: '93%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'white',
    fontWeight: '600',
    marginTop: -28,
  },
  box: {
    flexDirection: 'row',

    height: 45,
  },
  buttons: {alignItems: 'center', justifyContent: 'center', flex: 1},
  button: {
    color: '#929292',
    fontWeight: 'bold',
    fontSize: 15,
    marginLeft: 1,
  },
  icon: {
    fontSize: 35,
    color: 'white',
    marginTop: 15,
    marginLeft: 10,
  },
  container2: {
    width: '100%',
    backgroundColor: 'white',
    height: 1248,
  },
  horiscroll: {
    flexDirection: 'row',
    flexGrow: 1,
  },
  container3: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  container4: {
    backgroundColor: 'black',
    height: 4,
    marginLeft: 10,
    width: Dimensions.get('window').width / 2 - 15,
  },
  refinecontainer: {
    borderBottomColor: '#cccccc',
    borderBottomWidth: 0.35,
    paddingBottom: 1,
    borderColor: '#cccccc',
    borderTopWidth: 1,
    marginTop: -1,
  },
  container5: {
    backgroundColor: 'black',
    height: 9,
    width: Dimensions.get('window').width / 2 - 20,
    marginLeft: Dimensions.get('window').width / 2 + 10,
  },
  sortcontainer: {
    borderColor: '#cccccc',
    borderTopWidth: 1.5,
    marginTop: -6,
  },
});
const sort = [
  {text: 'Popularity'},
  {text: 'Price - Low to High'},
  {text: 'Price - High to Low'},
  {text: 'Alphabetical'},
  {text: 'Rupee Saving - High to Low'},
  {text: 'Rupee Saving - Low to High'},
  {text: '% Off - High to Low'},
];

const DATA = [
  {
    label: 'Brand',
    datalist: [
      {id: '1', title: 'Aashirvaad'},
      {id: '2', title: 'American Garden'},
      {id: '3', title: 'Arya Organic'},
      {id: '4', title: 'bb Combo'},
      {id: '5', title: 'bb popular'},
      {id: '6', title: 'bb Royal'},
      {id: '7', title: 'Beantree'},
      {id: '8', title: 'Bob Red Milk'},
      {id: '9', title: 'By Nature'},
      {id: '10', title: 'Dhatu Organics & Naturals'},
      {id: '11', title: 'Double horse'},
      {id: '12', title: 'Eastern'},
      {id: '13', title: 'GoodDiet'},
      {id: '14', title: 'Graminway'},
      {id: '15', title: 'Indiras'},
      {id: '16', title: 'Manna'},
      {id: '17', title: 'Nirapara'},
      {id: '18', title: 'Nutrashil'},
      {id: '19', title: 'Nutty Yogi'},
      {id: '20', title: 'Organic Tattva'},
      {id: '21', title: 'Pillsburry'},
      {id: '22', title: 'Safe Harvest'},
      {id: '23', title: 'Serapheena'},
      {id: '24', title: 'Slurrp Farm'},
      {id: '25', title: 'Tata Sampann'},
      {id: '26', title: 'Vivatta'},
      {id: '27', title: 'Weikfield'},
    ],
  },
  {
    label: 'Product Rating',
    datalist: [
      {id: '1', title: require('../../assets/filter/fivestart.jpg')},
      {id: '2', title: require('../../assets/filter/fourstart.jpg')},
      {id: '3', title: require('../../assets/filter/3star.png')},
      {id: '4', title: require('../../assets/filter/twostar.jpg')},
    ],
  },

  {
    label: 'Price',
    datalist: [
      {
        id: '1',
        title: 'Less than Rs 20',
      },
      {
        id: '2',
        title: 'Rs 21 to Rs 50',
      },
      {
        id: '3',
        title: 'Rs 51 to Rs 100',
      },
      {
        id: '4',
        title: 'Rs 101 to Rs 200',
      },
      {
        id: '5',
        title: 'Rs 201 to Rs 500',
      },
      {
        id: '6',
        title: 'More than Rs 501',
      },
    ],
  },

  {
    label: 'Discount',
    datalist: [
      {
        id: '11',
        title: 'Upto 5%',
      },
      {
        id: '12',
        title: '5% - 10%',
      },
      {
        id: '1',
        title: '10% - 15%',
      },
      {
        id: '2',
        title: '15% - 25%',
      },
      {
        id: '3',
        title: 'More than 25%',
      },
    ],
  },
  {
    label: 'Pack Size',
    datalist: [
      {
        id: '1',
        title: '2x1 Kg Multipack',
      },
      {
        id: '2',
        title: '340 g Pouch',
      },
      {
        id: '3',
        title: '400 g',
      },
      {
        id: '4',
        title: '400 g Pouch',
      },
      {
        id: '5',
        title: '425',
      },
      {
        id: '6',
        title: '450',
      },
      {
        id: '7',
        title: '450 g Pouch',
      },
      {
        id: '9',
        title: '5 kg',
      },
      {
        id: '8',
        title: '5 kg Pouch',
      },
      {
        id: '10',
        title: '500 g',
      },
      {
        id: '11',
        title: '500 g Carton',
      },
      {
        id: '12',
        title: '500 g Pouch',
      },
      {
        id: '13',
        title: '680 g Pouch',
      },
      {
        id: '14',
        title: '70 g',
      },
      {
        id: '15',
        title: 'Combo (3 items)',
      },
      {
        id: '16',
        title: 'Combo 2 Pcs',
      },

      {
        id: '17',
        title: 'Combo 3 items',
      },
    ],
  },

  {
    label: 'Food Preference',
    datalist: [
      {
        id: '1',
        title: 'Vegetarian',
      },
      {
        id: '2',
        title: 'Non Vegetarian',
      },
    ],
  },
];
