import * as React from 'react';
import {Component} from 'react';
import { View,Text,SafeAreaView,ScrollView,StatusBar,Image,
         TouchableOpacity,FlatList,Dimensions, 
    } from 'react-native';
import Swiper from 'react-native-swiper';

export default class Swp1 extends React.Component{
    render () {
    return(
        <View style={{ height: 72, }}>
            <Swiper
                autoplay={true}
                showsPagination={false}
                style={{elevation:15}} >
                {this.props.data.map((data) => (
                    <Image 
                        source={data.swp}
                        resizeMode='cover'
                        style={{ flex:1,width:'100%',height:undefined, }} />
                ))}
            </Swiper>
        </View>
    );
    }
}

    