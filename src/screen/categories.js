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
const hig = Dimensions.get('window').height;
import CategoryComponent from '../components/categorycomponent';
import Header1 from '../components/header1';
import LinearGradient from 'react-native-linear-gradient';
export default class Category extends React.Component {
  render() {
    return (
      <>
        <StatusBar backgroundColor="#537e2c" barStyle="light-content" />
        <SafeAreaView>
          <View style={{backgroundColor: 'white'}}>
            
            <ScrollView
              contentContainerStyle={{
                flexGrow: 1,
              }}>
                 <LinearGradient
          colors={['#D0F04F', '#87BE56']}
          start={{x: 0, y: 1}}
          end={{x: 1, y: 1}}>
      <View style={{height:25}}/>
      </LinearGradient>
                <Header1 data={false} />
              <View >
                <View
                  style={{
                    borderBottomColor: '#cccccc',
                    borderBottomWidth: 0.35,
                    paddingBottom: 1,
                  }}>
                  {DATA.map((datas) => (
                    <CategoryComponent list={datas} key={datas.label} />
                  ))}
                </View>
              </View>
            </ScrollView>
          </View>
        </SafeAreaView>
      </>
    );
  }
}
const styles = StyleSheet.create({});
const DATA = [
  {
    label: 'Fruits & Vegetables',
    images: require('../../assets/categories/cat1.jpg'),
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
    label: ' Foodgrains, Oil and Masala',
    images: require('../../assets/categories/cat2.jpg'),
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
    images: require('../../assets/categories/cat3.jpg'),
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
    images: require('../../assets/categories/cat4.jpg'),
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
    images: require('../../assets/categories/cat5.jpg'),
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
    images: require('../../assets/categories/cat6.jpg'),
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
    images: require('../../assets/categories/cat7.jpg'),
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
    images: require('../../assets/categories/cat8.jpg'),
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
        title: ' Kitchen Accessories',
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
        title: ' Storage & Accessories',
      },
      {
        id: '11',
        title: ' Flask & Casserole',
      },
    ],
  },
  {
    label: 'Egg, Meat and Fish',
    images: require('../../assets/categories/cat9.jpg'),
    datalist: [
      {
        id: '1',
        title: 'All Egg, Meat and Fish',
      },
      {
        id: '2',
        title: ' Eggs ',
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
        title: ' Fish & Seafood ',
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
    images: require('../../assets/categories/cat10.jpg'),
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
        title: ' Drinks & Beverages',
      },
      {
        id: '11',
        title: 'Tinned & Processed Food',
      },
    ],
  },
  {
    label: 'Baby Care',
    images: require('../../assets/categories/cat11.jpg'),
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
        title: ' Baby Bath & Hygiene',
      },
      {
        id: '4',
        title: '   Diapers & Wipes',
      },
      {
        id: '5',
        title: '  Mothers & Maternity ',
      },
      {
        id: '6',
        title: 'Feeding & Nursing',
      },
      {
        id: '7',
        title: ' Baby Accessories',
      },
    ],
  },
];
