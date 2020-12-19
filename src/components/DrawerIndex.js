import React from 'react';
import {SafeAreaView, StyleSheet, Text, StatusBar, View} from 'react-native';
import Drawer from './drawer/drawer';

import Ionicons from 'react-native-vector-icons/Ionicons';
<Ionicons name="location-outline" size={12} color="grey" />;
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drawer: false,
    };
  }
  hideDrawer = () => this.setState({drawer: false});
  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />

        <Ionicons
          name="menu-outline"
          size={45}
          style={styles.icon1}
          color="grey"
          onPress={() => this.setState({drawer: true})}
        />
        <Drawer visible={this.state.drawer} hide={() => this.hideDrawer()} />
      </>
    );
  }
}

const styles = StyleSheet.create({
  icon1: {
    fontSize: 35,
    color: 'white',
    marginTop: 10,
    marginLeft: 10,
    flex: 9,
  },
});

export default App;
