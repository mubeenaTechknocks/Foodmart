import React, { Component } from "react";
import {
    StyleSheet,
    TextInput,
    View,
    Text,
    StatusBar
  } from "react-native";
  import EvilIcons from 'react-native-vector-icons/EvilIcons';
  import LinearGradient from 'react-native-linear-gradient' ;
  import { Dimensions } from "react-native";
  export default class Header extends Component {
    render() {
        return (
            
 
            <View>
            <LinearGradient colors={['#D0F04F', '#87BE56']} start={{x:0,y:1}} end={{x:1,y:1}}>
            <StatusBar backgroundColor='#87BE56' barStyle='dark-content'></StatusBar>
            <View style={styles.header}>
            <EvilIcons style={{fontSize:40,color:'white',marginTop:20,marginLeft:5}} name="navicon" ></EvilIcons>
            <EvilIcons style={{fontSize:40,color:'white',marginTop:20,marginLeft:270}} name="user" ></EvilIcons>           
            <View style={styles.inputbox}>
            <EvilIcons
              name="search"
              size={25}
              color="#8F8F8F"
             
            />
            <TextInput
              placeholder={'Search 18000+ products'}
              placeholderTextColor={'#8F8F8F'}
            />
            </View>
            </View> 
            </LinearGradient>
            </View>
          
         
           
            );
        }
        }
        const styles=StyleSheet.create({
          
            header:{
                flexDirection:'row',
                flexWrap:'wrap',
                height:110,
           
                
            },    
            inputbox:{
               
                backgroundColor:'white',
                width:340,
                height:40, 
                borderRadius:5,
                flexDirection:'row', 
                alignItems:'center',
                marginLeft:10,
                marginTop:10
              },
        
        })