import React, {Component, useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Image,
  TouchableOpacity,
  Button,
  ImageBackground,
  ScrollView,
  SafeAreaView,
  TextInput,
  StatusBar,
} from 'react-native';
import logo from '../../assets/login/logo.jpg';
import headerimage from '../../assets/login/headerimage.jpg';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

export default class Loginscreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colorId: 1,
      fontcolor: 'white',
      buttontext: 'Login Using OTP',
      modalVisible: true,
    };
  }
  onPress = (id) => {
    this.setState({colorId: id});
    this.setState({fontcolor: '#75AC63'});
    this.setState({buttontextchange: 'Signup Using OTP'});
  };
  closeModal() {
    this.setState({modalVisible: false});
  }

  render() {
    return (
      <Modal visible={this.state.modalVisible} style={styles.container}>
        <StatusBar
          backgroundColor="#7CB944"
          barStyle="dark-content"></StatusBar>

        <SafeAreaView>
          <ImageBackground style={styles.background} source={headerimage}>
            <ScrollView>
              <EvilIcons
                onPress={() => this.closeModal()}
                style={{
                  fontSize: 40,
                  color: 'white',
                  marginTop: 20,
                  marginLeft: 5,
                }}
                name="close"></EvilIcons>
              <View>
                <Image style={styles.logo} source={logo}></Image>
              </View>
              <View style={styles.touchablestyle}>
                <TouchableOpacity
                  style={
                    this.state.colorId === 1
                      ? styles.changecolor
                      : styles.buttonstyle
                  }
                  onPress={() => this.onPress(1)}>
                  <Text
                    style={
                      this.state.colorId === 1
                        ? styles.changefont
                        : styles.fontstyle
                    }>
                    Login
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={
                    this.state.colorId === 2
                      ? styles.changecolor
                      : styles.buttonstyle
                  }
                  onPress={() => this.onPress(2)}>
                  <Text
                    style={
                      this.state.colorId === 2
                        ? styles.changefont
                        : styles.fontstyle
                    }>
                    Signup
                  </Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </ImageBackground>

          <View style={styles.loginform}>
            <Image
              source={require('../../assets/login/fblogo.png')}
              style={styles.fblogo}
            />
            <Image
              source={require('../../assets/login/google.png')}
              style={styles.formlogo}
            />
            <Text style={{color: '#8F8F8F', fontSize: 18, marginTop: 10}}>
              ____ or _____{' '}
            </Text>
            <TextInput
              style={styles.inputbox}
              placeholder={'Mobile Number (10-digit)/Email Address'}
              placeholderTextColor={'#8F8F8F'}></TextInput>
            <TouchableOpacity style={styles.submitButton}>
              <Text style={styles.submitButtonText}>
                {this.state.colorId === 1
                  ? this.state.buttontext
                  : this.state.buttontextchange}
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    height: 1100,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    position: 'absolute',
  },

  changecolor: {
    width: 170,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },

  buttonstyle: {
    width: 170,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#7AAD4E',
  },
  changefont: {
    color: '#75AC63',
    fontSize: 20,
  },
  fontstyle: {
    color: 'white',
    fontSize: 20,
  },

  logo: {
    height: 60,
    width: 60,
    borderRadius: 10,
    marginTop: 30,
    marginLeft: 140,
  },
  touchablestyle: {
    width: 340,
    flexDirection: 'row',
    marginTop: 40,
    elevation: 40,
  },

  loginform: {
    height: 350,
    width: 340,
    marginTop: 240,
    marginLeft: 10,
    backgroundColor: 'white',
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    elevation: 20,
  },
  formlogo: {
    height: 70,
    width: 70,
    marginTop: 20,
    borderRadius: 50,
    borderWidth: 0.5,
    borderColor: '#8F8F8F',
  },
  fblogo: {
    height: 70,
    width: 70,
    marginTop: 20,
    borderRadius: 500,
    borderWidth: 0.5,
    borderColor: '#8F8F8F',
  },
  inputbox: {
    borderBottomWidth: 0.3,
    borderBottomColor: '#8F8F8F',
    width: 300,
    height: 30,
    marginTop: 50,
    paddingBottom: 1,
  },
  submitButton: {
    width: 300,
    height: 50,
    marginTop: 45,
    backgroundColor: '#F09799',
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitButtonText: {
    color: 'white',
    fontSize: 18,
  },
});
