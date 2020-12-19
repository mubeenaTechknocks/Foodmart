import React, { Component } from "react";
import {
    StyleSheet,
    TextInput,
    View,
    Text,
    Image,
    StatusBar,
    ActivityIndicator
  } from "react-native";
  import EvilIcons from 'react-native-vector-icons/EvilIcons';
  import LinearGradient from 'react-native-linear-gradient' ;
  import { Dimensions } from "react-native";
  import logo from  '../../assets/images/newsplash.png';
  import name from  '../../assets/images/appname.png';
 
  export default class Splashscreen extends Component {
    render() {
        return (
            
 
            <View style={{justifyContent:'center',alignItems:'center',height:'100%',backgroundColor:'#D7ECC5'}}>
         
             <Image resizeMode="contain" style={styles.bg}source={logo}></Image> 
            <Image resizeMode="contain" style={styles.name}source={name}></Image> 
             <StatusBar backgroundColor='#D7ECC5' barStyle='dark-content'></StatusBar>
             <ActivityIndicator style={{marginTop:30}}size="large" color="#87BE56" />
            </View>
          
         
           
            );
        }
        }
        const styles=StyleSheet.create({
         bg:{
             height:300,
             width:300
         } ,
         name:{
            height:100,
            width:300
        } ,
             
            
         
           
        
        })