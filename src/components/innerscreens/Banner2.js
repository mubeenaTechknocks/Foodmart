import * as React from 'react';
import {Component} from 'react';
import { View,Text,SafeAreaView,ScrollView,StatusBar,Image,
         TouchableOpacity,FlatList,Dimensions, 
    } from 'react-native';

export default class Banner2 extends React.Component{
    render () {
    return(
        <View style={{ marginTop:0 , backgroundColor:'transparent', height:100, }} >
        {this.props.data.map((data) => (
              <Image 
                source={data.pic}
                resizeMode='contain'
                style={{ flex: 1, width: '100%', height: undefined, }} />
        ))}
            </View>       
    );
}
}
