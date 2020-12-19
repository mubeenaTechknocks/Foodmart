import * as React from 'react';
import  {useState, useEffect} from 'react';
import {Text, View, TouchableOpacity, Image, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Fruits from './src/screen/Fruits';
import Snacks from './src/screen/snacks';
import Foodgrains from './src/screen/Foodgrains';
import Bakery from './src/screen/bakery';
import Eggs from './src/screen/eggs';
import Baby from './src/screen/baby';
import Kitchen from './src/screen/kitchen';
import Beauty from './src/screen/beauty';
import Cleaning from './src/screen/cleaning';
import Gourmet from './src/screen/gourmet';
import Beverages from './src/screen/beverages';
import Filter from './src/screen/filter';

import Category from './src/screen/categories';
import HomeScreen from './src/screen/Homescreen';
import Offers from './src/screen/offers';
import Basket from './src/screen/basket';
import Search from './src/screen/search';
//import Display from './src/screen/display';
//import Product from './src/screen/product';
import Loginscreen from './src/screen/login';
import Delivery from './src/screen/delivery';
//import Learn from './src/screen/learn';
import Address from './src/screen/address';
import Bakery2 from './src/screen/bakery2';
import Drawer from './src/components/drawer/drawer';


import AnimatedSplash from "react-native-animated-splash-screen";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
// const App = () => {
//   return (
//     <>
//       <SafeAreaView>
//         <Delivery />
//       </SafeAreaView>
//     </>
//   );
// };
// export default App;
import Exotic from './src/screen/innerscreen/Fruits/Exotic';
import Flower from './src/screen/innerscreen/Fruits/Flowers';
import Fresh_fruits from './src/screen/innerscreen/Fruits/fruitList';
import Fruitall from './src/screen/innerscreen/Fruits/FruitsViewall';
import Herbs from './src/screen/innerscreen/Fruits/Herbs';
import Organics from './src/screen/innerscreen/Fruits/organicList';
import Seasonal from './src/screen/innerscreen/Fruits/Seasonal';
import Sprouts from './src/screen/innerscreen/Fruits/Sprouts';
import Vegetablesf from './src/screen/innerscreen/Fruits/ViewallVeg';

import Atta from './src/screen/innerscreen/foodgrains/AttaFlour';
import Rice from './src/screen/innerscreen/foodgrains/Rice';
import Oil from './src/screen/innerscreen/foodgrains/Oil';
import Dals from './src/screen/innerscreen/foodgrains/Dal';
import Organic_staples from './src/screen/innerscreen/foodgrains/Staples';
import Spices from './src/screen/innerscreen/foodgrains/Masala';
import Sugar from './src/screen/innerscreen/foodgrains/Salt';
import Dry_Fruits from './src/screen/innerscreen/foodgrains/Dryfruits';
import Allfoodgrains from './src/screen/innerscreen/foodgrains/Viewall';

import Milk from './src/screen/innerscreen/Bakery/Milk';
import Curd from './src/screen/innerscreen/Bakery/Curd';
import Paneer from './src/screen/innerscreen/Bakery/Paneer';
import Cheese from './src/screen/innerscreen/Bakery/Cheese';
import Cake from './src/screen/innerscreen/Bakery/Cakes';
import Bread from './src/screen/innerscreen/Bakery/Breads';
import Cookie from './src/screen/innerscreen/Bakery/Cookies';
import Goumet from './src/screen/innerscreen/Bakery/Goumet';
import Bsnack from './src/screen/innerscreen/Bakery/Bakerysnack';

import Productd from './src/screen/innerscreen/productscreen/Prodcts';
const HomeStack = createStackNavigator();

const Tab = createBottomTabNavigator();

function TabNavigation({navigation}) {
  return (
    <HomeStack.Navigator initialRouteName="Home">
      <HomeStack.Screen
        options={{headerShown: false}}
        name="Home"
        component={HomeScreen}
      />
      <HomeStack.Screen
        options={{headerShown: false}}
        name="Fruits"
        component={Fruits}
      />
      <HomeStack.Screen
        options={{headerShown: false}}
        name="Productd"
        component={Productd}
      />
      <HomeStack.Screen
        options={{headerShown: false}}
        name="HomeScreen"
        component={HomeScreen}
      />
      {/* <HomeStack.Screen
        options={{headerShown: false}}
        name="Product"
        component={Product}
      /> */}
      {/* <HomeStack.Screen
        options={{headerShown: false}}
        name="Display"
        component={Display}
      /> */}
      <HomeStack.Screen
        options={{headerShown: false}}
        name="Snacks"
        component={Snacks}
      />
       <HomeStack.Screen
        options={{headerShown: false}}
        name="Bakery2"
        component={Bakery2}
      />
      <HomeStack.Screen
        options={{headerShown: false}}
        name="Foodgrains"
        component={Foodgrains}
      />
      <HomeStack.Screen
        options={{headerShown: false}}
        name="Bakery"
        component={Bakery}
      />
      <HomeStack.Screen
        options={{headerShown: false}}
        name="Eggs"
        component={Eggs}
      />
      <HomeStack.Screen
        options={{headerShown: false}}
        name="Beauty"
        component={Beauty}
      />
      <HomeStack.Screen
        options={{headerShown: false}}
        name="Kitchen"
        component={Kitchen}
      />
      <HomeStack.Screen
        options={{headerShown: false}}
        name="Beverages"
        component={Beverages}
      />
      <HomeStack.Screen
        options={{headerShown: false}}
        name="Cleaning"
        component={Cleaning}
      />
      <HomeStack.Screen
        options={{headerShown: false}}
        name="Gourmet"
        component={Gourmet}
      />
      <HomeStack.Screen
        options={{headerShown: false}}
        name="Baby"
        component={Baby}
      />
      <HomeStack.Screen
        options={{headerShown: false}}
        name="Address"
        component={Address}
      />
      <HomeStack.Screen
        options={{headerShown: false}}
        name="Delivery"
        component={Delivery}
      />
      <HomeStack.Screen
        options={{headerShown: false}}
        name=" Loginscreen"
        component={Loginscreen}
      />
      <HomeStack.Screen
        options={{headerShown: false}}
        name="Exotic"
        component={Exotic}
      />
      <HomeStack.Screen
        options={{headerShown: false}}
        name="Flower"
        component={Flower}
      />
      <HomeStack.Screen
        options={{headerShown: false}}
        name="Fresh_fruits"
        component={Fresh_fruits}
      />
      <HomeStack.Screen
        options={{headerShown: false}}
        name="Fruitall"
        component={Fruitall}
      />
      <HomeStack.Screen
        options={{headerShown: false}}
        name="Herbs"
        component={Herbs}
      />
      <HomeStack.Screen
        options={{headerShown: false}}
        name="Organics"
        component={Organics}
      />
      <HomeStack.Screen
        options={{headerShown: false}}
        name="Seasonal"
        component={Seasonal}
      />
      <HomeStack.Screen
        options={{headerShown: false}}
        name="Sprouts"
        component={Sprouts}
      />
      <HomeStack.Screen
        options={{headerShown: false}}
        name="Vegetablesf"
        component={Vegetablesf}
      />
      {/* <HomeStack.Screen
        options={{headerShown: false}}
        name="Filter"
        component={Filter}
      /> */}
      <HomeStack.Screen
        options={{headerShown: false}}
        name="Atta"
        component={Atta}
      />
      <HomeStack.Screen
        options={{headerShown: false}}
        name="Rice"
        component={Rice}
      />
      <HomeStack.Screen
        options={{headerShown: false}}
        name="Oil"
        component={Oil}
      />
      <HomeStack.Screen
        options={{headerShown: false}}
        name="Dals"
        component={Dals}
      />
      <HomeStack.Screen
        options={{headerShown: false}}
        name="Organic_staples"
        component={Organic_staples}
      />
      <HomeStack.Screen
        options={{headerShown: false}}
        name="Spices"
        component={Spices}
      />
      <HomeStack.Screen
        options={{headerShown: false}}
        name="Dry_Fruits"
        component={Dry_Fruits}
      />
      {/* <HomeStack.Screen
      options={{headerShown: false}}
      name="Spices"
      component={Spices}
    /> */}
      <HomeStack.Screen
        options={{headerShown: false}}
        name="Sugar"
        component={Sugar}
      />
      <HomeStack.Screen
        options={{headerShown: false}}
        name="Allfoodgrains"
        component={Allfoodgrains}
      />

      <HomeStack.Screen
        options={{headerShown: false}}
        name="Loginscreen"
        component={Loginscreen}
      />
      <HomeStack.Screen
        options={{headerShown: false}}
        name="Milk"
        component={Milk}
      />
      <HomeStack.Screen
        options={{headerShown: false}}
        name="Curd"
        component={Curd}
      />
      <HomeStack.Screen
        options={{headerShown: false}}
        name="Paneer"
        component={Paneer}
      />
      <HomeStack.Screen
        options={{headerShown: false}}
        name="Cheese"
        component={Cheese}
      />
      <HomeStack.Screen
        options={{headerShown: false}}
        name="Cake"
        component={Cake}
      />
      <HomeStack.Screen
        options={{headerShown: false}}
        name="Bread"
        component={Bread}
      />
      <HomeStack.Screen
        options={{headerShown: false}}
        name="Cookie"
        component={Cookie}
      />
      <HomeStack.Screen
        options={{headerShown: false}}
        name="Goumet"
        component={Goumet}
      />
      <HomeStack.Screen
        options={{headerShown: false}}
        name="Bsnack"
        component={Bsnack}
      />
    </HomeStack.Navigator>
  );
}
 function MyApp() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            if (route.name === 'Home') {
              return (
                <MaterialCommunityIcons
                  name={focused ? 'home-circle' : 'home-circle'}
                  size={size}
                  color={color}
                  style={{marginTop: 3}}
                />
              );
            } else if (route.name === 'Category') {
              return (
                <MaterialCommunityIcons
                  name={
                    focused
                      ? 'format-list-bulleted-square'
                      : 'format-list-checkbox'
                  }
                  size={size}
                  color={color}
                  style={{marginTop: 3}}
                />
              );
            } else if (route.name === 'Offers') {
              return (
                <MaterialCommunityIcons
                  name={
                    focused
                      ? 'currency-usd-circle-outline'
                      : 'currency-usd-circle-outline'
                  }
                  size={size}
                  color={color}
                  style={{marginTop: 3}}
                />
              );
            } else if (route.name === 'Search') {
              return (
                <Ionicons
                  name={focused ? 'search-outline' : 'search-outline'}
                  size={size}
                  color={color}
                  style={{marginTop: 3}}
                />
              );
            } else if (route.name === 'Basket') {
              return (
                <MaterialCommunityIcons
                  name={focused ? 'cart' : 'cart'}
                  size={size}
                  color={color}
                  style={{marginTop: 3}}
                />
              );
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: '#537e2c',
          inactiveTintColor: 'grey',
        }}>
        <Tab.Screen name="Home" component={TabNavigation} />
        <Tab.Screen name="Category" component={Category} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Offers" component={Offers} />
        <Tab.Screen name="Basket" component={Bakery2} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 2000);
  }, []);
 

    return (
      <AnimatedSplash
        translucent={true}
        isLoaded={isLoaded}
        logoImage={require('./assets/images/newsplash.png')}
        logoWidth={hp("30%")}
        logoHeight={hp("30%")}
        backgroundColor={"#D7ECC5"}

      >
        <MyApp />
      </AnimatedSplash>
    )

}
 
export default App