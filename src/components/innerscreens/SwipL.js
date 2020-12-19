import * as React from 'react';
import {Component} from 'react';
import { View,Text,SafeAreaView,ScrollView,StatusBar,Image,
         TouchableOpacity,FlatList,Dimensions, 
    } from 'react-native';
import Swiper from 'react-native-swiper';

export default class SwipL extends React.Component{
    render () {
    return(
        <View style={{ height: 185 , }}>
            <Swiper
                autoplay={true}
                showsPagination={false}
                >
                {this.props.data.map((data) => (
                    <Image 
                    source={data.swp}
                    resizeMode='stretch'
                    style={{ flex:1,width:'100%',height:undefined, }} />
                ))}
            </Swiper>
        </View>
    );
    }
}
